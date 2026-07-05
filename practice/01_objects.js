// create a function Calculator that creates 3 methods
// read, sum and mul, that does what they intent to do

function Calculator() {
  this.a = undefined;
  this.b = undefined;

  this.read = function () {
    this.a = Number(prompt("enter the value of a: "));
    this.b = Number(prompt("enter the value of b: "));
  }

  this.sum = function () {
    return this.a + this.b
  }

  this.mul = function () {
    return this.a * this.b
  }
}

// create an accumulator
// read to get a number to add to the value
// and accumulator.value to get a value

function Accumulator(value) {
  this.value = value;

  this.read = function () {
    this.value += Number(prompt("Add a number to add to accumulator: "))
  }
}
