var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');

var clientController = {
  authenticate: function(req, res) {
    res.send("POST login");
  },
  allProjects: function(req, res){
    // use their session id to get projects
    var data = _.filter(invoicesData, { client_id: 1 });
    if(data.length > 0)
      res.json(data);
    else
      res.json(404, { status: 404, message: 'No projects at this time' });
  },
  projectInvoice: function(req, res){
    var data = _.filter(invoicesData, { client_id: 1, project_id: parseInt(req.params.project_id) });
    if(data.length > 0)
      res.json(data);
    else
      res.json(404, { status: 404, message: 'No invoices at this time' });
  },
  payProjectInvoice: function(req, res){
    var data = _.filter(invoicesData, { client_id: 1, project_id: parseInt(req.params.project_id), id: parseInt(req.params.id) });
    if(data.length === 1)
      res.json({ success: true });
    else
      res.json(422, { status: 422, message: 'An error occurred' })
  }
}

module.exports = clientController;
