var foo;
var bar;
var baz;
var qux;

function foo(bar) {
  var baz;
  var qux;

  return qux;
}

function [name]()

function foo() {}
var foo = function foo() {}

// Every function even anonymous should be named

(function foo() {
  console.log('Welcome to the Internet. Please follow me.');
})();

// For string use simple quote instead of double
// NEVER USE "" FOR STRING PREFER ''

// Never declare a function in a non-function block (if, while, etc). Assign the
// function to a variable instead.

// Never name a parameter arguments. This will take precedence over the
// arguments object that is given to every function scope

// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}

// Use dot notation when accessing properties.

var luke = {
  jedi: true,
  age: 28
};

// bad
var isJedi = luke['jedi'];

// good
var isJedi = luke.jedi;

// Use subscript notation [] when accessing properties with a variable.

var luke = {
  jedi: true,
  age: 28
};

function getProp(prop) {
  return luke[prop];
}

var isJedi = getProp('jedi');

// Always use var to declare variables. Not doing so will result in global
// variables. We want to avoid polluting the global namespace. Captain Planet
// warned us of that.

// bad
superPower = new SuperPower();

// good
var superPower = new SuperPower();

// Use one var declaration per variable. It's easier to add new variable
// declarations this way, and you never have to worry about swapping out a ; for
// a , or introducing punctuation-only diffs.

// bad
var items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
var items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
var items = getItems();
var goSportsTeam = true;
var dragonball = 'z';

// Declare unassigned variables last. This is helpful when later on you might
// need to assign a variable depending on one of the previous assigned
// variables.

// bad
var i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
var i;
var items = getItems();
var dragonball;
var goSportsTeam = true;
var len;

// good
var items = getItems();
var goSportsTeam = true;
var dragonball;
var length;
var i;

// Assign variables at the top of their scope. This helps avoid issues with
// variable declaration and assignment hoisting related issues.

// bad
function () {
  test();
  console.log('doing stuff..');

  //..other stuff..

  var name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// good
function () {
  var name = getName();

  test();
  console.log('doing stuff..');

  //..other stuff..

  if (name === 'test') {
    return false;
  }

  return name;
}

// bad - unnecessary function call
function () {
  var name = getName();

  if (!arguments.length) {
    return false;
  }

  this.setFirstName(name);

  return true;
}

// good
function () {
  var name;

  if (!arguments.length) {
    return false;
  }

  name = getName();
  this.setFirstName(name);

  return true;
}

// Use shortcuts

// bad
if (name !== '') {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}

// bad
if (foo) return true;

// bad
if (foo) {
	return true;
}

// good
if (foo)
	return true;

// good
if (foo)
	return true;
else if (bar)
	return false;
else
	return 42;

// good
if (foo)
	return true;
else if (bar)
	return false;
else {
	console.log('42');
	return 42;
}

// bad
if (foo) {
	return true;
}
else {
	return false;
}

// bad
if (foo) {
	return true;
} else if (bar) {
	return false;
} else {
	console.log('42');
	return true;
}

// bad
function () { return true; }

// good
function () {
	return true;
}

// Comments
// Auto-generated documentation
// DocBlockr + JSDOCS + Stuffs
//

// bad
//
// function foo returns bar
//
// @param  {String} foo
// @return {String}
//
function foo (bar) {
	return bar;
}

// good
/**
 * function foo returns bar
 *
 * @param  {String} foo
 * @return {String}
 */
function foo (bar) {
  return bar;
}

// Use for single line comments. Place single line comments on a newline above
// the subject of the comment. Put an empty line before the comment.

// When creating a single line comment always follow // by a space

// bad
//this is a comment

// good
// this is a comment

// bad
var active = true;  // is current tab

// good
// is current tab
var active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  var type = this._type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  var type = this._type || 'no type';

  return type;
}

// Prefixing your comments with FIXME or TODO helps other developers quickly
// understand if you're pointing out a problem that needs to be revisited, or if
// you're suggesting a solution to the problem that needs to be implemented.
// These are different than regular comments because they are actionable. The
// actions are FIXME -- need to figure this out or TODO -- need to implement.

// Use // FIXME: to annotate problems.

function Calculator() {

  // FIXME: shouldn't use a global here
  total = 0;

  return this;
}

// Use // TODO: to annotate solutions to problems.

function Calculator() {

  // TODO: total should be configurable by an options param
  this.total = 0;

  return this;
}

// Final returns should be preceded by a blank line
// Attention au cas particulier sur les
// if (true)
//   return ;

// bad
function sayHello() {
  console.log('fetching type...');
  return type;
}

// good
function sayHello() {
  console.log('fetching type...');

  return type;
}

// Var declarations should be followed by a blank line

// bad
function sayHello() {
  var hello = 'Hello World!';
  console.log(hello);
  return hello;
}

// bad
function sayHello() {
  var hello = 'Hello World!';
  console.log(hello);

  return hello;
}

// good
function sayHello() {
  var hello = 'Hello World!';

  console.log(hello);

  return hello;
}

// Use soft tabs set to 2 spaces.

// bad
function () {
∙∙∙∙var name;
}

// bad
function () {
∙var name;
}

// good
function () {
∙∙var name;
}


// Place 1 space before the leading brace.

// bad
function test (){
  console.log('test');
}

// good
function test () {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog'
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog'
});

// Set off operators with spaces.

// bad
var x=y+5;

// good
var x = y + 5;

//End files with a single newline.

// bad
/////////////////////////////////////////////
(function(global) {
  // ...stuff...
})(this);
/////////////////////////////////////////////

// good
/////////////////////////////////////////////
(function(global) {
  // ...stuff...
})(this);

/////////////////////////////////////////////

// Use indentation when making long method chains. Use a leading dot, which
// emphasizes that the line is a method call, not a new statement.

// bad
User.find().tap().then()

// bad
User.
  find().
  tap().
  then()

// bad
User
  .find()
    .tap()
      .then()

// bad
User
  .find()
    .tap()
  .then()

// bad
User
  .find().tap()
  .then()

// bad
User
  .find().tap()
    .then()

// good
User
  .find()
  .tap()
  .then()

// Leave a blank line after blocks and before the next statement

// good
if (foo)
  return bar;
else
  return baz;

// bad
if (foo)
  return bar;
return baz;

// good
if (foo)
  return bar;

return baz;

// bad
var obj = {
  foo: function() {},
  bar: function() {}
};
return obj;

// good
var obj = {
  foo: function() {},
  bar: function() {}
};

return obj;

// Commas : Same as airbnb

// Return always with a space between semicolons

// bad
return;

// good
return ;

// Semicolons always exepct when function declaration and statement

// Status indexes
// https://nodejs.org/api/documentation.html#documentation_stability_index

// Type casting et coercion
//
// tu te débrouilles pour les strings
//
// parseInt only
//
// primitiveType -> OUT
//
// Boolean
var age = 0;

// bad
var hasAge = new Boolean(age);

// bad
var hasAge = Boolean(age);

// good
var hasAge = !!age;

this || self || _this

// Name your functions. This is helpful for stack traces.

// bad
var log = function(msg) {
  console.log(msg);
};

// good
var log = function log(msg) {
  console.log(msg);
};

// If your file exports a single class, your filename should be exactly the name of the class.

// file contents
class CheckBox {
  // ...
}
module.exports = CheckBox;

// in some other file
// bad
var CheckBox = require('./checkBox');

// bad
var CheckBox = require('./check_box');

// good
var CheckBox = require('./CheckBox');

// Accessor functions for properties are not required.

// If you do make accessor functions use prop()

// good
dragon.age();

// bad
dragon.getAge();

// good
dragon.age(25);

// bad
dragon.setAge(25);

// 1 : EXPERIMENTAL

// If the property is a boolean, use isVal() or hasVal().

// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}

// 1 : EXPERIMENTAL

// DO NOT USE GENERIC GET SET USE PROP INSTEAD

function Jedi(options) {
  options || (options = {});
  var lightsaber = options.lightsaber || 'blue';
  this.set('lightsaber', lightsaber);
}

Jedi.prototype.set = function(key, val) {
  this[key] = val;
};

Jedi.prototype.get = function(key) {
  return this[key];
};

// A approfondir

function Jedi() {
  console.log('new jedi');
}

// bad
Jedi.prototype = {
  fight: function fight() {
    console.log('fighting');
  },

  block: function block() {
    console.log('blocking');
  }
};

// good
Jedi.prototype.fight = function fight() {
  console.log('fighting');
};

Jedi.prototype.block = function block() {
  console.log('blocking');
};

// Methods can return this to help with method chaining.

// bad
Jedi.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
};

var luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
Jedi.prototype.jump = function() {
  this.jumping = true;
  return this;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
  return this;
};

var luke = new Jedi();

luke.jump()
  .setHeight(20);

// Si _this est déclaré utiliser _this et non this

// Chainable + Promisifiable

// NE JAMAIS UTILISER DELETE TOUJOURS METTRE A NULL POUR GARDER LA FORME

// undefined = var declaration
// null = var deletion

// DO NEVER USE EVAL SON OF BITCHES

// The only function you can override is toString() but me sure it does not
// procudes any side effects

// It's okay to write a custom toString() method, just make sure it works
// successfully and causes no side effects.

function Jedi(options) {
  options || (options = {});
  this.name = options.name || 'no name';
}

Jedi.prototype.getName = function getName() {
  return this.name;
};

Jedi.prototype.toString = function toString() {
  return 'Jedi - ' + this.getName();
};

// Events

// When attaching data payloads to events (whether DOM events or something more
// proprietary like Backbone events), pass a hash instead of a raw value. This
// allows a subsequent contributor to add more data to the event payload without
// finding and updating every handler for the event. For example, instead of:

// bad
$(this).trigger('listingUpdated', listing.id);

...

$(this).on('listingUpdated', function(e, listingId) {
  // do something with listingId
});

// prefer:

// good
$(this).trigger('listingUpdated', { listingId : listing.id });

...

$(this).on('listingUpdated', function(e, data) {
  // do something with data.listingId
});


// Modules

// The module should start with a !. This ensures that if a malformed module
// forgets to include a final semicolon there aren't errors in production when
// the scripts get concatenated. Explanation The file should be named with
// camelCase, live in a folder with the same name, and match the name of the
// single export. Add a method called noConflict() that sets the exported module
// to the previous version and returns this one. Always declare 'use strict'; at
// the top of the module.

// fancyInput/fancyInput.js

!function(global) {
  'use strict';

  var previousFancyInput = global.FancyInput;

  function FancyInput(options) {
    this.options = options || {};
  }

  FancyInput.noConflict = function noConflict() {
    global.FancyInput = previousFancyInput;
    return FancyInput;
  };

  global.FancyInput = FancyInput;
}(this);

// ES5 compatibility
// http://kangax.github.io/compat-table/es5/

// Only use for ... in on objects

// good
var fooObject = {
  bar : 42,
  baz : 'quz'
};

for (item in fooObject) {
  // ... stuff ...
}

// bad
var fooArray = [
  'bar',
  'baz'
]

for (item in fooArray) {
  // ... stuff ...
}

// Custom TypeError bluebird style

// En cas de besoin d'une library externe préférer lodash aux autres. Underscore banni

// GULP OU GRUNT

// Renseignement sur JSCS

// .editorConfig

// NPM + SHIELD + TRAVIS + DAVID-DM (dev dependencies)

// bad
var object = { value: 42 };

// bad
var object = {value: 42};

// good
var object = {
  value: 42
}

// bad
var object = {
  value: 42,
  extraLongValue: 42
}

// good
var object = {
  value         : 42,
  extraLongValue: 42
}

//bad
var object = {
  value          : 42,
  extraLongValue : 42
}

// bad
var object = {
  value:          42,
  extraLongValue: 42
}

// bad
var object = {
  value :          42,
  extraLongValue : 42
}

// good
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// bad
var array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
];


// good
var array = [
  1,  2,  3,  4,
  5,  6,  7,  8,
  9, 10, 11, 12
]

// bad
var array = [
  1, 2, 3, 4,
  5, 6, 7, 8,
  9, 10, 11, 12
]


// concat || join || + || \

// bad
var string = 'Lorem ipsum Enim voluptate irure exercitation in elit pariatur \
  dolor culpa in nostrud irure mollit occaecat dolor cillum eu sit eiusmod non \
  dolor incididunt occaecat ex aliquip officia incididunt esse do in non \
  consequat proident ad ea sit ad magna.';

// Bad because too long
var string = 'Lorem ipsum Enim voluptate irure exercitation in elit pariatur ' +
  'dolor culpa in nostrud irure mollit occaecat dolor cillum eu sit eiusmod non ' +
  'dolor incididunt occaecat ex aliquip officia incididunt esse do in non ' +
  'consequat proident ad ea sit ad magna.';

// Good
var string = [
  'Lorem ipsum Enim voluptate irure exercitation in elit pariatur ',
  'dolor culpa in nostrud irure mollit occaecat dolor cillum eu sit eiusmod non ',
  'dolor incididunt occaecat ex aliquip officia incididunt esse do in non ',
  'consequat proident ad ea sit ad magna.'
].join('');

// Good because the whole expression in under the ruler limit
var string = 'Lorem' + ' ' + 'ipsum' + ' ' + 'Enim';

// Bad because the same expression works above perfectly
var string = [
  'Lorem',
  ' ',
  'ipsum',
  ' ',
  'Enim'
].join('');

// FAIRE LA REMARQUE DE BEST PRACTICE POUR CONCAT AVEC JOIN DE PETITE LIGNE AVEC AUTRE CHAR AUTRE QUE ''

// BAD
// Four-space, wrap at 80.  Works with very long function names, survives
// renaming without reindenting, low on space.
goog.foo.bar.doThingThatIsVeryDifficultToExplain = function (
   veryDescriptiveArgumentNumberOne, veryDescriptiveArgumentTwo,
   tableModelEventHandlerProxy, artichokeDescriptorAdapterIterator) {
 // ...
};

// GOOD
// Four-space, one argument per line.  Works with long function names,
// survives renaming, and emphasizes each argument.
goog.foo.bar.doThingThatIsVeryDifficultToExplain = function (
   veryDescriptiveArgumentNumberOne,
   veryDescriptiveArgumentTwo,
   tableModelEventHandlerProxy,
   artichokeDescriptorAdapterIterator) {
 // ...
};

// BAD
// Parenthesis-aligned indentation, wrap at 80.  Visually groups arguments,
// low on space.
function foo(veryDescriptiveArgumentNumberOne, veryDescriptiveArgumentTwo,
            tableModelEventHandlerProxy, artichokeDescriptorAdapterIterator) {
 // ...
}

// BAD
// Parenthesis-aligned, one argument per line.  Emphasizes each
// individual argument.
function bar(veryDescriptiveArgumentNumberOne,
            veryDescriptiveArgumentTwo,
            tableModelEventHandlerProxy,
            artichokeDescriptorAdapterIterator) {
 // ...
}


// Blank lines
​
// Use newlines to group logically related pieces of code. For example:
​
doSomethingTo(x);
doSomethingElseTo(x);
andThen(x);
​
nowDoSomethingWith(y);
​
andNowWith(z);

// Good
var x = a ? b : c;  // All on one line if it will fit.

// Bad
var y = a ?
   longButSimpleOperandB : longButSimpleOperandC;

// Good
// Indenting to the line position of the first operand is also OK.
var z = a ?
       moreComplicatedB :
       moreComplicatedC;

// Do not unnecessary parenthesis Never use parentheses for unary operators such
// as delete, typeof and void or after keywords such as return, throw as well as
// others (case, in or new).

// bad
return (42);

// good
return 42;

// bad
typeof ('Hello World!');

// good
typeof 'Hello World!';

// Newlines

// Use UNIX-style newlines (\n), and a newline character as the last character
// of a file. Windows-style newlines (\r\n) are forbidden inside any repository.

// No trailing whitespace

// Just like you brush your teeth after every meal, you clean up any trailing
// whitespace in your JS files before committing. Otherwise the rotten smell of
// careless neglect will eventually drive away contributors and/or co-workers.

// Use Semicolons

// According to scientific research, the usage of semicolons is a core value of
// our community. Consider the points of the opposition, but be a traditionalist
// when it comes to abusing error correction mechanisms for cheap syntactic
// pleasures.

// 80 characters per line

// Limit your lines to 80 characters. Yes, screens have gotten much bigger over
// the last few years, but your brain has not. Use the additional room for split
// screen, your editor supports that, right?

// Use UPPERCASE for Constants

// Constants should be declared as regular variables or static class properties, using all uppercase letters.

// Node.js / V8 actually supports mozilla's const extension, but unfortunately that cannot be applied to class members, nor is it part of any ECMA standard.

// Right:

var SECOND = 1 * 1000;

function File() {
}
File.FULL_PERMISSIONS = 0777;

// Wrong:

const SECOND = 1 * 1000;

function File() {
}
File.fullPermissions = 0777;

// 1 : EXPERIMENTAL
// Use the === operator

// Programming is not about remembering stupid rules. Use the triple equality operator as it will work just as expected.

// Right:

var a = 0;
if (a !== '') {
  console.log('winning');
}

// Wrong:

var a = 0;
if (a == '') {
  console.log('losing');
}

// Use descriptive conditions

// Any non-trivial conditions should be assigned to a descriptively named variable or function:

// Right:

var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);

if (isValidPassword) {
  console.log('winning');
}

// Wrong:

if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {
  console.log('losing');
}

// Write small functions

// Keep your functions short. A good function fits on a slide that the people in the last row of a big room can comfortably read. So don't count on them having perfect vision and limit yourself to ~15 lines of code per function.

// Return early from functions

// To avoid deep nesting of if-statements, always return a function's value as early as possible.

// Right:

function isPercentage(val) {
  if (val < 0) {
    return false;
  }

  if (val > 100) {
    return false;
  }

  return true;
}

// Wrong:

function isPercentage(val) {
  if (val >= 0) {
    if (val < 100) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Or for this particular example it may also be fine to shorten things even further:

function isPercentage(val) {
  var isInRange = (val >= 0 && val <= 100);
  return isInRange;
}

// No nested closures

// Use closures, but don't nest them. Otherwise your code will become a mess.

// Right:

setTimeout(function() {
  client.connect(afterConnect);
}, 1000);

function afterConnect() {
  console.log('winning');
}

// Wrong:

setTimeout(function() {
  client.connect(function() {
    console.log('losing');
  });
}, 1000);

// Object.freeze, Object.preventExtensions, Object.seal, with, eval

// Crazy shit that you will probably never need. Stay away from it.

// AIRBNB ES6

// FORBIDDEN TOO MUCH SPACES

// bad
console.log ( 'Hello World!' );

// bad
console.log( 'Hello World!' );

// good
console.log('Hello World!');
