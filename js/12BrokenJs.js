/** ============================================================================================
 *  ================================== Destructuring ===========================================
 *  ============================================================================================
 */
const actor = {
    name: 'Ananta',
    age: 50,
    phone: '01800000000',
    money: 5000
}
const {name, age, phone: mobile, money} = actor;
// console.log (name, age, phone, money);
// console.log (name, age, mobile, money);

const numbers = [55, 66];
const [first, second] = numbers;
// console.log (first, second);

function doubleNumbers (a, b) {
    return [a * 2, b * 2];
}
const [element1, element2] = doubleNumbers (15, 25);
// console.log (element1, element2);

const person = {name1: 'Amit', age1: 25};

const {name1, phone1= '01876000000', age1} = person;
// console.log(name1, phone1, age1);

function introduce ({name, age}) {
    // console.log (`Name: ${name}, Age: ${age}`);
}
const user = {name: 'Aorshi', age: 22, hobby: 'Readinng'};

// introduce (user);

function sum ([a, b]) {
    return a + b;
}
// console.log (sum ([7, 8]));

const numbers1 = [1, 2, 3, 4, 5];
const [, prothom, , cothrtho] = numbers1;
// console.log (prothom, cothrtho);

function discount (money) {
    return (money - (money * (10 / 100)));
}
// console.log (discount (1199));

/** Problem 1 from Page # 202 */

const product = {
    name11: "Laptop",
    price: 50000,
    brand: "Dell"
}
const {name11, price, brand: model} = product;
// console.log(name11, price, model);

/** Problem 2 from Page # 202 */

const Item = {
    name12: "Mobile",
    price12: 20000,
    phone: "Samsung"
}
const {name12, price12, phone} = Item;
// console.log(phone, price12);

/** Problem 3 from Page # 202 */

const colors = ["red", "blue", "green", "yellow"];

const [color1, color2] = colors;
// console.log(color1, color2);

/** Problem 4 from Page # 202 */

const threeNumbers = [100, 200, 300];

const [, second14, ] = threeNumbers;
// console.log(second14);

/** Problem 5 from Page # 202 */

const digits = [2, 4, 6, 8];

const [two, , , eight] = digits;

// console.log(two, eight);

/** Problem 6 from Page # 202 */

function multiply (a, b) {
    return [a * 3, b * 3];
}
const [first6, second6] = multiply (10, 20);

// console.log(first6, second6);

/** Problem 7 from Page # 202 */

const person7 = {
    name7: "Rahal",
    city: "Dhaka"
}
const {name7, city, phone7 = "N/A"} = person7;

// console.log(name7, city, phone7);
// console.log(person7);
// console.log(person7.phone7);

/** Problem 8 from Page # 202 */

const teacher = {
    name8: "Maria", 
    profession: "Teacher"
}
const {name8, profession: job} = teacher;
// console.log (job);

/** ==============================================================================
 *  =================== Rest Operator ============================================
 *  ==============================================================================
 */

/** Problem 1 from Page 204 */

const product1 = {
    name111: "Laptop",
    price: 50000,
    brand: "Dell"
}
const {name111, ...rest} = product1;
// console.log (rest);

/** Problem 2 from Page 204 */

const project = {
    id: 101,
    title: "Web App",
    budget: 3000,
    client: "Tech Corp"
}
const {title, ...restProject} = project;
// console.log (restProject);

/** Problem 3 from Page 205 */

const programmer = {
    name33: "Sophia",
    language: "JavaScript",
    experience: 5,
    specialty: "Frontend",
    tools: "React"
}
const {language, specialty, ...details} = programmer;
// console.log (details);

/** Problem 4 from Page 205 */

const array = [10, 20, 3, 30, 300, 3000];

const [element01, element02, ...restArray] = array;

// console.log (restArray);

/** Problem 5 from Page 205 */

function restParameterSum (a, b, ...restParameters) {
    // console.log(restParameters);
    let sum = 0;
    for (let element of restParameters){
        sum += element;
    }

    return sum;
}
// console.log (restParameterSum(10, 20, 30, 40, 50, 60));

/** Problem 6 from Page 205 */

function allParameterSum (...restArr) {
    let sum = 0;
    for (let element of restArr){
        sum += element;
    }
    const restArrLength = restArr.length;
    const average = sum / restArrLength;

    return average;
}
// console.log (allParameterSum (10, 20, 30, 40, 50, 60));

let a = 10;
let b = 20;
// console.log (a, b);

let temp = a;
a = b;
b = temp;
// console.log (a, b);

/** ============================================================================
 *  ====================== Other Spread Operator ===============================
 *  ============================================================================
 */

const greaterNumber = Math.max (10, 200000, 3, 30, 300, 3000);
// console.log (greaterNumber);

const numberArray = [10, 200000, 3, 30, 300, 3000];
// console.log (Math.max (numberArray));

const maxElement = Math.max (...numberArray);
// console.log (maxElement);

const newArray = [1, 2, 3];

const newlyArray = [numberArray, ...newArray];
// console.log (newlyArray);

const newArrayAdd = [...newArray, 999];
// console.log (newArrayAdd);

/** Problem 1 from Page # 209 */

const technologies = ["condition", "array", "loop"];
const newTechnologies = ["variable", ...technologies];

// console.log(newTechnologies);

/** Problem 2 from Page # 209 */

const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "Papaya", "Orange"];

// console.log (myFruits);

/** Problem 3 from Page # 209 */

const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MangoDB"];
const fullStack = [...frontEnd, ...backEnd, ...database];

// console.log (fullStack);

/** Problem 4 from Page # 210 */

const website = {
    name: "Mysite",
    type: "e-commerce",
    status: "active"
}
const newWebsite = {...website, theme: "dark"};

// console.log (newWebsite);

/** Problem 5 from Page # 210 */

const young = {
    name: "Arif",
    age: 30,
    country: "B Baria"
}
const anotherYoung = {...young};
const {country, ...otherYoung} = anotherYoung;

// console.log (otherYoung);

/** Problem 6 from Page # 210 */

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}
const newCar = {...car, year: 2032};
console.log (newCar);
