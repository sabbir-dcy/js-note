class Person {
  constructor(name) {
    this.name = name
  }
}

class PolitePerson extends Person {
  constructor(name) {
    super(name)
    this.greet()
  }

  greet() {
    console.log('hello folks')
  }
}

const pp = new PolitePerson('john')
