// Full Name: Ammar Sultan - 10129675

// Exercise 1:
// Write a JavaScript program to capitalize the first letter of each word of a given string.

function titleCase(str) {
  var string = str.toLowerCase().split(" ");

  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }

  return string.join(" ");
}

// Undo Comment to Test
// console.log(titleCase("the quick brown fox"));

// Exercise 2:
// Write a JavaScript program to find the largest of three given integers.

function findLargestNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// Undo Comment to Test
// console.log(findLargestNumber(1, 0, 1));
// console.log(findLargestNumber(0, -10, -20));
// console.log(findLargestNumber(1000, 510, 440));

// Exercise 3:
// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

function moveLastThreeToFront(input) {
  if (input.length < 3) {
    return input;
  }
  const endPart = input.slice(-3);
  const startPart = input.slice(0, -3);
  return endPart + startPart;
}

// Undo Comment to Test
// console.log(moveLastThreeToFront("Python"));
// console.log(moveLastThreeToFront("JavaScript"));
// console.log(moveLastThreeToFront("Hi"));

// Exercise 4:
// Write a JavaScript program to find the types of a given angle.

function angle_Type(angle) {
  if (angle < 90) {
    return "It's an Acute angle.";
  }
  if (angle === 90) {
    return "It's a Right angle.";
  }
  if (angle < 180) {
    return "It's an Obtuse angle.";
  }
  return "It's a Straight angle.";
}

// Undo Comment to Test
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
