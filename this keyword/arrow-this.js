
//*this in fat arrow function


var progLang = {
  name : 'js',
  libraries: ['react', 'angular', 'vue'],
  printLibraries : function() {
    this.libraries.forEach(function(lib) {
      console.log(`${this.name} loves ${lib}`);
    })
  }
}
progLang.printLibraries()
/**
 * * ekhane printLibraries function er bhitor je =this= ache sheta progLang object ke bujhay
 * but, =this= inside forEach call back function window/global ke bujhay. karon foreach er bhitor je
 * anonymous function ache sheta window/global dara call hoy.
 * as a result, this === window, and this.name === undefined
 */


//* Solution -01
var language = {
  name : 'js',
  libraries: ['react', 'angular', 'vue'],
  printLibraries : function() {
    var self = this
    // console.log(this); --> javascript
    this.libraries.forEach(function(lib) {
      // console.log(this); --> window/global

      //// console.log(`${this.name} loves ${lib}`) ;
      console.log(`${self.name} loves ${lib}`);
    })
  }
}
language.printLibraries()
/**
 * *amra ekhane =this= ke print kore dekhte pari kon =this= kake point korche
 * amra jodi =this= ke =self= variable e store kori then self.name kori tahole
 * output undefined ashbe na. =self= ekhane language object ke bujhay.
 */


//* Solution -02 (use of bind)
var code = {
  name : 'js',
  libraries: ['react', 'angular', 'vue'],
  printLibraries : function() {
    this.libraries.forEach(function(lib) {
      console.log(this);
      console.log(`${this.name} loves ${lib}`);
    }.bind(this))
  }
}
code.printLibraries()
/**
 * *foreach call back function ta jehetu this bolte window ke bujhe
 * tai amra ekhane explicit binding korte pari
 * whole foreach ke -this- e -bind- kore dile that means function tar scope er baire bind.(this)= korle tokhon shey this bolte -code- object ke bujhbe
 */


//* Solution -03 (arrow function)
var javascript = {
  name: 'js',
  libraries: ['react', 'angular', 'vue'],
  printLibraries: function () {
    this.libraries.forEach((lib) => {
      // arrow function is not concern about -this-..it will not change -this- inside it
      console.log(`${this.name} loves ${lib}`)
    })
  },
}

javascript.printLibraries()

/**
 * *arrow function =this= niye concern thake na. tai shey =this= er value change kore na
 */


//* special example

function Person(name) {
  this.name = name
}

var sakib = new Person('sakib')

/**
 * * ekhane normal function er poriborte arrow function use korle error ashbe...karon-
 * arrow function diye new object create kora jabe na
 * 
 * karon, new keyword diye function call korle shei function ta constructor e transform hoy.ja arrow function pare na
 * 
 * ar amra jani this keyword is related to consturctor. as, arrow function constructor e transform hote pare na,
 * 
 * tai arrow function this niye concern na...arrow te this mane window/ global
 */