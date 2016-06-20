var tasksRouter = function(router) {
  var tasksController = require('../controllers/tasks.controller');
  router.route('/projects/:project_id/tasks')
  .get(tasksController.allTasks)
  .post(tasksController.createTask);

  router.route('/projects/:project_id/tasks/:id')
  .put(tasksController.updateTask)
  .delete(tasksController.deleteTask);
}

module.exports = tasksRouter;
