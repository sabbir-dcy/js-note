class Person {
  constructor(name) {
    this.name = name
  }

  printNameArrow() {
    setTimeout(() => {
      console.log('arrow:' + this.name)
    }, 100)
  }

  printNameFunction() {
    setTimeout(function () {
      console.log('function:' + this.name)
    }, 100)
  }
}

let person = new Person('john')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)
