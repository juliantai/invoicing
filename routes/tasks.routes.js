var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');

var tasksRouter = function(router) {

  router.route('/projects/:project_id/tasks')
  .get(function(req, res) {
    if(req.params.project_id) {
      var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id) });
      res.json(data);
    } else {
      res.json(404, { status: 404, message: 'Could not locate the project' });
    }
  })
  .post(function(req, res) {
     if(!req.body.description || !req.body.minutes) {
      res.json(422, { status: 422, message: 'Missing parameters'});
    } else {
      res.json(req.body)
    }
  });

  router.route('/projects/:project_id/tasks/:id')
  .put(function(req, res) {
    var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id), id: parseInt(req.params.id) })
    if(data.length > 0)
      res.json({ success: true })
    else
      res.json(400, { status: 400, message: 'An error occurred' });
  })
  .delete(function(req, res) {
    res.send("DELETE /projects/:project_id/tasks/:id");
  });
}

module.exports = tasksRouter;
