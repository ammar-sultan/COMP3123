// Exercise 1:
const hypeGreeter = (legends, repeatCount) => {
  const catchPhrase = "Hello!";

  for (const superstar of legends) {
    // Undo Comment to Test
    // console.log(`${catchPhrase}${superstar}`);
  }
};

hypeGreeter([" Randy Savage", " Ric Flair", " Hulk Hogan"], 3);

// Exercise 2:
const capitalize = (inputString) => {
  const [firstChar, ...remainingChars] = inputString;
  return firstChar.toUpperCase() + remainingChars.join("");
};

// Undo Comment to Test
// console.log(capitalize("fooBar"));
// console.log(capitalize("nodeJs"));

// Exercise 3:
const capitalizeWord = ([firstLetter, ...remainingLetters]) =>
  firstLetter.toUpperCase() + remainingLetters.join("");

const colorList = ["red", "green", "blue"];

const updatedColors = colorList.map(capitalizeWord);

// Undo Comment to Test
// console.log(updatedColors);

// Exercise 4:
const filterLessThan20 = (arr) => arr.filter((num) => num < 20);

const numberArray = [1, 60, 34, 30, 20, 5];

// Undo Comment to Test
// console.log(filterLessThan20(numberArray));

// Exercise 5:
const sumArray = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

const productArray = (numbers) => numbers.reduce((acc, num) => acc * num, 1);

const values = [1, 2, 3, 4];

// Undo Comment to Test
// console.log(sumArray(values));
// console.log(productArray(values));

// Exercise 6:
class Vehicle {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }

  getDetails() {
    return `Model: ${this.make} Engine ${this.year}`;
  }
}

class Sedan extends Vehicle {
  constructor(make, year, price) {
    super(make, year);
    this.price = price;
  }

  getInfo() {
    return `${this.make} has a balance of $${this.price.toFixed(2)}`;
  }
}

const car = new Vehicle("Pontiac Firebird", 1976);

// Undo Comment to Test
console.log(car.getDetails());

const sedan = new Sedan("Volvo SD", 2018, 30000);

// Undo Comment to Test
console.log(sedan.getInfo());
