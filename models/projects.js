var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');

var projects = {
  fetchAll: function(req, callback) {
    callback(null, projectsData);
  },
  create: function(req, callback) {
    if(!req.body.company) {
      callback(new Error());
    } else {
      callback(null, req.body);
    }
  },
  fetchOne: function(req, callback) {
    if(!req.params.id || !projectsData[req.params.id]) {
      callback(new Error());
    } else {
      callback(null, projectsData[req.params.id]);
    }
  },
  update: function(req, callback) {
    if(!req.params.id || !projectsData[req.params.id]) {
      callback(new Error());
    } else {
      callback(null, true);
    }
  }
}

module.exports = projects;
