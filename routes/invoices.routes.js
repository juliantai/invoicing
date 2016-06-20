var invoicesRouter = function(router) {
  var invoicesController = require('../controllers/invoices.controller');
  router.route('/projects/:project_id/invoices')
  .get(invoicesController.allInvoices)
  .post(invoicesController.createInvoice);

  router.route('/projects/:project_id/invoices/:id')
  .get(invoicesController.getInvoice)
  .put(invoicesController.updateInvoice)
  .delete(invoicesController.deleteInvoice);

  router.route('/projects/:project_id/invoices/:id/bill')
  .post(invoicesController.billInvoice);


}

module.exports = invoicesRouter;

