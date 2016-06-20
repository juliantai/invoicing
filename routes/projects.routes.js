var projectsRouter = function(router) {
  var projectsController = require('../controllers/projects.controller');
  router.route('/projects')
  .get(projectsController.allProjects)
  .post(projectsController.createProject);

  router.route('/projects/:id')
  .get(projectsController.getProject)
  .put(projectsController.updateProject)
  .delete(projectsController.deleteProject);

}

module.exports = projectsRouter;
