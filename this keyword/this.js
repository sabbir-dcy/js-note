/* implicit biding
explicit biding
new binding
window binding */

//* implicit binding

/* var sakib = {
  name: 'sakib',
  age: 35,
  printPlyerName: function () {
    console.log(this.name)
  },
}

sakib.printPlyerName() */

// another example

/* var printPlyerNameFunction = function(obj) {
  obj.printPlyerName = function() {
    console.log(this.name);
  }
  obj.job = 'cricket'
}

var sakib = {
  name : 'sakib',
  age : 35
}

var tamim = {
  name : 'tamim',
  age : 35
}

printPlyerNameFunction(sakib)
printPlyerNameFunction(tamim)

sakib.printPlyerName()
tamim.printPlyerName()

console.log(sakib.job);  */

// another example
/* var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name)
    },
  }
}

var sakib = Person('sakib', 35) 
/* এখানে person function টি anonymous object return করে। তার মানে object টা এখন sakib এর মধ্যে আছে। তাই এখানে this মানে sakib */

// sakib.printName()

// last example
/* var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name)
    },
    father : {
      name : 'mr.x',
      printName : function() {
        console.log(this.name);
      }
    }
  }
}

var sakib = Person("sakib", 35)
sakib.printName()
sakib.father.printName() */

//* explicit binding (স্পষ্ট বা সরাসরি binding)

/* var printName = function (p1, p2, p3) {
  console.log(`${this.name} ${p1} ${p2} ${p3}`)
}

var mushfiq = {
  name: 'mushfiq',
  age: 35,
}
var a1 = 'something'
var a2 = 'else'
var a3 = 'anything'

var a = [a1, a2, a3]
printName.call(mushfiq, a1, a2, a3)
// call cant send array other than individual arguments
printName.apply(mushfiq, a)
// apply can send array as argument
var newFunc = printName.bind(mushfiq, a1, a2, a3)
newFunc()
// bind will not directly call the function
// printName এর একটা instance, newFunc variable এর মধ্যে save হবে। */

//* new bind

/* function Person(name, age) {
  this.name = name
  this.age = age
  console.log(`${this.name} is ${this.age} years old`);
}

var sakib = new Person('sakib', 35) */

//* window binding

/* 'use strict'
var PrintName = function() {
  // console.log(this === this);
  console.log(this.name);
}

var sakib = {
  name : 'sakib'
}

PrintName() */

//* call bind apply will not work with arrow function
