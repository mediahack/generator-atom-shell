/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('atom-shell:app', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        appName: "test",
        appVersion: "0.0.0",
        appFrameworkOption: "Angular",
        frontEndFrameworkOption: "Bootstrap",
        testingFrameworkOption: "Mocha",
        shellWinWidth: "480",
        shellWinHeight: "320"
      })
      .on('end', done);
  });

  it('creates files', function() {
    assert.file([
      '.editorconfig',
      '.jshintrc',
      'binaries',
      'bower.json',
      'package.json',
      'gulpfile.js',
      'src',
      'src/scss',
      'src/js',
      'src/index.html',
      'src/main.js',
      'src/package.json'
    ]);
  });
});
