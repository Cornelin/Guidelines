#ES5 Guidelines

##Table of Contents

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

## Development Environment

  - We recommend using [Sublime Text 3](http://www.sublimetext.com/3).

  - We highly recommend using the linter [eslint](http://eslint.org). Download the .eslintrc we use [here]().

## Whitespace

  - Use soft tabs set to 2 spaces.

    ![img_bad] **bad**
    ```javascript
    function () {
    ∙∙∙∙var name;
    }
    ```

    ```javascript
    function () {
    ∙var name;
    }
    ```

    ![img_ok] **ok**
    ```javascript
    function () {
    ∙∙var name;
    }
    ```

  - Place 1 space before the leading brace.

    ```javascript
    // ✗ bad
    function test(){
      console.log('test');
    }

    // ✓ ok
    function test() {
      console.log('test');
    }

    // ✗ bad
    dog.set('attr',{
      age  : '1 year',
      breed: 'Bernese Mountain Dog'
    });

    // ✓ ok
    dog.set('attr', {
      age  : '1 year',
      breed: 'Bernese Mountain Dog'
    });
    ```

  - Set off operators with spaces.

    ```javascript
    // ✗ bad
    var x=y+5;

    // ✓ ok
    var x = y + 5;
    ```

  - End file with a single newline

    - ✗ bad
      ```javascript
      1.  (function(env) {
      2.    ...
      3.  })(this);
      ```

    - ✗ bad
      ```javascript
      1.  (function(env) {
      2.    ...
      3.  })(this);
      4.
      5.
      ```

    - ✓ ok
      ```javascript
      1.  (function(env) {
      2.    ...
      3.  })(this);
      4.
      ```

  - Use indentation when making long method chains. Use a leading dot, which emphasizes that the line is a method call, not a new statement.

    ```javascript
    // ✗ bad
    User.find().tap().then();

    // ✗ bad
    User.
      find().
      tap().
      then();

    // ✗ bad
    User
      .find()
        .tap()
          .then();

    // ✗ bad
    User
      .find()
        .tap()
      .then();

    // ✗ bad
    User
      .find().tap()
      .then();

    // ✗ bad
    User
      .find().tap()
        .then();

    // ✓ ok
    User
      .find()
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

    ```javascript
    // ✗ bad
    truth = 42;

    // ✓ ok
    var truth = 42;
    ```

  - Use one `var` per variable.

    ```javascript
    // ✗ bad
    var x = 12,
        y = 24,
        z = 42;

    // ✓ ok
    var x = 12;
    var y = 24;
    var z = 42;
    ```

  - Declare unassigned variables last.

    ```javascript
    // ✗ bad
    var vector;
    var x = 12;
    var y = 24;
    var z = 42;

    // ✓ ok
    var x = 12;
    var y = 24;
    var z = 42;
    var vector;
    ```

  - Declare variables at the top of their scope.

    ```javascript
    // ✗ bad
    function joinDarkSide(character) {
      kneelBeforeEmperor(character);

      var name = character.name();

      if (name == 'Yoda')
        return false;

      return true;
    }

    // ✓ ok
    function joinDarkSide(character) {
      var name = character.name();

      kneelBeforeEmperor(character);

      if (name == 'Yoda')
        return false;

      return true;
    }

    // ✗ bad - unnecessary function call
    function joinDarkSide(character) {
      var name = character.name();

      if (character.isSith())
        return true;

      kneelBeforeEmperor(character);

      if (name == 'Yoda')
        return false;

      return true;
    }

    // ✓ ok
    function joinDarkSide(character) {
      var name;

      if (character.isSith())
        return true;

      kneelBeforeEmperor(character);

      name = character.name()

      if (name == 'Yoda')
        return false;

      return true;
    }
    ```

## Control structures

### if-else

  - Don't use braces or inline code for one-line action

    ```javascript
    var test = 42;

    // ✗ bad
    if (test > 0) {
      test++;
    }

    // ✗ bad
    if (test > 0) test++;

    // ✓ ok
    if (test > 0)
      test++;
    ```

  - Use braces for multi-lines action

    ```javascript
    var array = [10, 42];

    // ✗ bad
    if (array[1] > 0)
      array = array.map(function(item) {
        return item++;
      });

    // ✓ ok
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

    // ✗ bad
    for (var i = 0; i < array.length; i++)
      array[i] += 2;

    // ✓ ok
    for (var i = 0, len = array.length; i < len; i++)
      array[i] += 2;
    ```

  - When loop direction doesn't matter, use improved form

    ```javascript
    var array = [10, 42];

    // ✗ bad
    for (var i = 0, len = array.length; i < len; i++)
      array[i] += 2;

    // ✓ ok
    for (var i = array.length - 1; i >= 0; i--)
      array[i] += 2;
    ```

### while / do-while

  - Cache variables used for condition

    ```javascript
    var array = [10, 42];
    var i = 0;

    // ✗ bad
    while (i < array.length) {
      array[i] += 2;
      i++;
    }

    // ✓ ok
    var len = array.length;

    while (i < len) {
      array[i] += 2;
      i++;
    }
    ```

## Objects

  - Use the literal syntax for object creation.

    ```javascript
    // ✗ bad
    var item = new Object();

    // ✓ ok
    var item = {};
    ```

  - Place 1 whitespace after the colons.

    ```javascript
    // ✗ bad
    var luke = {
      jediMaster:true
    };

    // ✓ ok
    var luke = {
      jediMaster: true
    };
    ```

  - Align colons on the most distant colon. Don't place whitespace before the most distant colon.

    ```javascript
    // ✗ bad
    var luke = {
      jediMaster: true,
      age: 28
    };

    // ✓ ok
    var luke = {
      jediMaster: true,
      age       : 28
    };
    ```

  - Don't use reserved words as keys.
    - It won't work in IE8.
    - It can lead to readability issues.
    - Most of editor / IDE syntactically color them.

    ```javascript
    // ✗ bad
    var item = {
      class  : 'name',
      private: true
    };

    // ✓ ok
    var item = {
      type  : 'name',
      hidden: true
    };
    ```

  - When possible, use valid identifier for your properties names.

    ```javascript
    // ✗ bad
    var item = {
      'class-name': 'name';
    };

    // ✓ ok
    var item = {
      type: 'name'
    };
    ```

  - Use readable synonyms in camelCase in place of reserved words.

    ```javascript
    // ✗ bad
    var item = {
      class       : 'name',
      'is-private': true
    };

    // ✗ bad
    var item = {
      klass       : 'name',
      'is-private': true
    };

    // ✓ ok
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

    // ✗ bad
    var isJedi = luke['jediMaster'];

    // ✓ ok
    var isJedi = luke.jediMaster;
    ```

  - Use subscript notation [] when accessing properties with a variable

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

    ```javascript
    // ✗ bad
    var items = new Array();

    // ✓ ok
    var items = [];
    ```

  - To add items to an array, use Array#push

    ```javascript
    var items = [];

    // ✗ bad
    items[items.length] = 'item';

    // ✓ ok
    items.push('item');
    ```

## Strings

  - Use simple quote instead of double.

    ```javascript
    // ✗ bad
    var authors = "Nicolas Prigent and Joachim Westphal";

    // ✓ ok
    var authors = 'Nicolas Prigent and Joachim Westphal';

    // ✗ bad
    var principle = "It'll spread in the entire world";

    // ✓ ok
    var principle = 'It\'ll spread in the entire world';
    ```

## Functions

  - Place 1 space after the 'function' keyword.

    ```javascript
    // ✗ bad
    (function() {
      ...
    })();

    // ✓ ok
    (function () {
      ...
    })();

    ```

  - Always name your function, it makes stack traces more reliables.

    ```javascript
    // ✗ bad
    var foo = function () {
      ...
    };

    // ✓ ok
    var foo = function foo() {
      ...
    };
    ```

  - Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead.

    ```javascript
    // ✗ bad
    if (...) {
      function toto() {
        ...
      }
    }

    // ✓ ok
    var toto;

    if (...) {
      toto = function toto() {
        ...
      };
    }
    ```

  - Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope

    <!-- FIXME: Need better naming -->

    ```javascript
    // ✗ bad
    function toto(yolo, arguments) {
      ...
    }

    // ✓ ok
    function toto(yolo, args) {
      ...
    }
    ```

  - `var` declarations should be followed by a blank line

    ```javascript
    // ✗ bad
    function sayHello() {
      var hello = 'Hello world!';
      console.log(hello);
    }

    // ✓ ok
    function sayHello() {
      var hello = 'Hello world!';

      console.log(hello);
    }
    ```

  - Returns should be preceded by a blank line, except for unique `return` in a statement block

    ```javascript
    // ✗ bad
    function sayHello() {
      var hello = 'Hello world!';

      console.log(hello);
      return hello;
    }

    // ✓ ok
    function sayHello() {
      var hello = 'Hello world!';

      console.log(hello);

      return hello;
    }

    // ✗ bad
    function isJediMaster(character) {
      if (character.force > 50) {

        return true;
      }
      return false;
    }

    // ✗ bad
    function isJediMaster(character) {
      if (character.force > 50)
        return true;
      return false;
    }

    // ✓ ok
    function isJediMaster(character) {
      if (character.force > 50)
        return true;

      return false;
    }

    // ✗ bad
    function isJediMaster(character) {

      return character.force > 50;
    }

    // ✓ ok
    function isJediMaster(character) {
      return character.force > 50;
    }
    ```

## Comments

  - Use `//` for single line comments

    ```javascript
    // ✗ bad
    /* This is a comment */

    // ✓ ok
    // This is a comment
    ```

  - Place a whitespace after `//`

    ```javascript
    // ✗ bad
    //This is a comment

    // ✓ ok
    // This is a comment
    ```

  - Place single line comments on a newline above the subject of the comment.

    ```javascript
    // ✗ bad
    var active = true; // is current tab

    // ✓ ok
    // is current tab
    var active = true;
    ```

  - Place an empty line before the comments.

    ```javascript
    // ✗ bad
    var active = getActiveTab();
    // verify there is a active tab
    if (active)
      ...

    // ✓ ok
    var active = getActiveTab();

    // verify there is a active tab
    if (active)
      ...
    ```

## Type casting and coercion

  - Use shortcuts

    ```javascript
    // ✗ bad
    if (name !== '') {
      ...
    }

    // ✓ ok
    if (name) {
      ...
    }

    // ✗ bad
    if (collection.length > 0) {
      ...
    }

    // ✓ ok
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
