var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');


var projectsController = {
  allProjects: function(req, res) {
    res.json(projectsData);
  },
  createProject:function(req, res) {
    if(!req.body.company) {
      res.json(422, { status: 422, message: 'You must provide a company name'});
    } else {
      res.json(req.body)
    }
  },
  getProject: function(req, res) {
    if(req.params.id && projectsData[req.params.id])
      res.json(projectsData[req.params.id]);
    else
      res.json(404, { status: 404, message: 'The project you are searching for could not be found' });
  },
  updateProject: function(req, res) {
    if(req.params.id && projectsData[req.params.id]) {
      res.json({ success: true });
    } else {
      res.json(400, { status: 400, message: 'An error occurred' });
    }
  },
  deleteProject: function(req, res) {
    res.send("delete /projects/:id");
  }
}

module.exports = projectsController;
