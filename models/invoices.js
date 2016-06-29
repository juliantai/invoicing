var _ = require('lodash'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');

var invoices = {
  fetchAll: function(req, callback) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id )});
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  },
  create: function(req, callback) {
    var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id )});
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  },
  fetchOne: function(req, callback) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  },
  update: function(req, callback) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  },
  bill: function(req, callback) {
    var data = _.filter(invoicesData, { project_id: parseInt(req.params.project_id ), id: parseInt(req.params.id)});
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  },
}

module.exports = invoices;
