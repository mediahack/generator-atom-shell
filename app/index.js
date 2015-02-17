'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var AtomShellGenerator = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');

    this.prompts = this.fs.readJSON(this.templatePath() +
      '/prompts.json');

    this.packageVersions = this.fs.readJSON(this.templatePath() +
      '/versions.json');
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Atom-Shell generator!'
    ));

    this.prompt(this.prompts, function(props) {
      this.appName = props.appName;
      this.appVersion = props.appVersion;
      this.runnerOption = props.runnerOption;
      this.appFrameworkOption = props.appFrameworkOption;
      this.frontEndFrameworkOption = props.frontEndFrameworkOption.replace(
        ' ', '-').toLowerCase();
      this.testingFrameworkOption = props.testingFrameworkOption;
      done();
    }.bind(this));

  },

  writing: {
    app: function() {

      this.dest.mkdir('src');
      this.dest.mkdir('src/scss');
      this.dest.mkdir('src/js');

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          appname: this.appName.replace(/\s/g, "-").toLowerCase(),
          version: this.appVersion
        }
      );

      var installPkgs = this.fs.readJSON('package.json');

      for (var x in this.packageVersions.gulp) {
        installPkgs.devDependencies[x] = this.packageVersions.gulp[x];
      }

      var testing = {};
      for (var y = 0, z = this.testingFrameworkOption.length; y < z; y++) {
        var pkg = this.testingFrameworkOption[y].toLowerCase();

        if (pkg == 'none') {
          testing = {};
          continue;
        } else {
          testing[pkg] = this.packageVersions.testing[pkg];
        }
      }

      for (var x in testing) {
        installPkgs.devDependencies[x] = testing[x];
      }

      this.fs.writeJSON('package.json', installPkgs);

      this.src.copy('_gulpfile.js', 'gulpfile.js');

      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'), {
          appname: this.appName.replace(" ", "-").toLowerCase(),
          version: this.appVersion
        }
      );

      var bower = this.fs.readJSON('bower.json');

      var framework = {};
      for (var y = 0, z = this.appFrameworkOption.length; y < z; y++) {
        var pkg = this.appFrameworkOption[y].toLowerCase();

        if (pkg == 'none') {
          framework = {};
          continue;
        } else {
          for (var j in this.packageVersions.framework[pkg]) {
            framework[j] = this.packageVersions.framework[pkg][j];
          }
        }
      }

      for (var x in framework) {
        bower.dependencies[x] = framework[x];
      }

      if (this.frontEndFrameworkOption !== 'none') {
        bower.dependencies[this.frontEndFrameworkOption] = this.packageVersions
          .frontend[
            this.frontEndFrameworkOption];
      }

      this.fs.writeJSON('bower.json', bower);

      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('src/index.html'), {
          appname: this.appName,
        }
      );

      this.src.copy('_src_main.js', 'src/main.js');

      this.fs.copyTpl(
        this.templatePath('_src_main.js'),
        this.destinationPath('src/main.js'), {
          windowWidth: 800,
          windowHeight: 600
        }
      );

      this.fs.copyTpl(
        this.templatePath('_src_package.json'),
        this.destinationPath('src/package.json'), {
          appname: this.appName,
          version: this.appVersion
        }
      );
    },

    projectfiles: function() {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('gitignore', '.gitignore');
    }
  },

  end: function() {
    this.installDependencies();
  }
});

module.exports = AtomShellGenerator;
