#ES5 Guidelines

##Table of Contents

  1. [Why follow guidelines?](#why-follow-guidelines?)
  1. [Development Environment](#development-environment)
  1. [Whitespace](#whitespace)
  1. [Create a file](#create-a-file)
  1. [Variables](#variables)
  1. [Control structures](#control-structures)
    - [if-else](#if-else)
    - [for](#for)
    - [while / do-while](#while-/-do-while)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Comments](#comments)
  1. [Type casting and coercion](#type-casting-and-coercion)

## Why follow guidelines?

  - Readability

  - Maintenance

  - Team working

## Development Environment

  - We recommend using [Sublime Text 3][Sublime-Text-3].

  - We highly recommend using the linter [eslint][eslint]. Download the .eslintrc we use [here]().

## Whitespace

  - Use soft tabs set to 2 spaces.

    ![img_bad] _**bad**_
    ```javascript
    function () {
    ∙∙∙∙var name;
    }
    ```

    ![img_bad] _**bad**_
    ```javascript
    function () {
    ∙var name;
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function () {
    ∙∙var name;
    }
    ```

  - Place 1 space before the leading brace.

    ![img_bad] _**bad**_
    ```javascript
    function test(){
      console.log('test');
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function test() {
      console.log('test');
    }
    ```

    ![img_bad] _**bad**_
    ```javascript
    dog.set('attr',{
      age  : '1 year',
      breed: 'Bernese Mountain Dog'
    });
    ```

    ![img_ok] _**ok**_
    ```javascript
    dog.set('attr', {
      age  : '1 year',
      breed: 'Bernese Mountain Dog'
    });
    ```

  - Set off operators with spaces.

    ![img_bad] _**bad**_
    ```javascript
    var x=y+5;
    ```

    ![img_ok] _**ok**_
    ```javascript
    var x = y + 5;
    ```

  - End file with a single newline.

    ![img_bad] _**bad**_
    ```javascript
    1.  (function(env) {
    2.    ...
    3.  })(this);
    ```

    ![img_bad] _**bad**_
    ```javascript
    1.  (function(env) {
    2.    ...
    3.  })(this);
    4.
    5.
    ```

    ![img_ok] _**ok**_
    ```javascript
    1.  (function(env) {
    2.    ...
    3.  })(this);
    4.
    ```

  - Use indentation when making long method chains. Use a leading dot, which emphasizes that the line is a method call, not a new statement.

    ![img_bad] _**bad**_
    ```javascript
    User.findOne().tap().then();
    ```

    ![img_bad] _**bad**_
    ```javascript
    User.
      findOne().
      tap().
      then();
    ```

    ![img_bad] _**bad**_
    ```javascript
    User
      .findOne()
        .tap()
          .then();
    ```

    ![img_bad] _**bad**_
    ```javascript
    User
      .findOne()
        .tap()
      .then();
    ```

    ![img_bad] _**bad**_
    ```javascript
    User
      .findOne().tap()
      .then();
    ```

    ![img_bad] _**bad**_
    ```javascript
    User
      .findOne().tap()
        .then();
    ```

    ![img_ok] _**ok**_
    ```javascript
    User
      .findOne()
      .tap()
      .then();
    ```

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

## Variables

  - Always use `var` to declare variables.

    ![img_bad] _**bad**_
    ```javascript
    truth = 42;
    ```

    ![img_ok] _**ok**_
    ```javascript
    var truth = 42;
    ```

  - Use one `var` per variable.

    ![img_bad] _**bad**_
    ```javascript
    var x = 12,
        y = 24,
        z = 42;
    ```

    ![img_ok] _**ok**_
    ```javascript
    var x = 12;
    var y = 24;
    var z = 42;
    ```

  - Declare unassigned variables last.

    ![img_bad] _**bad**_
    ```javascript
    var vector;
    var x = 12;
    var y = 24;
    var z = 42;
    ```

    ![img_ok] _**ok**_
    ```javascript
    var x = 12;
    var y = 24;
    var z = 42;
    var vector;
    ```

  - Declare variables at the top of their scope.

    ![img_bad] _**bad**_
    ```javascript
    function joinDarkSide(character) {
      kneelBeforeEmperor(character);

      var name = character.firstname();

      if (name == 'Yoda')
        return false;

      return true;
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function joinDarkSide(character) {
      var name = character.firstname();

      kneelBeforeEmperor(character);

      if (name == 'Yoda')
        return false;

      return true;
    }
    ```

    ![img_bad] _**bad**_ - _unnecessary function call_
    ```javascript
    function joinDarkSide(character) {
      var name = character.firstname();

      if (character.isSith())
        return true;

      kneelBeforeEmperor(character);

      if (name == 'Yoda')
        return false;

      return true;
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function joinDarkSide(character) {
      var name;

      if (character.isSith())
        return true;

      kneelBeforeEmperor(character);

      name = character.firstname();

      if (name == 'Yoda')
        return false;

      return true;
    }
    ```

## Control structures

### if-else

  - Don't use braces or inline code for one-line action.

    ![img_bad] _**bad**_
    ```javascript
    var test = 42;

    if (test > 0) {
      test++;
    }
    ```

    ![img_bad] _**bad**_
    ```javascript
    if (test > 0) test++;
    ```

    ![img_ok] _**ok**_
    ```javascript
    if (test > 0)
      test++;
    ```

  - Use braces for multi-lines action.

    ```javascript
    var array = [10, 42];
    ```

    ![img_bad] _**bad**_
    ```javascript
    if (array[1] > 0)
      array = array.map(function(item) {
        return item++;
      });
    ```

    ![img_ok] _**ok**_
    ```javascript
    if (array[1] > 0) {
      array = array.map(function(item) {
        return item++;
      });
    }
    ```

### for

  - Cache variables used for condition.

    ```javascript
    var array = [10, 42];
    ```

    ![img_bad] _**bad**_
    ```javascript
    for (var i = 0; i < array.length; i++)
      array[i] += 2;
    ```

    ![img_ok] _**ok**_
    ```javascript
    for (var i = 0, len = array.length; i < len; i++)
      array[i] += 2;
    ```

  - When loop direction doesn't matter, use improved form.

    ```javascript
    var array = [10, 42];
    ```

    ![img_bad] _**bad**_
    ```javascript
    for (var i = 0, len = array.length; i < len; i++)
      array[i] += 2;
    ```

    ![img_ok] _**ok**_
    ```javascript
    for (var i = array.length - 1; i >= 0; i--)
      array[i] += 2;
    ```

### while / do-while

  - Cache variables used for condition.

    ```javascript
    var array = [10, 42];
    var i = 0;
    ```

    ![img_bad] _**bad**_
    ```javascript
    while (i < array.length) {
      array[i] += 2;
      i++;
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    var len = array.length;

    while (i < len) {
      array[i] += 2;
      i++;
    }
    ```

## Objects

  - Use the literal syntax for object creation.

    ![img_bad] _**bad**_
    ```javascript
    var item = new Object();
    ```

    ![img_ok] _**ok**_
    ```javascript
    var item = {};
    ```

  - Place 1 whitespace after the colons.

    ![img_bad] _**bad**_
    ```javascript
    var luke = {
      jediMaster:true
    };
    ```

    ![img_ok] _**ok**_
    ```javascript
    var luke = {
      jediMaster: true
    };
    ```

  - Align colons on the most distant colon. Don't place whitespace before the most distant colon.

    ![img_bad] _**bad**_
    ```javascript
    var luke = {
      jediMaster: true,
      age: 28
    };
    ```

    ![img_ok] _**ok**_
    ```javascript
    var luke = {
      jediMaster: true,
      age       : 28
    };
    ```

  - Don't use reserved words as keys.
    - It won't work in IE8.
    - It can lead to readability issues.
    - Most of editor / IDE syntactically color them.

    ![img_bad] _**bad**_
    ```javascript
    var item = {
      class  : 'name',
      private: true
    };
    ```

    ![img_ok] _**ok**_
    ```javascript
    var item = {
      type  : 'name',
      hidden: true
    };
    ```

  - When possible, use valid identifier for your properties names.

    ![img_bad] _**bad**_
    ```javascript
    var item = {
      'class-name': 'name';
    };
    ```

    ![img_ok] _**ok**_
    ```javascript
    var item = {
      type: 'name'
    };
    ```

  - Use readable synonyms in camelCase in place of reserved words.

    ![img_bad] _**bad**_
    ```javascript
    var item = {
      class       : 'name',
      'is-private': true
    };
    ```

    ![img_bad] _**bad**_
    ```javascript
    var item = {
      klass       : 'name',
      'is-private': true
    };
    ```

    ![img_ok] _**ok**_
    ```javascript
    var item = {
      type     : 'name',
      isPrivate: true
    };
    ```

  - When possible, use dot notation when accessing properties.

    ```javascript
    var luke = {
      jediMaster: true,
      age       : 28
    };
    ```

    ![img_bad] _**bad**_
    ```javascript
    var isJedi = luke['jediMaster'];
    ```

    ![img_ok] _**ok**_
    ```javascript
    var isJedi = luke.jediMaster;
    ```

  - Use subscript notation [] when accessing properties with a variable.

    ```javascript
    var luke = {
      jediMaster: true,
      age       : 28
    };

    function getProp(name) {
      return luke[name];
    }
    ```

## Arrays

  - Use the literal syntax for object creation.

    ![img_bad] _**bad**_
    ```javascript
    var items = new Array();
    ```

    ![img_ok] _**ok**_
    ```javascript
    var items = [];
    ```

  - To add items to an array, use `Array#push`.

    ```javascript
    var items = [];
    ```

    ![img_bad] _**bad**_
    ```javascript
    items[items.length] = 'item';
    ```

    ![img_ok] _**ok**_
    ```javascript
    items.push('item');
    ```

## Strings

  - Use simple quote instead of double.

    ![img_bad] _**bad**_
    ```javascript
    var authors = "Nicolas Prigent and Joachim Westphal";
    ```

    ![img_ok] _**ok**_
    ```javascript
    var authors = 'Nicolas Prigent and Joachim Westphal';
    ```

    ![img_bad] _**bad**_
    ```javascript
    var principle = "It'll spread in the entire world";
    ```

    ![img_ok] _**ok**_
    ```javascript
    var principle = 'It\'ll spread in the entire world';
    ```

## Functions

  - Place 1 space after `function`.

    ![img_bad] _**bad**_
    ```javascript
    (function() {
      ...
    })();
    ```

    ![img_ok] _**ok**_
    ```javascript
    (function () {
      ...
    })();

    ```

  - Always name your functions, it makes stack traces more reliables.

    ![img_bad] _**bad**_
    ```javascript
    var foo = function () {
      ...
    };
    ```

    ![img_ok] _**ok**_
    ```javascript
    var foo = function foo() {
      ...
    };
    ```

  - Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead.

    ![img_bad] _**bad**_
    ```javascript
    if (...) {
      function toto() {
        ...
      }
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    var toto;

    if (...) {
      toto = function toto() {
        ...
      };
    }
    ```

  - Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope.

    <!-- FIXME: Need better naming -->

    ![img_bad] _**bad**_
    ```javascript
    function toto(yolo, arguments) {
      ...
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function toto(yolo, args) {
      ...
    }
    ```

  - `var` declarations should be followed by a blank line.

    ![img_bad] _**bad**_
    ```javascript
    function sayHello() {
      var hello = 'Hello world!';
      console.log(hello);
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function sayHello() {
      var hello = 'Hello world!';

      console.log(hello);
    }
    ```

  - Returns should be preceded by a blank line, except for unique `return` in a statement block.

    ![img_bad] _**bad**_
    ```javascript
    function sayHello() {
      var hello = 'Hello world!';

      console.log(hello);
      return hello;
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function sayHello() {
      var hello = 'Hello world!';

      console.log(hello);

      return hello;
    }
    ```

    ![img_bad] _**bad**_
    ```javascript
    function isJediMaster(character) {
      if (character.force > 50) {

        return true;
      }
      return false;
    }
    ```

    ![img_bad] _**bad**_
    ```javascript
    function isJediMaster(character) {
      if (character.force > 50)
        return true;
      return false;
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function isJediMaster(character) {
      if (character.force > 50)
        return true;

      return false;
    }
    ```

    ![img_bad] _**bad**_
    ```javascript
    function isJediMaster(character) {

      return character.force > 50;
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    function isJediMaster(character) {
      return character.force > 50;
    }
    ```

## Comments

  - Use `//` for single line comments.

    ![img_bad] _**bad**_
    ```javascript
    /* This is a comment */
    ```

    ![img_ok] _**ok**_
    ```javascript
    // This is a comment
    ```

  - Place a whitespace after `//`.

    ![img_bad] _**bad**_
    ```javascript
    //This is a comment
    ```

    ![img_ok] _**ok**_
    ```javascript
    // This is a comment
    ```

  - Place single line comments on a newline above the subject of the comment.

    ![img_bad] _**bad**_
    ```javascript
    var active = true; // is current tab
    ```

    ![img_ok] _**ok**_
    ```javascript
    // is current tab
    var active = true;
    ```

  - Place an empty line before the comments.

    ![img_bad] _**bad**_
    ```javascript
    var active = getActiveTab();
    // verify there is a active tab
    if (active)
      ...
    ```

    ![img_ok] _**ok**_
    ```javascript
    var active = getActiveTab();

    // verify there is a active tab
    if (active)
      ...
    ```

## Type casting and coercion

  - Use shortcuts.

    ![img_bad] _**bad**_
    ```javascript
    if (name !== '') {
      ...
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    if (name) {
      ...
    }
    ```

    ![img_bad] _**bad**_
    ```javascript
    if (collection.length > 0) {
      ...
    }
    ```

    ![img_ok] _**ok**_
    ```javascript
    if (collection.length) {
      ...
    }
    ```


## Todo
  1. Constant
  1. Semi colons
  1. Custom exceptions
  1. Constructor, inheritance and prototype
  1. Enhance braces and inline
  1. JsDoc
  1. Inline comments in object declaration
  1. TODO & FIWME

## Idea
  1. multi-level prototype hierarchies


[img_bad]:https://raw.githubusercontent.com/Cornelin/Guidelines/master/img/bad.png
[img_ok]:https://raw.githubusercontent.com/Cornelin/Guidelines/master/img/ok.png

[Sublime-Text-3]:http://www.sublimetext.com/3
[eslint]:http://eslint.org
