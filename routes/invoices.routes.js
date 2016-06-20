var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');

var invoicesRouter = function(router) {
  router.route('/projects/:project_id/invoices')
  .get(function(req, res) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id )});
    if(data.length > 0)
      res.json(data);
    else
      res.json(404, { status: 404, message: 'Could not locate the project' });
  })
  .post(function(req, res) {
    var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id )});
    if(data.tasks.length > 0)
      res.json({ success: true })
    else
      res.json(422, { status: 422, message: 'No tasks to invoice' })

  });

  router.route('/projects/:project_id/invoices/:id')
  .get(function(req, res) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(data.length > 0)
      res.json(data)
    else
      res.json(404, { status: 404, message: 'Could not locate any invoices for this project' })
  })
  .put(function(req, res) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(data.length > 0)
      res.json({ success: true })
    else
      res.json(400, { status: 400, message: 'An error occurred' });

  })
  .delete(function(req, res) {
    res.send("DELETE /projects/:project_id/invoices/:id");
  });

  router.route('/projects/:project_id/invoices/:id/bill')
  .post(function(req, res) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(data.length > 0)
      res.json({ success: true, message: 'PDF is being generated' })
    else
      res.json(422, { status: 422, message: 'No invoice to generate' })
  });


}

module.exports = invoicesRouter;

