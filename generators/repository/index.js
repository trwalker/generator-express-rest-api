var yeoman = require('yeoman-generator');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  initializingStep: function() {
    this.questions = [];
    this.repositoryName = 'User';
    this.repositoryInstanceName = 'user';
    this.repositoryFolderPath = 'users';
    this.repositoryRequirePathFromTest = '';
  },

  promptingStep: function() {
    this.questions.push({ type    : 'input',
                          name    : 'repositoryName',
                          message : 'Repository Name (leave off the "Repository" postfix)',
                          default : this.repositoryName });

    this.questions.push({ type    : 'input',
                          name    : 'repositoryFolderPath',
                          message : 'Repository Folder Path (relative path, no starting or training slashes)',
                          default :  this.repositoryFolderPath });

    var done = this.async();

    var generator = this;

    var handleAnswers = function(answers) {
      generator.repositoryName = generator._.classify(answers.repositoryName);
      generator.repositoryInstanceName = generator._.camelize(generator.repositoryName.charAt(0).toLowerCase() + generator.repositoryName.slice(1));
      generator.repositoryFolderPath = answers.repositoryFolderPath.toLowerCase();
      generator.repositoryRequirePathFromTest = getTestRequirePrefix(generator.repositoryFolderPath) + 'app/repositories/' + generator.repositoryFolderPath + '/' + generator.repositoryInstanceName + 'repository';

      done();
    };

    this.prompt(this.questions, handleAnswers.bind(this));
  },

  configuringStep: function() {
  },

  defaultStep: function() {
  },

  writingStep: function() {
    copyRepository(this);
    copyRepositoryTest(this);
  },

  conflictsStep: function() {
  },

  installStep: function() {
  },

  endStep: function() {
  }
});

function getTestRequirePrefix(repositoryFolderPath) {
  var requirePrefix = '../../../';

  if(repositoryFolderPath.length !== 0) {
    var folderCount = (repositoryFolderPath.match(/\//g) || []).length + 1;

    for(var i = 0; i < folderCount; i++) {
      requirePrefix = '../' + requirePrefix;
    }
  }

  return requirePrefix;
}

function copyRepository(generator) {
  var repositoryDestination = generator.destinationRoot() +
                              '/app/repositories/' +
                              generator.repositoryFolderPath +
                              '/' +
                              generator.repositoryName.toLowerCase() +
                              'repository.js';

  copyTemplate(generator, 'app/repositories/_repository.js', repositoryDestination);
}

function copyRepositoryTest(generator) {
  var repositoryTestDestination = generator.destinationRoot() +
                                  '/test/spec/repositories/' +
                                  generator.repositoryFolderPath +
                                  '/' +
                                  generator.repositoryName.toLowerCase() +
                                  'repository.tests.js';

  copyTemplate(generator, 'test/spec/repositories/_repository.tests.js', repositoryTestDestination);
}

function copyTemplate(generator, template, path) {
  if(fs.existsSync(path)) {
    console.log('The file "' + path + '" already exists!');
  }
  else {
    generator.template(template, path);
  }
}