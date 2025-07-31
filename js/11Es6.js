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

console.log (findingSalaryTax ());
console.log (findingSalaryTax (salaryObject));