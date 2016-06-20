var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');


var tasksController = {
  allTasks: function(req, res) {
    if(req.params.project_id) {
      var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id) });
      res.json(data);
    } else {
      res.json(404, { status: 404, message: 'Could not locate the project' });
    }
  },
  createTask: function(req, res) {
     if(!req.body.description || !req.body.minutes) {
      res.json(422, { status: 422, message: 'Missing parameters'});
    } else {
      res.json(req.body)
    }
  },
  updateTask: function(req, res) {
    var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id), id: parseInt(req.params.id) })
    if(data.length > 0)
      res.json({ success: true })
    else
      res.json(400, { status: 400, message: 'An error occurred' });
  },
  deleteTask: function(req, res) {
    res.send("DELETE /projects/:project_id/tasks/:id");
  }
}

module.exports = tasksController;
