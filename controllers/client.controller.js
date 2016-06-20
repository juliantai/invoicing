var clients = require('../models/clients');

var clientController = {
  authenticate: function(req, res) {
    res.send("POST login");
  },
  allProjects: function(req, res){
    // use their session id to get projects
    clients.fetchProjects(req, function(err, data) {
      if(err)
        res.json(404, { status: 404, message: 'No projects at this time' });
      else
        res.json(data);
    });
  },
  projectInvoice: function(req, res){

    clients.fetchInvoices(req, function(err, data) {
      if(err)
        res.json(404, { status: 404, message: 'No invoices at this time' });
      else
        res.json(data);
    });


  },
  payProjectInvoice: function(req, res){
    clients.payInvoice(req, function(err, data) {
      if(err)
        res.json(422, { status: 422, message: 'An error occurred' });
      else
        res.json({ success: true });
    });
  }
}

module.exports = clientController;
