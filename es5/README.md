#ES5 Guidelines

##Table of Contents

  1. [Development Environment](#development-environment)
  1. [Create a file](#create-a-file)
    - [if-else](#if-else)
    - [for](#for)
    - [while / do-while](#while-/-do-while)
  1. [Control structures](#control-structures)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Strings](#strings)
  1. [Functions](#functions)

## Development Environment

  - We recommend using [Sublime Text 3](http://www.sublimetext.com/3).

  - We highly recommend using the linter [eslint](http://eslint.org). Download the .eslintrc we use [here]().

## Create a file

  - Embed every files with this [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) UMD (Universal module definition) notation.

    ```javascript
    ;(function(env, name, dependencies, factory) {

      if (typeof env.define === 'function' && env.define.amd)
        env.define(name, dependencies, factory.bind(env));
      else if (typeof env.module === 'object' && env.module.exports) {
        module.exports = factory.apply(env, dependencies.map(function(item) {
          return require(item);
        }));
      } else {
        env[name] = factory.apply(env, dependencies.map(function(item) {
          var splitted = item.split('/');
          // return env[item.replace(/(?:(?:(?:[^\/]+)(?:\/))+)(.+)/, '$1.js')];
          return env[splitted[splitted.length - 1]];
        }));
      }

    })(this, 'filename', [
      'path/to/dependency'
    ], function(dependency) {
      'use strict';

      // Code here
      // env is available in this

    });
    ```

## Control structures

### if-else

  - Don't use braces for one-line action

    ```javascript
    var test = 42;

    // bad
    if (test > 0) {
      test++;
    }

    // good
    if (test > 0)
      test++;
    ```

  - Use braces for multi-lines action

    ```javascript
    var array = [10, 42];

    // bad
    if (array[1] > 0)
      array = array.map(function(item) {
        return item++;
      });

    // good
    if (array[1] > 0) {
      array = array.map(function(item) {
        return item++;
      });
    }
    ```

### for

  - Cache variables used for condition

    ```javascript
    var array = [10, 42];

    // bad
    for (var i = 0; i < array.length; i++)
      array[i] += 2;

    // good
    for (var i = 0, len = array.length; i < len; i++)
      array[i] += 2;
    ```

  - When loop direction doesn't matter, use improved form

    ```javascript
    var array = [10, 42];

    // bad
    for (var i = 0, len = array.length; i < len; i++)
      array[i] += 2;

    // good
    for (var i = array.length - 1; i >= 0; i--)
      array[i] += 2;
    ```

### while / do-while

  - Cache variables used for condition

    ```javascript
    var array = [10, 42];
    var i = 0;

    // bad
    while (i < array.length) {
      array[i] += 2;
      i++;
    }

    // good
    var len = array.length;

    while (i < len) {
      array[i] += 2;
      i++;
    }
    ```

## Objects

  - Use the literal syntax for object creation.

    ```javascript
    // bad
    var item = new Object();

    // good
    var item = {};
    ```

  - Don't use reserved words as keys.
    - It won't work in IE8.
    - It can lead to readability issues.
    - Most of editor / IDE syntactically color them.

    ```javascript
    // bad
    var item = {
      class: 'name',
      private: true
    };

    // good
    var item = {
      type: 'name',
      hidden: true
    };
    ```
  - Use readable synonyms in place of reserved words.

    ```javascript
    // bad
    var item = {
      class: 'name'
    };

    // bad
    var item = {
      klass: 'name'
    };

    // bad
    var item = {
      type: 'name'
    };
    ```

## Arrays

  - Use the literal syntax for object creation.

    ```javascript
    // bad
    var items = new Array();

    // good
    var items = [];
    ```

  - To add items to an array, use Array#push

    ```javascript
    var items = [];

    // bad
    items[items.length] = 'item';

    // good
    items.push('item');
    ```

## Strings
## Functions
