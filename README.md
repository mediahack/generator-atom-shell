# generator-atom-shell [![Build Status](https://secure.travis-ci.org/mediahack/generator-atom-shell.png?branch=master)](https://travis-ci.org/mediahack/generator-atom-shell)

> [Yeoman](http://yeoman.io) generator


## About Atom-Shell Generator

This generator is for creating desktop applications using [Github's Atom-Shell](https://github.com/atom/atom-shell).

### Binary Atom-Shell

This generator downloads a binary release build of Atom-Shell. If you need a newer or older version you can find a list of [release binaries here](https://github.com/atom/atom-shell/releases). Edit the gulpfile.js and the task for 'atom-download'. Specify your binary version you want in the version property.

Atom-Shell can be customized and has a lot of things you can do with it. However, if you want to do anything fancy like chromeless windows or work with specific you may need to download the source and build your own Atom-Shell project. Here's a link to the [Atom-Shell](https://github.com/atom/atom-shell/tree/master/docs/api) API docs so you can see what can be done with your own compiled version of Atom-Shell.

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-atom-shell from npm, run:

```bash
npm install -g generator-atom-shell
```

Finally, initiate the generator:

```bash
yo atom-shell
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Gulp](http://gulpjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

MIT
