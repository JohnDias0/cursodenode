class Person {
  constructor(name) {
    this.name = name;
  }
  saymyname() {
    return "Hello, my name is " + this.name;
  }
}

module.exports = {
  Person,
};
