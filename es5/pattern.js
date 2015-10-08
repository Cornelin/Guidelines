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

// Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead.

// Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope

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

// Always use var to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

// bad
superPower = new SuperPower();

// good
var superPower = new SuperPower();

// Use one var declaration per variable. It's easier to add new variable declarations this way, and you never have to worry about swapping out a ; for a , or introducing punctuation-only diffs.

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

// Declare unassigned variables last. This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

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

// Assign variables at the top of their scope. This helps avoid issues with variable declaration and assignment hoisting related issues.

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

// Use // for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment.

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

// Final returns should be preceded by a blank line

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
