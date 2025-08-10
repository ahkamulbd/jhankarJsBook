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
// const eachAnimal = animal.forEach (each => console.log (each [0]));

/** ========================================================================
 *  ================== every, some, flat ===================================
 *  ========================================================================
 */

const scores = [30, 45, 55, 80, 90];
const hasPassed = scores.some (score => score >= 50);
// console.log (hasPassed);

const hasFailed = scores.every (score => score >= 50);
// console.log (hasFailed);

const nestedArray = [1, 2, [3, 4, [5, 6]]];
// const flatArray = nestedArray.flat(1);
// const flatArray = nestedArray.flat(2);
// const flatArray = nestedArray.flat();
const flatArray = nestedArray.flat(3);
// console.log (flatArray);


/** Problem 1 from Page # 1 */

const someArray = [39, 76, 102, 99, 107];
const isOver100 = someArray.some (element => element >= 100);
// console.log (isOver100);

/** Problem 2 from Page # 1 */

const everyArray = [10, 21, 35, 55, 105, 65];
const isDivisibleBy5 = everyArray.every (element => element % 5 === 0);
// console.log(isDivisibleBy5);

/** Problem 3 from Page # 1 */

const words = ['Bye', 'hello', 'good morning', 'good night'];
const checkHello = words.some (element => element = 'hell0');
// console.log (checkHello);

/** Problem 4 from Page # 1 */

const ages = [11, 21, 18, 19, 15, 17];
const allOver18 = ages.every (age => age >= 18);
// console.log (allOver18);

/** ==================================================================================
 *  ================= reduce, object array ===========================================
 * ===================================================================================
 */

/** Problem 1 from Page 228 */

const reduceArray = [5, 10, 15, 20, 25];
const reduceSum = reduceArray.reduce ((accumulator, current) => accumulator + current, 0);
// console.log (reduceSum);

/** Problem 2 from Page 228 */

const shopGoods = [
    {name: 'shampoo', price: 100},
    {name: 'soap', price: 50},
    {name: 'toothpaste', price: 75},
]
const totalPrice = shopGoods.reduce ((accumulator, current) => accumulator + current.price, 0);
// console.log (totalPrice);

/** Problem 3 from Page 229 */

const productList = [
    {name: 'Pen', qty: 5, price: 5},
    {name: 'Book', qty: 7, price: 50},
    {name: 'Bag', qty: 2, price: 500},
];

const totalRevenue = productList.reduce ((accumulator, current) => {
    let goodsPrice = current.qty * current.price;
    let revenue = accumulator + goodsPrice;

    return revenue;
}, 0);

// console.log (totalRevenue);

/** Problem 4 from Page 229 */

const multiplyArray = [1, 2, 3, 4, 5];

const multiply = multiplyArray.reduce ((accumulator, current) => accumulator * current, 1);
// console.log (multiply);

/** Problem 5 from Page 229 */

const values = [10, 200, 30, 40, 50];
// let highestValue = values [0];
// for (const value of values) {
//     if (value > highestValue){
//         highestValue = value;
//     }
// }
// console.log (highestValue);

const highestValue = values.reduce ((accumulator, current) => {
    // console.log (accumulator, current);
    if (current > accumulator) {
        return current;
    }
    else {
        return accumulator;
    }
});
// console.log (highestValue);


/** Problem 6 from Page 229 */

const madeArray = [100, 200, 300, 400];

const elementSum = madeArray.reduce ((accumulator, currentValue) => accumulator + currentValue, 50);
// console.log (elementSum);

/** ================================================================================
 *  =========================== sort method ========================================
 *  ================================================================================
 */

/** Problem 1 from Page 232 */

const array232 = [50, 12, 25, 8, 15];
// array232.sort ((a, b) => a -b);
// console.log (array232);

const result232 = array232.sort ((a, b) => a -b);
// console.log (result232);

/** Problem 2 from Page 233 */

const arrayDescending = [13, 2, 45, 9, 6];

const resultDescending = arrayDescending.sort ((a, b) => b - a);
// console.log (resultDescending);

/** Problem 3 from Page 233 */

const ageObjectArray = [
    {name: "Belal", age: 25},
    {name: "Helal", age: 18},
    {name: "Tariq", age: 35},
     {name: "Ali", age: 29},
    {name: "Sara", age: 22}
]

// const ageSort = ageObjectArray.sort ((a, b) => a.age - b.age);
// console.log (ageSort);

const nameSort = ageObjectArray.sort ((a, b) => 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
);
// const nameSort = ageObjectArray.sort ();
// console.log (nameSort);

/** Problem 4 from Page 233 */

const nameArray233 = ['nabil', 'zubayer', 'sarwar', 'akash', 'delwar'];

const sortingName = nameArray233.sort ((a, b) => a.localeCompare (b));
console.log (sortingName);