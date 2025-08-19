/** Reference type of Non-primitive Data */

let p = {job: 'web developer'};
let q = p;
// console.log (p, q);

q.job = 'graphic designer';
// console.log (p, q);

/** Primitive data pass as "Pass by Value" */

function changeValue (num) {
    num = 20;
    // console.log (`Inside function: ${num}`);
}
let x = 10;
// console.log (`Before function call: ${x}`);
changeValue (x);
// console.log (`After function call: ${x}`);

/** Non-primitive Data pass as "Pass by Reference" */

function updateJob (person) {
    person.job = 'designer';
    // console.log (`Inside function: ${person}`);
    // console.log ('Inside function: ', person)
}
let employee = {job: 'developer'};
// console.log (`Before function call: ${employee}`);
// console.log ('Before function: ', employee);
updateJob (employee);
// console.log (`After function call: ${employee}`);
// console.log ('After function: ', employe

/** Primitive টাইপ ভ্যালুর কপি পাছ করে, কোনো কানেকশন রাখে না। আর Non-primitive টাইপ রেফারেন্স পাছ করে, কানেকশন ধরে রাখে না। */

/** Proble 1 from Page # 259 */

let num = 15;
let copy = num;
copy = 25;
// console.log (num, copy);

/** Proble 2 from Page # 259 */

let arr = [1, 2, 3];
let newArr = arr;
arr = [1, 2, 3, 88];

// console.log (arr, newArr);

/** Proble 3 from Page # 259 */

let language = {
    name: 'JS',
    age: 30
}
let newVersion = language;
newVersion.location = 'Browser';

// console.log (language, newVersion); 

/** Proble 1 from Page # 262 */

let nameValue;
// console.log (nameValue);

/** Proble 2 from Page # 262 */

function addFunction (a, b) {
    const sum = a + b;
}
// console.log (addFunction (10, 20));

/** Proble 3 from Page # 262 */

const array3 = [10, 20, 30, 40, 50];
delete array3 [2];
// console.log (array3 [2]);

/** Proble 4 from Page # 262 */

function sum (a, b, c) {
    const add = a + b + c;

    console.log (a, b, c);
}
// sum (5, 10);


/** Problem 1 from Page # 266 */

// const falseVarible = 'false';

// if (falseVarible) {
// //     console.log ('True value');
// // }
// else {
//     // console.log ('Not true');
// }

/** Problem 2 from Page # 266 */

const emptyObj = {};

if (!!emptyObj) {
    // console.log ('Thruthy');
}
else {
    // console.log ('Falsy');
}

/** Problem 3 from Page # 266 */

const emptyArray = [];

// if (!!emptyArray) {
//     // console.log ('Thruthy');
// }
// else {
// //     console.log ('Falsy');
// // }

/** Problem 4 from Page # 266 */

const emptyArray4 = [];

// console.log (!!emptyArray4);

const nullVariable = null;

// console.log (nullVariable);
// console.log (typeof nullVariable);

/** Problem 1 from Page # 270 */

// if (true == 1) {
//     console.log ("Same");
// }
// else {
//     console.log ("Different");
// }

/** Problem 2 from Page # 270 */

const obj1 = {price: 10};
const obj2 = {price: 10};

// if (obj1 == obj2) {
//     console.log ("Same");
// }
// else {
//     console.log ("Different");
// }

// if (obj1 === obj2) {
//     console.log ("Same");
// }
// else {
//     console.log ("Different");
// }
// It is different, because object comparison checkes reference, not value.

/** Problem 3 from Page # 270 */

const array1 = [1, 2, 3];
const array2 = array1;

// if (array1 === array2) {
//     console.log ('Same');
// }
// else {
//     console.log ('Different');
// }

/** Problem 4 from Page # 270 */

function compareFunction (a, b) {
    if (a === b) {
        console.log ("Same");
    }
    else {
        console.log ('Different');
    }
}
// compareFunction (1, true);

/** Problem 5 from Page # 270 */

const strinng = "";

// if (strinng == false) {
//     console.log ('Same');
// }
// else {
//     console.log ('Different');
// }

// if (strinng === false) {
//     console.log ('Same');
// }
// else {
//     console.log ('Different');
// }
// console.log ("" == false);

/** Problem 6 from Page # 270 */

// if (null === undefined) {
//     console.log ('Same');
// }
// else {
//     console.log ('Different');
// }

/** Problem 7 from Page # 270 */

if (1 === '1') {
    console.log ('Same');
}
else {
    console.log ('Different');
}