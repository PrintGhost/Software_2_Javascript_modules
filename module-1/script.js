// #1

console.log("I'm printing to console!");

// #2

let nam = prompt("Enter your Name");

console.log(`Hello, `, nam);

// #3

let num1 = Number(prompt("Your first number"));
let num2 = Number(prompt("Your second number"));
let num3 = Number(prompt("Your third number"));

let sum = num1 + num2 + num3;
let multiply = num1 * num2 * num3;
let average = (num1 + num2 + num3) / 3;

console.log(`Sum of numbers: ${sum}`);
console.log(`Multiplication of numbers: ${multiply}`);
console.log(`Average of numbers: ${average}`);


// #4

let userName = prompt("Your Name");

let rDigit = Math.floor(Math.random() * 4) + 1;

if (rDigit === 1) {
  console.log(`${userName} your wizard name is Gryffindor`);
} else if (rDigit === 2) {
  console.log(`${userName} your wizard name is Slytherin`);
} else if (rDigit === 3) {
  console.log(`${userName} your wizard name is Hufflepuff`);
} else {
  console.log(`${userName} your wizard name is Ravenclaw`);
}

// #5

let yearNum = Number(prompt("Choose year"));

if ((yearNum % 4 === 0 && yearNum !== 0) || yearNum % 400 === 0) {
  console.log(`${yearNum} - leap year`);
} else {
  console.log(`${yearNum} - not leap year`);
}

// #6

let askUser = confirm("Calculate square root?");

if (askUser) {
  userInput = prompt("Enter a number");
  let squareRoot = Math.sqrt(Number(userInput)).toFixed(2);

  if (userInput < 1) {
    console.log("Square root not calculated.");
  } else {
    console.log(`Square root of ${userInput}: ${squareRoot}`);
  }
}


// #7

function calculateAverage(array) {
  sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;
  return average;
}

myArray = [4, 11, 6, 8];

checkAvr = calculateAverage(myArray);

console.log(checkAvr);
