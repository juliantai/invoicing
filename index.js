var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = require('router')(),
    passport = require('passport'),
    _ = require('lodash'),
    projectsData = require('./sample/projects'),
    tasksData = require('./sample/tasks'),
    invoicesData = require('./sample/invoices'),
    clientRouter = require('./routes/client.routes'),
    userRouter = require('./routes/user.routes'),
    invoicesRouter = require('./routes/invoices.routes'),
    projectsRouter = require('./routes/projects.routes'),
    tasksRouter = require('./routes/tasks.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(passport.initialize());
app.use(passport.session());

userRouter(router);
projectsRouter(router);
tasksRouter(router);
invoicesRouter(router);
clientRouter(router);

app.use(router);
app.listen(3000, function(){
  console.log('Listening on port 3000');
});
