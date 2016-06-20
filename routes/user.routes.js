var _ = require('lodash'),
    projectsData = require('../sample/projects'),
    tasksData = require('../sample/tasks'),
    invoicesData = require('../sample/invoices');

var userRouter = function(router) {
  router.route('/login')
  .get(function(req, res) {
    res.send("GET login");
  }).post(function(req, res) {
    res.send("POST login");
  });

}

module.exports = userRouter;
