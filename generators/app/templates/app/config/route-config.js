var settingsConfig = require('./settings/settings-config');

function RouteConfig() {
}

function registerRoutes(application) {
  var config = loadRouteConfig();

  for(var i = 0, length = config.routes.length; i < length; i++) {
    var routeItem = config.routes[i];

    var controller = loadController(routeItem);
    var route = getRoute(routeItem);
    var method = getMethod(routeItem);

    if (method instanceof Array) {
      method.forEach(function (entry) {
        registerRoute(application, controller, route, entry);
      })
    } else {
      registerRoute(application, controller, route, method);
    }
  }

  createConfigRoute(application);
}

function loadRouteConfig() {
  var config;

  try {
    config = require('./route.config.json');

    if(!config.routes || config.routes.length === 0) {
      throw '"routes" not defined';
    }
  }
  catch(e) {
    throw 'Unable to parse "lib/config/route.config.json": ' + e;
  }

  return config;
}

function loadController(routeItem) {
  var controller;

  if(!routeItem || !routeItem.controller) {
    throw 'Undefined "controller" property in "lib/config/route.config.json"';
  }

  try {
    controller = require(routeItem.controller);
  }
  catch(e) {
    throw 'Unable to load ' + routeItem.controller + ": " + e;
  }

  return controller;
}

function getRoute(routeItem) {
  if(!routeItem || !routeItem.route || routeItem.route.length === 0) {
    throw 'Undefined or empty "route" property in "lib/config/route.config.json"';
  }

  return routeItem.route;
}

function getMethod(routeItem) {
  if(!routeItem || !routeItem.method || routeItem.method.length === 0) {
    throw 'Undefined or empty "method" property in "lib/config/route.config.json"';
  }

  var method;

  if (routeItem.method instanceof Array) {
    var method = [];
    routeItem.method.forEach(function (entry) {
      method.push(validateMethod(entry.toLowerCase()));
    });
    return method;
  } else {
    return validateMethod(routeItem.method.toLowerCase());
  }
}

function validateMethod(method) {
    switch (method.toLowerCase()) {
        case 'get':
        case 'put':
        case 'post':
        case 'delete':
            return method.toLowerCase();
            break;
        default:
            throw 'Invalid REST "method" property in "lib/config/route.config.json": ' + method;
    }
}

function registerRoute(application, controller, route, method) {
  application.route(route)[method](function(req, res, next) {
    controller[method](req, res, next);
  });
}

function createConfigRoute(application) {
  application.route('/config').get(function(req, res, next) {
    res.status(200).json(settingsConfig.settings);
  });
}

RouteConfig.prototype = {
  registerRoutes: registerRoutes
};

var routeConfig = new RouteConfig();

module.exports = routeConfig;
