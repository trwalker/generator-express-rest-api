var yeoman = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    initializingStep: function () {
        this.questions = [];
        this.applicationName = path.basename(process.cwd());
        this.version = '1.0.0';
        this.applicationDescription = '';
        this.author = '';
        this.gitRepository = '';
        this.license = '';
    },

    promptingStep: function () {
        if (!this.options.applicationName) {
            this.questions.push({
                type: 'input',
                name: 'applicationName',
                message: 'Application Name',
                default: this.applicationName
            });
        }

        if (!this.options.version) {
            this.questions.push({
                type: 'input',
                name: 'version',
                message: 'Version',
                default: this.version
            });
        }

        if (!this.options.applicationDescription) {
            this.questions.push({
                type: 'input',
                name: 'applicationDescription',
                message: 'Application Description',
                default: this.applicationDescription
            });
        }

        if (!this.options.author) {
            this.questions.push({
                type: 'input',
                name: 'author',
                message: 'Author',
                default: this.author
            });
        }

        if (!this.options.gitRepository) {
            this.questions.push({
                type: 'input',
                name: 'gitRepository',
                message: 'Git Repository',
                default: this.gitRepository
            });
        }

        if (!this.options.license) {
            this.questions.push({
                type: 'input',
                name: 'license',
                message: 'License',
                default: this.license
            });
        }
        var done = this.async();

        var generator = this;

        var getAnswerOrOption = function (answer, option) {
            if (answer)
                return answer;
            return option
        }

        var handleAnswers = function (answers) {
            generator.applicationName = getAnswerOrOption(answers.applicationName, this.options.applicationName);
            generator.version = getAnswerOrOption(answers.version, this.options.version);
            generator.applicationDescription = getAnswerOrOption(answers.applicationDescription, this.options.applicationDescription);
            generator.author = getAnswerOrOption(answers.author, this.options.author);
            generator.gitRepository = getAnswerOrOption(answers.gitRepository, this.options.gitRepository);
            generator.license = getAnswerOrOption(answers.license, this.options.license);

            done();
        };

        this.prompt(this.questions, handleAnswers.bind(this));
    },

    configuringStep: function () {
        copyTemplate(this, '_package.json', 'package.json');
    },

    defaultStep: function () {
    },

    writingStep: function () {
        copyTemplate(this, 'server.js', 'server.js');

        copyTemplate(this, 'app/config/route.config.json', 'app/config/route.config.json');
        copyTemplate(this, 'app/config/route-config.js', 'app/config/route-config.js');
        copyTemplate(this, 'app/config/worker-config.js', 'app/config/worker-config.js');

        copyTemplate(this, 'app/config/settings/settings-config.js', 'app/config/settings/settings-config.js');
        copyTemplate(this, 'app/config/settings/settings.config.dev.json', 'app/config/settings/settings.config.dev.json');
        copyTemplate(this, 'app/config/settings/settings.config.test.json', 'app/config/settings/settings.config.test.json');
        copyTemplate(this, 'app/config/settings/settings.config.prod.json', 'app/config/settings/settings.config.prod.json');

        copyTemplate(this, 'test/mocha.opts', 'test/mocha.opts');
        copyTemplate(this, 'test/tests.initialize.js', 'test/tests.initialize.js');
    },

    conflictsStep: function () {
    },

    installStep: function () {
    },

    endStep: function () {
        this.npmInstall(['express', 'cluster-service', 'body-parser'], {'save': true});
        this.npmInstall(['mocha', 'chai', 'sinon', 'istanbul'], {'saveDev': true});
    }
});

var copyTemplate = function (generator, template, path) {
    if (fs.existsSync(path)) {
        console.log('The file "' + path + '" already exists!');
    }
    else {
        generator.template(template, path);
    }
};
