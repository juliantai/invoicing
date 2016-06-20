var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');

var invoicesController = {
  allInvoices: function(req, res) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id )});
    if(data.length > 0)
      res.json(data);
    else
      res.json(404, { status: 404, message: 'Could not locate the project' });
  },
  createInvoice: function(req, res) {
    var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id )});
    if(data.length > 0)
      res.json({ success: true })
    else
      res.json(422, { status: 422, message: 'No tasks to invoice' })

  },
  getInvoice: function(req, res) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(data.length > 0)
      res.json(data)
    else
      res.json(404, { status: 404, message: 'Could not locate any invoices for this project' })
  },
  updateInvoice: function(req, res) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(data.length > 0)
      res.json({ success: true })
    else
      res.json(400, { status: 400, message: 'An error occurred' });

  },
  deleteInvoice: function(req, res) {
    res.send("DELETE /projects/:project_id/invoices/:id");
  },
  billInvoice: function(req, res) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(data.length > 0)
      res.json({ success: true, message: 'PDF is being generated' })
    else
      res.json(422, { status: 422, message: 'No invoice to generate' })
  }
}

module.exports = invoicesController;
