# generator-atom-shell [![Build Status](https://secure.travis-ci.org/mediahack/generator-atom-shell.png?branch=master)](https://travis-ci.org/mediahack/generator-atom-shell)

> [Yeoman](http://yeoman.io) generator


## About Atom-Shell Generator

This generator is for creating desktop applications using [Github's Atom-Shell](https://github.com/atom/atom-shell).

### Binary Atom-Shell

This generator downloads a binary release build of Atom-Shell. If you need a newer or older version you can find a list of [release binaries here](https://github.com/atom/atom-shell/releases). Edit the gulpfile.js and the task for 'atom-download'. Specify your binary version you want in the version property.

Atom-Shell can be customized and has a lot of things you can do with it. However, if you want to do anything fancy like chromeless windows or work with specific you may need to download the source and build your own Atom-Shell project. Here's a link to the [Atom-Shell](https://github.com/atom/atom-shell/tree/master/docs/api) API docs so you can see what can be done with your own compiled version of Atom-Shell.

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

## License

MIT
