const array = [];

let i = 0;

while (i < 5) {
    let user = prompt("Number:");
    array.push(user);
    i++;
}

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// Exercise 2

let numStudents = Number(prompt("Number of students: "));
const listStudents = [];

for (let i=0; i<numStudents; i++) {
   let askStudentName = prompt("Student name: ");
   listStudents.push(askStudentName)
}
let studentsList = document.querySelector(".students-list");
for (let i=0; i<listStudents.length; i++) {
    let listCreate = document.createElement("li")
    listCreate.textContent = listStudents[i];
    studentsList.appendChild(listCreate)
}

// Exercise 3

let numDogs = 6
const listDogs = []

for (let i=0; i<numDogs; i++) {
   let DogNam = prompt("Enter the name of a dog:");
   listDogs.push(DogNam)
}

let newDogsList = listDogs.slice().sort(function(a, b) {
    return b.localeCompare(a); // Compare in reverse order
});

for (let i = 0; i < newDogsList.length; i++) {
    console.log(newDogsList[i]);
}

// Exercise 4

const numbers = []

while (true) {
    let input = Number(prompt("Number:"))
    if (input === 0) {
        break
    }
    numbers.unshift(userInput)
}

let sortedNumbers = numbers.sort((a,b) => b -a);

for (let i=0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// Exercise 5

const dualNumList = [];
let continueRunning = true;

while (continueRunning) {
    let userInput = Number(prompt("Number: "))
    for (let i=0; i < dualNumList.length; i++) {
        if (userInput === dualNumList[i]) {
            console.log(` Number: ${userInput} exists`)
            continueRunning = false
            break
        }
    }
    dualNumList.unshift(userInput)
}

for (let i=0; i<dualNumList.length; i++) {
    console.log(dualNumList[i])
}