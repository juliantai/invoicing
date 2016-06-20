var tasks = require('../models/tasks');

var tasksController = {
  allTasks: function(req, res) {

    tasks.fetchAll(req, function(err, data) {
      if(err)
        res.json(404, { status: 404, message: 'Could not locate the project' });
      else
        res.json(data);
    })

  },
  createTask: function(req, res) {
    tasks.create(req, function(err, data) {
      if(err)
        res.json(422, { status: 422, message: 'Missing parameters'});
      else
        res.json(req.body)
    })

  },
  updateTask: function(req, res) {
    tasks.update(req, function(err, data) {
      if(err)
        res.json(400, { status: 400, message: 'An error occurred' });
      else
        res.json({ success: true })
    })
  },
  deleteTask: function(req, res) {
    res.send("DELETE /projects/:project_id/tasks/:id");
  }
}

module.exports = tasksController;
