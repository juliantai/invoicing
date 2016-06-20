var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = require('router')(),
    passport = require('passport'),
    _ = require('lodash'),
    projectsData = require('./sample/projects'),
    tasksData = require('./sample/tasks'),
    invoicesData = require('./sample/invoices');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(passport.initialize());
app.use(passport.session());


app.get('/login', function(req, res) {
  res.send("GET login");
});

app.post('/login', function(req, res) {
  res.send("POST login");
});


app.get('/projects',function(req, res) {
  res.json(projectsData);
});


app.post('/projects',function(req, res) {
  if(!req.body.company) {
    res.json(422, { status: 422, message: 'You must provide a company name'});
  } else {
    res.json(req.body)
  }
});

app.get('/projects/:id',function(req, res) {
  if(req.params.id && projectsData[req.params.id])
    res.json(projectsData[req.params.id]);
  else
    res.json(404, { status: 404, message: 'The project you are searching for could not be found' });
});


app.put('/projects/:id',function(req, res) {
  if(req.params.id && projectsData[req.params.id]) {
    res.json({ success: true });
  } else {
    res.json(400, { status: 400, message: 'An error occurred' });
  }
});

app.delete('/projects/:id',function(req, res) {
  res.send("delete /projects/:id");
});

app.get('/projects/:project_id/tasks',function(req, res) {
  if(req.params.project_id) {
    var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id) });
    res.json(data);
  } else {
    res.json(404, { status: 404, message: 'Could not locate the project' });
  }
});

app.post('/projects/:project_id/tasks',function(req, res) {
   if(!req.body.description || !req.body.minutes) {
    res.json(422, { status: 422, message: 'Missing parameters'});
  } else {
    res.json(req.body)
  }
});

app.put('/projects/:project_id/tasks/:id',function(req, res) {
  var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id), id: parseInt(req.params.id) })
  if(data.length > 0)
    res.json({ success: true })
  else
    res.json(400, { status: 400, message: 'An error occurred' });
});

app.delete('/projects/:project_id/tasks/:id',function(req, res) {
  res.send("DELETE /projects/:project_id/tasks/:id");
});

app.get('/projects/:project_id/invoices',function(req, res) {
  var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id )});
  if(data.length > 0)
    res.json(data);
  else
    res.json(404, { status: 404, message: 'Could not locate the project' });
});

app.post('/projects/:project_id/invoices',function(req, res) {
  var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id )});
  if(data.tasks.length > 0)
    res.json({ success: true })
  else
    res.json(422, { status: 422, message: 'No tasks to invoice' })


});

app.get('/projects/:project_id/invoices/:id',function(req, res) {
  var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
  if(data.length > 0)
    res.json(data)
  else
    res.json(404, { status: 404, message: 'Could not locate any invoices for this project' })
});


app.put('/projects/:project_id/invoices/:id',function(req, res) {
  var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
  if(data.length > 0)
    res.json({ success: true })
  else
    res.json(400, { status: 400, message: 'An error occurred' });

});

app.post('/projects/:project_id/invoices/:id/bill',function(req, res) {
  var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
  if(data.length > 0)
    res.json({ success: true, message: 'PDF is being generated' })
  else
    res.json(422, { status: 422, message: 'No invoice to generate' })
});

app.delete('/projects/:id/invoices/:id',function(req, res) {
  res.send("DELETE /projects/:id/invoices/:id");
});

app.get('/client/login', function(req, res) {
  res.send("GET login");
});

app.post('/client/login', function(req, res) {
  res.send("POST login");
});

app.get('/client/projects', function(req, res){
  // use their session id to get projects
  var data = _.filter(invoicesData, { client_id: 1 });
  if(data.length > 0)
    res.json(data);
  else
    res.json(404, { status: 404, message: 'No projects at this time' });
});

app.get('/client/projects/:project_id/invoice', function(req, res){
  var data = _.filter(invoicesData, { client_id: 1, project_id: parseInt(req.params.project_id) });
  if(data.length > 0)
    res.json(data);
  else
    res.json(404, { status: 404, message: 'No invoices at this time' });
});

app.post('/client/projects/:project_id/invoice/:id/pay', function(req, res){
  var data = _.filter(invoicesData, { client_id: 1, project_id: parseInt(req.params.project_id), id: parseInt(req.params.id) });
  if(data.length === 1)
    res.json({ success: true });
  else
    res.json(422, { status: 422, message: 'An error occurred' })
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
