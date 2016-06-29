var _ = require('lodash'),
    invoicesData = require('../sample/invoices');

var clients = {
  fetchProjects: function(req, callback) {
    var data = _.filter(invoicesData, { client_id: 1 });
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  },
  fetchInvoices: function(req, callback) {
    var data = _.filter(invoicesData, { client_id: 1, project_id: parseInt(req.params.project_id) });
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  },
  payInvoice: function(req, callback) {
    var data = _.filter(invoicesData, { client_id: 1, project_id: parseInt(req.params.project_id), id: parseInt(req.params.id) });
    if(data.length === 1)
       callback(null, data);
     else
      callback(new Error());
  }
}

module.exports = clients;
