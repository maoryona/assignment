const webConfig = require('./web.config');
const setMiddlewares = require('./src/middlewares');
const setRoutes = require('./src/routes');
const initModels = require('./src/dal/models');
const express = require('express');

const app = express();

if (webConfig.useDocker) {
    initModels();
}
setMiddlewares(app, webConfig);
setRoutes(app, webConfig);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});

module.exports = app;
