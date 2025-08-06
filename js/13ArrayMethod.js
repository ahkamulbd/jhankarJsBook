/** ====================================================================
 *  ================ map, forEach, filter, find, findIndex =============
 *  ====================================================================
 */

function doubleAll (array) {
    const doubleArr = [];
    for (const element of array) {
        const doubleElement = element * 2;
        doubleArr.push (doubleElement);
    }
    return doubleArr;
}
// const numbers = [4, 5, 2, 8, 10, 17, 3, 0, 20, 17, 33, 6, 7];
// console.log (doubleAll (numbers));

// const doubleNumbers = numbers.map (element => element * 2);
// console.log (doubleNumbers);

// const friends = ["Tom", "Jhon", "Micheal", "Oliver", "Jim", "Rahat", "Zingjeng"];
// const frdLength = friends.map (friend => friend.length);
// console.log (frdLength);

// const firstLetters = friends.map (friend => friend[0]);
// console.log (firstLetters);

// const numberForEach = numbers.forEach (number => console.log (number * 2));
// console.log (numberForEach);

// const filterOddNumber = numbers.filter (number => number % 2 !== 0);
// const filterEvenNumber = numbers.filter (number => number % 2 === 0 && number !== 0);
// console.log (filterOddNumber);
// console.log (filterEvenNumber);

// const greaterFriend = friends.filter (friend => friend.length > 4);
// console.log (greaterFriend);

// const findNumberDivisibleBy5 = numbers.find (number => number % 5 === 0);
// console.log (findNumberDivisibleBy5);

// const numbers = [4, 5, 2, 8, 10, 17, 3, 0, 20, 17, 33, 6, 7];

// const findIndexNumber = numbers.findIndex (number => number % 5 === 0);
// const findIndexNumber = numbers.findIndex (number => number > 5);
// console.log (findIndexNumber);
// const index = numbers.map (inndex => index + 1);
// console.log (inndex);

const students = [
    {name: "John", age: 20},
    {name: "Adam", age: 22},
    {name: "Beauty", age: 23},
    {name: "Sitara", age: 25},
];

const studentInfo = students.map ((student, index, array) => {
    return `${student.name}, ${index + 1} of ${array.length} students`;
});
// console.log (studentInfo);

// const newArray = [3, 4, 2, 7, 0, 1, 10, 4];

// const newIndex = newArray.map (index => index + 1);
// console.log (newIndex);


/** Problem 1 from Page # 221 */

const snacksPrice = [30, 45, 20, 60, 10];

const newSnacksPrice = snacksPrice.map (element => element + 13);
// console.log (newSnacksPrice);

/** Problem 2 from Page # 221 */

const nameList = ['Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo'];

const nameList5 = nameList.filter (element => element.length > 5);
// console.log (nameList5);

/** Problem 3 from Page # 221 */

const numberList = [10, 15, 20, 25, 30, 35];

const findNumber = numberList.find (element => element > 20);
// console.log (findNumber); 

/** Problem 4 from Page # 221 */

const heightData = [65, 70, 68, 72, 68, 73];

const height69 = heightData.filter (element => element > 69);
// console.log (height69);

/** Problem 5 from Page # 221 */

const numbers = [7, 10, 15, 20, 25, 30];

// const numberDivisible3 = numbers.map (element => (element / 3).toFixed (2));
// const numberDivisible3 = numbers.map (element => Math.floor(element / 3));
const numberDivisible3 = numbers.map (element => Math.ceil(element / 3));
// console.log (numberDivisible3);

/** Problem 6 from Page # 221 */

const frienndList = ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp'];

const thirdLetter = frienndList.map (name => name[2]);
// console.log (thirdLetter);

/** Problem 7 from Page # 221 */

const nameArray = ['Tom', 'Harry', 'Sam', 'Jack', 'Harun', 'Kashem', 'Hasi'];

// const startH = nameArray.find (name => name [0] === 'H');
// const startH = nameArray.filter (name => name [0] === 'H');
const startH = nameArray.find (name => name [0] === 'H');
// console.log (startH);

/** Problem 8 from Page # 221 */

const array8 = [1, 2, 3, 4, 5];

// const array8Element = array8.forEach (element => console.log (element));
let sum = 0;
const array8Element = array8.forEach (element => sum += element);

// console.log (sum);

/** Problem 9 from Page # 221 */

const animal = ['cow', 'goat', 'sheep', 'horse'];

// const eachAnimal = animal.forEach (each => console.log (each));
const eachAnimal = animal.forEach (each => console.log (each [0]));