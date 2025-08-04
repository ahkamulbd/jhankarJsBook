/** ===================================================================================
 *  ========= var, let & const And Default value of Parameter =========================
 *  ===================================================================================
 */

/** Problem 1 from Page # 186 */

function threeNumberFunc (num1 = 0, num2 = 0, num3 = 0) {
    const sum = num1 + num2 + num3;

    return sum
}
// console.log (threeNumberFunc (3, 4));

/** Problem 2 from Page # 186 */

function depositAmount (amount = 50) {
    const balance = 1000;
    const newDeposit = balance + amount;

    return newDeposit;
}
// console.log (depositAmount ());
// console.log (depositAmount (500));

/** Problem 3 from Page # 186 */

function personalIncome (name = 'Anonymous', income = 0) {
    console.log (`${name}'s monthly income is ${income}`);
}
// personalIncome ();
// personalIncome ('Moni', 20000);

/** Problem 4 from Page # 186 */

function numberSquare (number = 1) {
    return number * number;
}
// console.log (numberSquare ());
// console.log (numberSquare (5));

/** Problem 5 from Page # 186 */

function productPrice (product = 'Unknown product', price = 1) {
    console.log (`${product} price is ${price}`);
}
// productPrice ();
// productPrice ('Pen', 5);

/** Problem 6 from Page # 186 */

function favouriteBooks (array = ['JS book']) {
    return array;
}
const books = ['Sonar Tori', 'Gitangoli', 'Sangsaptak', 'J A Guru', 'Gavi Bittanto'];

// console.log (favouriteBooks ());
// console.log (favouriteBooks (books));

/** Problem 7 from Page # 186 */

function priceQuantity (obj = {price: 10, qty: 1}){
    const price = obj.price;
    const qty = obj.qty;
    const totalPrice = price * qty;

    return totalPrice;
}
const newObject = {
    price: 100,
    qty: 10
}

// console.log (priceQuantity ());
// console.log (priceQuantity (newObject));

/** Problem 8 from Page # 186 */

function douboleArrayElements (array = [5, 10, 15]) {
    const newArray = [];

    for (const element of array) {
        newArray.push (element * 2);
    }
    return newArray;
}

const arguArray = [10, 20, 30, 40, 50];

// console.log (douboleArrayElements ());
// console.log (douboleArrayElements (arguArray));

/** Problem 9 from Page # 186 */

function returnPrincipal (obj = {principal: 1000, rate: 5}) {
    const principal = obj.principal;
    const rate = obj.rate;
    const simpleInterest = principal * (rate / 100);

    return simpleInterest;
}

const principalObject = {
    principal: 5000,
    rate: 10
}

// console.log (returnPrincipal ());
// console.log (returnPrincipal (principalObject));

// /** Problem 10 from Page # 186 */

function findingSalaryTax (obj = {salary: 50000, tax: 10}) {
    const salary = obj.salary;
    const tax = obj.tax;
    const taxMoney = salary * (tax / 100);
    const netSalary = salary - taxMoney;

    return netSalary;
}
const salaryObject = {
    salary: 10000,
    tax: 20
}

// console.log (findingSalaryTax ());
// console.log (findingSalaryTax (salaryObject));

/** ====================================================================================
 *  ============================ String Template +++++++++++++++++++++++++++++++++++++++
 *  ====================================================================================
 */

/** Problem 1 from Page 191 */

const number1 = 100;
const number2 = 20;
const difference = number1 - number2;

// console.log (`The difference between ${number1} and ${number2} is ${difference}`);

/** Problem 2 from Page 191 */

const employee = {
    name: "Akash",
    age: 28,
    salary: 40000
}
// console.log (`Name: ${employee.name}, Age: ${employee.age} and Salary: ${employee.salary}`);

/** Problem 3 from Page 191 */

const fruits = ['Apple', 'Banana', 'Mango', 'Guava', 'Orange'];

// console.log (`My favourite fruit is ${fruits[2]}`);

/** Problem 4 from Page 191 */

const a = 50;
const b = 10;

// console.log (`The division of ${a} and ${b} is ${a / b}`);

/** Problem 5 from Page 191 */

const person = {
    firstName: 'Amit',
    lastName: 'Kumar'
}
// console.log (`Full Name: ${person.firstName} ${person.lastName}`);

/** Problem 6 from Page 191 */

const animals = ['Cat', 'Dog', 'Elephant'];

// console.log (`My favorite animals are ${animals.join (', ')}`);

/** Problem 7 from Page 191 */

const student = {
    name: 'Amima',
    age: 11,
    results: [100, 99, 93]
}
const length = student.results.length;
// console.log (length);
const sum = student.results [0] + student.results [1] + student.results [2];
const average = sum / length;

// console.log (`Name: ${student.name},
//     Age: ${student.age} and
//     Average Marks: ${average.toFixed(2)};              
//     `);

/** ==================================================================================
 *  ================== Arro Function =================================================
 *  ==================================================================================
 */

function add (a, b) {
    return a + b;
}
// console.log (add (5, 7));

const add1 = (a, b) => a + b;
// console.log (add1 (5, 7));

/** Problem 1 from Page # 195 */

const arr = [4, 7, 2, 11, 23, 0, 21];
const arro = (array) => array[5];

// console.log(arro (arr));

/** Problem 2 from Page # 195 */

const threeArro = (a, b, c) => a * b * c;
// console.log (threeArro (4, 5, 6));

/** Problem 3 from Page # 196 */

const anonymousArro = () => "Unknown";
// console.log (anonymousArro ());

/** Problem 4 from Page # 196 */

const moneyObj = {
    name: "Akash",
    pocketMoney: 1200
}
const moneyArro = (obj) => obj.pocketMoney / 5;

// console.log (moneyArro (moneyObj));

/** Problem 5 from Page # 196 */

const jsArray = [4, 7, 2, 11, 23, 0, 21];
// const jsArrayLength = jsArray.length;

const jsArrow = (array) => array [0] + array [array.length - 1];

// console.log (jsArrow (jsArray));

/** Problem 6 from Page # 196 */

const arroSum = (a = 10, b = 5) => a + b;

// console.log (arroSum ());
// console.log (arroSum (20, 30));