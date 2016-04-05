var obj = {};

console.log(obj.toString());

obj.toString = function() {
  return "[obj custom]";
};

console.log(obj.toString());

function Person(name) {
  this.name = name;

}

Person.prototype.sayName = function() {
  console.log(this.name);
};

var person1 = new Person("tammy");

person1.sayName();

for (var key in person1) {
  console.log(key);
  console.log(person1[key]);

}

Person.prototype.favorites = [];

var person1 = new Person("Nicholas");
var person2 = new Person("Brandy");
person1.favorites.push("pizza");
person2.favorites.push("quinoa");
console.log(person1.favorites);

console.log("..........");

function Car(name) {
  this.name = name;
}

Car.prototype = {

  constructor: Car,

  sayName: function() {
    console.log(this.name);
  },

  toString: function() {
    return "[Car " + this.name + "]";
  }
};

var benz = new Car("benz");

console.log(benz);
console.log(benz instanceof(Car));
console.log(benz.constructor === Car);
console.log(benz.constructor === Object);

//add new method

Car.prototype.sayHi = function() {
  console.log("Hi");
};

console.log(benz);

benz.sayHi();

Array.prototype.sum = function() {
  return this.reduce(function(previous, current) {
    return previous + current;
  });
};

var numbers = [1, 2, 3, 4, 5];
var result = numbers.sum();
console.log(result);

//modify string proto

String.prototype.capitalize = function() {
  return this.charAt(0)
    .toUpperCase() + this.substring(1);
};

var message = 'hello world';
console.log(message.capitalize());

//prototype chaining

var book = {
  title: 'javascript'
};

var prototype = Object.getPrototypeOf(book);
console.log(prototype === Object.prototype);
//true

//Object.prototype methods are:
// hasOwnProperty()
// propertyIsEnumerable();
// isPrototypeOf();
// valueOf();
// toString();

var bookString = book.toString();
console.log(typeof bookString);
//String

// valueOf(): Default

var now = new Date();

var before = new Date(2010, 1, 1);
console.log(before);
//Fri Nov 20 2015 08:33:43 GMT-0800 (PST)
console.log(now > before);
//true

//ADDING ENUMERABLE PROPERTIES TO OBJECT PROTOTYPE.
// Object.prototype.add = function(value) {
//     return this + value;
// };

// console.log(book.add(5));
//[object Object]5
// console.log("title".add("end"));
//titleend

var empty = {};

for (var property in empty) {
  console.log(property);
}
//add

//limiting for-in loop to own properties
for (var property in empty) {
  if (empty.hasOwnProperty(property)) {
    console.log(property);
  }
}

console.log("*************");

//OBJECT INHERETANCE:

//Object create method:

var bookTwo = Object.create(Object.prototype, {
  title: {
    configurable: true,
    enumerable: true,
    value: "Little Women",
    writable: true
  }
});

var prototype = Object.getPrototypeOf(bookTwo);
console.log(prototype);

// you write this
function YourConstructor() {
  // initialization
}
// JavaScript engine does this for you behind the scenes
YourConstructor.prototype = Object.create(Object.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: YourConstructor,
    writable: true
  }
});
