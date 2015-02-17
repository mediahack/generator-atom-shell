# generator-atom-shell [![Build Status](https://secure.travis-ci.org/mediahack/generator-atom-shell.png?branch=master)](https://travis-ci.org/mediahack/generator-atom-shell)

> [Yeoman](http://yeoman.io) generator

![Screenshot](https://raw.githubusercontent.com/mediahack/cdn/master/projects/generator-atom-shell/images/shell.png)

## About Atom-Shell Generator

This generator is for creating desktop applications using [Github's Atom-Shell](https://github.com/atom/atom-shell).

### Binary Atom-Shell

This generator downloads a binary release build of Atom-Shell. If you need a newer or older version you can find a list of [release binaries here](https://github.com/atom/atom-shell/releases). Edit the gulpfile.js and the task for 'atom-download'. Specify your binary version you want in the version property.

Atom-Shell can be customized and has a lot of things you can do with it. You can edit the `src/main.js` file to tweak your shell. Here's a link to the [Atom-Shell API Docs](https://github.com/atom/atom-shell/tree/master/docs/api).

## Getting Started

### Install Yeoman

```bash
npm install -g yo
```

### Yeoman Generators

To install generator-atom-shell from npm, run:

```bash
npm install -g generator-atom-shell
```

Finally, initiate the generator:

```bash
yo atom-shell
```
### App

The default post-install hook for this generator is to build and launch Atom-Shell. You can terminate the
Atom-Shell by using `ctrl+c` in the terminal. You can run any of the Gulp commands or the default which will build and launch Atom-Shell.

```bash
gulp #run default tasks
gulp launch #runs only the Atom-Editor launch command
```

## Supported Frameworks, Libraries, and Testing

This generator supports several Application Frameworks, Front-End Framework/libraries and Testing Framework/Tools. If you'd like to see the current versions supported for each or want to modify them, check out the `versions.json` file located in the `app/templates` folder.

If you'd like to add your favorite framework, library or tool, clone this repo, add your framework and version to the versions.json file. Make sure it works by using the generator. If it all looks good, send me a PR.

### Application Frameworks

Currently there is support for the following Application Frameworks:

* <a href="https://angularjs.org"><img src="https://angularjs.org/img/AngularJS-large.png" height="24px">&nbsp;~1.3.x</a>
* <a href="https://www.polymer-project.org/"><img src="https://www.polymer-project.org/images/logos/lockup.svg" height="24px">&nbsp;~0.5.x</a>

If you're interested in adding your framework, DO IT!

### Front-End Frameworks

Currently there is support for the following Front-End Frameworks:

* <a href="http://getbootstrap.com"><img src="http://getbootstrap.com/2.3.2/assets/img/bs-docs-twitter-github.png" height="24px">&nbsp;Bootstrap ~3.3.x</a>
* <a href="http://foundation.zurb.com/"><img src="http://foundation.zurb.com/assets/img/support/goodies/why-the-yeti.svg" height="24px">&nbsp;Zurb's Foundation ~5.5.x</a>
* <a href="http://getuikit.com/"><img style="background:#2ba3d4;padding:2px;" src="http://getuikit.com/docs/images/logo_uikit.svg" height="24px">&nbsp;~2.16.x</a>
* <a href="http://semantic-ui.com"><img src="http://semantic-ui.com/images/logo.png" height="24px">&nbsp;Sematic-UI ~1.8.x</a>
* <a href="http://purecss.io"><img src="http://purecss.io/img/logo_pure@2x.png" height="24px">&nbsp;~0.5.x</a>

If you're interested in adding your Front-End framework, DO IT!

### Testing Frameworks and Tools

Currently there is support for the following Front-End Frameworks:

* <a href="http://jasmine.github.io"><img src="http://jasmine.github.io/images/jasmine-horizontal.svg" height="24px">&nbsp;~2.2.x</a>
* <a href="http://mochajs.org/"><img src="https://camo.githubusercontent.com/e7a21f5febdfe8ecc4222bed2f3da59efa4d7930/687474703a2f2f662e636c2e6c792f6974656d732f336c316b306e32413155334d3149314c323130702f53637265656e25323053686f74253230323031322d30322d32342532306174253230322e32312e3433253230504d2e706e67" height="24px">&nbsp;Mocha ~2.1.x</a>
* <a href="http://karma-runner.github.io"><img src="http://karma-runner.github.io/assets/img/banner.png" height="24px">&nbsp;~0.12.x</a>
* <a href="http://phantomjs.org"><img src="http://phantomjs.org/img/phantomjs-logo.png" height="24px">&nbsp;~1.9.x</a>

If you're interested in adding your Testing framework, DO IT!


## License

MIT
