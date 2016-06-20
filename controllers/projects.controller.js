var projects = require('../models/projects');

var projectsController = {
  allProjects: function(req, res) {
    projects.fetchAll(req, function(err, data) {
      if(err)
        console.log(err)
      else
        res.json(data);
    })

  },
  createProject:function(req, res) {
    projects.create(req, function(err, data){
      if(err) {
        res.json(422, { status: 422, message: 'You must provide a company name'});
      } else {
        res.json(req.body)
      }
    })
  },
  getProject: function(req, res) {
    projects.fetchOne(req, function(err, data){
      if(err) {
        res.json(404, { status: 404, message: 'The project you are searching for could not be found' });
      } else {
        res.json(data);
      }
    })
  },
  updateProject: function(req, res) {
    projects.update(req, function(err, data){
      if(err)
        res.json(400, { status: 400, message: 'An error occurred' });
      else
        res.json({ success: true });
    });
  },
  deleteProject: function(req, res) {
    res.send("delete /projects/:id");
  }
}

module.exports = projectsController;
