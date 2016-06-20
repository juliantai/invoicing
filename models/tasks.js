var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');

var tasks = {
  fetchAll: function(req, callback) {
    var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id) });
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  },
  create: function(req, callback) {

    if(!req.body.description || !req.body.minutes) {
      callback(new Error());
    } else {
      callback(null, data);
    }
  },
  update: function(req, callback) {
    var data = _.filter(tasksData, { project_id: parseInt(req.params.project_id), id: parseInt(req.params.id) })
    if(!data.length)
      callback(new Error());
    else
      callback(null, data);
  }
}

module.exports = tasks;
