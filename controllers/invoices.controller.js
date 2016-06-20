var invoices = require('../models/invoices');

var invoicesController = {
  allInvoices: function(req, res) {
    invoices.fetchAll(req, function(err, data){
      if(err)
        res.json(404, { status: 404, message: 'Could not locate the project' });
      else
        res.json(data);
    })
  },
  createInvoice: function(req, res) {

    invoices.create(req, function(err, data){
      if(!err)
        res.json({ success: true })
      else
        res.json(422, { status: 422, message: 'No tasks to invoice' })
    })

  },
  getInvoice: function(req, res) {

    invoices.fetchOne(req, function(err, data){
      if(!err)
        res.json(data)
      else
        res.json(404, { status: 404, message: 'Could not locate any invoices for this project' })
    })
  },
  updateInvoice: function(req, res) {
    invoices.update(req, function(err, data){
      if(!err)
        res.json({ success: true })
      else
        res.json(400, { status: 400, message: 'An error occurred' });
    })
  },
  deleteInvoice: function(req, res) {
    res.send("DELETE /projects/:project_id/invoices/:id");
  },
  billInvoice: function(req, res) {
    invoices.bill(req, function(err, data){
      if(!err)
        res.json({ success: true, message: 'PDF is being generated' })
      else
        res.json(422, { status: 422, message: 'No invoice to generate' })
    })
  }
}

module.exports = invoicesController;
