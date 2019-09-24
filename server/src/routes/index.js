const glob = require('glob');

module.exports = (app, webConfig) => {
    var routes = glob.sync(webConfig.root + '/routes/v1/*.js');
    routes.forEach((route) => {
        require(route)(app);
    });
};