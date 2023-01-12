const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start, end) {
  var modifiedFood = [];
  for (let i = start; i < end - 1; i++) {
    modifiedFood.push(foods[i]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}
// Progression 3:
function isEven(number) {
  return number % 2 == 0 ? true : false;
}
function isPrime(number) {
  for (let i = 2, j = number * number; i <= j; i++) {
    if (number == i) {
      continue;
    } else if (number % i === 0 || number == 1) {
      return false;
    }
  }
  return true;
}
function checkNumber(numberArray, operation) {
  let modifiedNumberArray = numberArray.filter(operation);
  return modifiedNumberArray;
}
// Progression 4:
function nonPrime(numberArray) {
  let modifiedNumberArray = [];
  numberArray.forEach((number) => {
    isPrime(number) ? null : modifiedNumberArray.push(number);
  });
  return modifiedNumberArray;
}
function reject(numberArray) {
  return nonPrime(numberArray);
}
// Progression 5:
const isEvenUsingLambda = (number) => number % 2 == 0;
// Progression 6:
function square(number) {
  return number * number;
}
function findSquareOfNumbers(myArray) {
  let modifiedMyArray = myArray.map(square);
  return modifiedMyArray;
}
// Progression 7:
function multiply(myArray) {
  return myArray.reduce((mul, number) => {
    return mul * number;
  }, 1);
}
function sumOfSquares(myArray) {
  return myArray.map(square).reduce((sum, number) => {
    return sum + number;
  }, 0);
}
