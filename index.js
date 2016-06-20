var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = require('router')()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);


app.get('/login', function(req, res) {
  res.send("GET login");
});

app.post('/login', function(req, res) {
  res.send("POST login");
});

app.get('/projects',function(req, res) {
  res.send("GET /projects");
});

app.get('/projects/new',function(req, res) {
  res.send("GET /projects/new");
});

app.post('/projects',function(req, res) {
  res.send("POST /projects");
});

app.get('/projects/:id',function(req, res) {
  res.send("GET /projects/:id");
});

app.get('/projects/:id/edit',function(req, res) {
  res.send("GET /projects/:id/edit");
});

app.put('/projects/:id',function(req, res) {
  res.send("PUT /projects/:id");
});

app.delete('/projects/:id',function(req, res) {
  res.send("delete /projects/:id");
});

app.get('/projects/:id/tasks',function(req, res) {
  res.send("GET /projects/:id/tasks");
});

app.post('/projects/:id/tasks',function(req, res) {
  res.send("POST /projects/:id/tasks");
});

app.put('/projects/:id/tasks/:id',function(req, res) {
  res.send("PUT /projects/:id/tasks/:id");
});

app.delete('/projects/:id/tasks/:id',function(req, res) {
  res.send("DELETE /projects/:id/tasks/:id");
});

app.get('/projects/:id/invoices',function(req, res) {
  res.send("GET /projects/:id/invoices");
});

app.post('/projects/:id/invoices',function(req, res) {
  res.send("POST /projects/:id/invoices");
});

app.get('/projects/:id/invoices/:id',function(req, res) {
  res.send("GET /projects/:id/invoices/:id");
});

app.get('/projects/:id/invoices/:id/edit',function(req, res) {
  res.send("GET /projects/:id/invoices/:id/edit");
});

app.put('/projects/:id/invoices/:id',function(req, res) {
  res.send("PUT /projects/:id/invoices/:id");
});

app.post('/projects/:id/invoices/:id/bill',function(req, res) {
  res.send("POST /projects/:id/invoices/:id/bill");
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
  // this should show paid and unpaid projects
  res.send('GET /client/projects')
});

app.get('/client/projects/:id/invoice', function(req, res){
  res.send('GET /client/projects/:id/invoice')
});

app.post('/client/projects/:id/invoice/pay', function(req, res){
  res.send('POST /client/projects/:id/invoice/pay')
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
