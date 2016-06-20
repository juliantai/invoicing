var clientRouter = function(router) {
  var clientController = require('../controllers/client.controller');
  router.route('/client/login')
  .post(clientController.authenticate);

  router.route('/client/projects')
  .get(clientController.allProjects);

  router.route('/client/projects/:project_id/invoice')
  .get(clientController.projectInvoice);

  router.route('/client/projects/:project_id/invoice/:id/pay')
  .post(clientController.payProjectInvoice);

}

module.exports = clientRouter;
