var yeoman = require('yeoman-generator');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  initializingStep: function() {
    this.questions = [];
    this.controllerName = 'Users';
    this.controllerInstanceName = 'users';
    this.controllerVersion = 'v1';
    this.controllerFolderPath = 'users';
    this.controllerRoute = '/users/:userid';
    this.controllerMethod = 'GET';
    this.httpMethods = [ 'GET', 'PUT', 'POST', 'DELETE' ];
  },

  promptingStep: function() {
    this.questions.push({ type    : 'input',
                          name    : 'controllerName',
                          message : 'Controller Name (leave off the "Controller" postfix)',
                          default : this.controllerName });

    this.questions.push({ type    : 'input',
                          name    : 'controllerVersion',
                          message : 'Controller Version',
                          default :  this.controllerVersion });

    this.questions.push({ type    : 'input',
                          name    : 'controllerFolderPath',
                          message : 'Controller Folder Path (relative path after the version folder, no starting or training slashes)',
                          default :  this.controllerFolderPath });

    this.questions.push({ type    : 'input',
                          name    : 'controllerRoute',
                          message : 'Controller Route (HTTP request route without the version)',
                          default :  this.controllerRoute });

    this.questions.push({ type    : 'list',
                          name    : 'controllerMethod',
                          message : 'Controller Method',
                          choices : this.httpMethods,
                          default : 0 });

    var done = this.async();

    var generator = this;

    var handleAnswers = function(answers) {
      generator.controllerName = generator._.classify(answers.controllerName);
      generator.controllerInstanceName = generator._.camelize(generator.controllerName.charAt(0).toLowerCase() + generator.controllerName.slice(1));
      generator.controllerVersion = answers.controllerVersion;
      generator.controllerFolderPath = answers.controllerFolderPath.toLowerCase();
      generator.controllerRoute = answers.controllerRoute.toLowerCase();
      generator.controllerMethod = answers.controllerMethod;

      done();
    };

    this.prompt(this.questions, handleAnswers.bind(this));
  },

  configuringStep: function() {
  },

  defaultStep: function() {
  },

  writingStep: function() {
    copyController(this);
    copyControllerTest(this);
    updateRouteConfig(this);
  },

  conflictsStep: function() {
  },

  installStep: function() {
  },

  endStep: function() {
  }
});

function copyController(generator) {
  var controllerDestination = generator.destinationRoot() +
                              '/app/controllers/' +
                              generator.controllerVersion +
                              '/' +
                              generator.controllerFolderPath +
                              '/' +
                              generator.controllerName.toLowerCase() +
                              'controller.js';

  copyTemplate(generator, 'app/controllers/_controller.js', controllerDestination);
}

function copyControllerTest(generator) {
  var controllerTestDestination = generator.destinationRoot() +
                                  '/test/spec/controllers/' +
                                  generator.controllerVersion +
                                  '/' +
                                  generator.controllerFolderPath +
                                  '/' +
                                  generator.controllerName.toLowerCase() +
                                  'controller.tests.js';

  copyTemplate(generator, 'test/spec/_controller.tests.js', controllerTestDestination);
}

function updateRouteConfig(generator) {

  var routeConfigPath = generator.destinationRoot() + '/app/config/route.config.json';

  try {
    var routeConfig = require(routeConfigPath);

    if (routeConfig && routeConfig.routes) {
      var controllerRoute = '/' +
                            generator.controllerVersion +
                            generator.controllerRoute;

      var controllerRequirePath = getControllerRequirePath(generator);

      routeConfig.routes.push({ route: controllerRoute,
                                method: generator.controllerMethod,
                                controller: controllerRequirePath });

      fs.writeFileSync(routeConfigPath, JSON.stringify(routeConfig, null, 2));
    }
    else {
      throw 'Badly formatted route config "' + routeConfigPath + '", routes array is not defined';
    }
  }
  catch (e) {
    throw 'Error parsing and updating route config "' + routeConfigPath + '":' + e;
  }
}

function getControllerRequirePath(generator) {
  return '../controllers/' +
         generator.controllerVersion +
         '/' +
         generator.controllerFolderPath +
         '/' +
         generator.controllerName.toLowerCase() +
         'controller';
}

function copyTemplate(generator, template, path) {
  if(fs.existsSync(path)) {
    throw 'The file "' + path + '" already exists!';
  }
  else {
    generator.template(template, path);
  }
}