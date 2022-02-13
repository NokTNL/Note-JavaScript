function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`${name}, aged ${age}: Hi!`);
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  },
};

const person = new Person("Mat", 30);
