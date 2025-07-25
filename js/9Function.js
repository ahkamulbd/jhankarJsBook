/** ======================================================================
 *  ================== Function Declaration ==============================
 *  ======================================================================
 */

/** Problem 1 from Page # 143 */

function havingJuice(){
    console.log("Please take your juice");
}
// havingJuice();

/** Problem 2 from Page # 143 */

function myRoutine(){
    console.log(`
        1. Rise up at 5 am.
        2. Complete prayer emmidiate after.
        3. Having wornig walk around 6 to 7 am.
        4. Having break fast at 7.30 am.
        `);
}
// myRoutine();

/** Problem 3 from Page # 143 */

function myFamilyMembers(){
    console.log('Jinan');
    console.log('Amima');
    console.log('Arkam');
}
// myFamilyMembers();

/** Problem 4 from Page # 143 */

function taskDone(){
    console.log('JavaScript exploring');
    console.log('WordPress Customization');
    console.log('Adobe Illustrator');
    console.log('Adobe Photoshop');
}
// taskDone();

/** Problem 5 from Page # 143 */

function greetMe(){
    console.log('Good Morning! Have a great day');
}
// greetMe();

/** Problem 6 from Page # 143 */

function getFavFriends(){
    console.log('Rashed, Minar, Gupon');
}
// getFavFriends();

/** Problem 7 from Page # 143 */

function introduceMyself(){
    console.log(`
        My Name: Ahkamul
        Age: 47 Years
        Address: Lama, Bandarban
        Phone: 00000000
        Height: 5.6"
        Favourite Food: Fish
        `);
}
// introduceMyself();

/** ===================================================================================
 *  ==================== Function with Parameter & Arguments ==========================
 *  ===================================================================================
 */

function addNumbers(a, b){
    // console.log(argument);

    return a + b;
}
const result = addNumbers(5, 8, 9, 6);
// console.log(result);

function addNewNumbers(a, b){
    let sum = 0;
    for (const number of arguments){
        sum = sum + number;
    }
    // console.log(sum);

    return sum;
}
const resultSum = addNewNumbers(5, 8, 9, 6);
// console.log(`Result = ${resultSum}`);


/** Problem 1 from Page # 149 */

function sumOfFatherAndSon(fatherAge, sonAge){
    // const sum = fatherAge + sonAge;
    let sum = 0;
    for (const number of arguments){
        sum = sum + number;
    }

    return sum;
}
// console.log(sumOfFatherAndSon(47, 7));

/** Problem 2 from Page # 149 */

function multiplyNumbers(a, b){
    const multiply = a * b;

    return multiply;
}
// console.log(multiplyNumbers(15, 20));

/** Problem 3 from Page # 149 */

function examMarks(bangla, english, math){
    let sum = 0;
    for (const number of arguments){
        sum = sum + number;
    }
    return sum;
}

// console.log(examMarks( 87, 100, 90));

/** Problem 4 from Page # 149 */

function myAge(presentYear, birthYear){
    const age = presentYear - birthYear;

    return age;
}
// console.log(myAge(2025, 1976));

/** Problem 5 from Page # 149 */

function buyingLao(laoBudget){
    const laoPrice = 35;
    const numberOfLao = laoBudget / laoPrice;

    return numberOfLao;
}
// console.log(buyingLao(350));


/** Problem 6 from Page # 149 */

function averageOfNumbers(a, b, c, d){
    let sum = 0;
    for (const number of arguments){
        sum = sum + number;
    }
    const average = sum / arguments.length;

    return average;
}
// console.log(averageOfNumbers(10, 20, 30, 40));

/** Problem 7 from Page # 149 */

function shopAccountFunction (buyingPrice){
    const profit = 250;
    const sellingPrice = buyingPrice + profit

    return sellingPrice;
}
// console.log(shopAccountFunction(500));

/** Problem 8 from Page # 149 */

function myFutureAge(birthYear){
    const futureAge = 100;
    const expectedYear = birthYear + futureAge;

    return expectedYear;
}
// console.log(myFutureAge(1976));

/** Problem 9 from Page # 149 */

function monthlyMobileUses(dailyMobileUses){
    const dayInMonth = 30;
    const myMobileUsesInMonth = dailyMobileUses * dayInMonth;

    return myMobileUsesInMonth;
}
// console.log(monthlyMobileUses(7));

/** ==============================================================================
 *  ================= Function with return =======================================
 *  ==============================================================================
 */

/** Problem 1 from Page # 153 */

function checkMoreThan10(number){
    if (number > 10){
        return true;
    }
    else {
        return false;
    }
}
// console.log(checkMoreThan10(11));
// console.log(checkMoreThan10(1));

/** Problem 2 from Page # 153 */

function dividedBy13(number){
    if (number % 13 === 0){
        return true;
    }
    else {
        return false;
    }
}
// console.log(dividedBy13(39));
// console.log(dividedBy13(40));

/** Problem 3 from Page # 153 */

function foodBill (rice, curry, drinks){
    const totalBill = rice + curry + drinks;

    return totalBill;
}
// console.log(foodBill(20, 80, 30));

/** Problem 4 from Page # 153 */

function votingAge (age){
    if (age > 18){
        return `Eligible for voting`;
    }
    else {
        return `Not Eligible`;
    }
}
// console.log (votingAge(19));
// console.log (votingAge(13));

/** Problem 5 from Page # 153 */

function checkStringLength (stringLength) {
    const length = stringLength.length;

    return length;
}
// console.log (checkStringLength ('Bangladesh'));
// console.log (checkStringLength ('Bangla'));

/** Problem 6 from Page # 153 */

function averageOf3Numbers (a, b, c) {
    const sum = a + b + c;
    const average = sum / arguments.length;

    return average;
}
// console.log (averageOf3Numbers (12, 20, 160));

/** Problem 7 from Page # 153 */

function checkNegativeNumber (number) {
    if (number < 0){
        const expectedNumber = number * (-1);

        return expectedNumber;
    }
    else {
        return number;
    }
}
// console.log (checkNegativeNumber (-10));
// console.log (checkNegativeNumber (100));

/** ============================================================================ 
 *  ======================== More Function =====================================
 *  ============================================================================
 */

/** Problem 1 from Page # 157 */

// const array = [12, 45, 78, 45, 51, 23, 100, 0];

function checkOddEven (arr) {
    const length = arr.length;
    if (length % 2 === 0){
        return 'Array element is even';
    }
    else {
        return 'Array element is odd';
    }
}
// console.log (checkOddEven (array));

/** Problem 2 from Page # 157 */

function nameFunction (name) {
    const firstLetter = name[0];

    return firstLetter;
}
// console.log(nameFunction ('Amima'));
// console.log(nameFunction ('Jinan'));

/** Problem 3 from Page # 157 */

function tenCheckFunction (number) {
    if (number > 10) {
        return number / 10;
    }
    else {
        return number * 10;
    }
}
// console.log (tenCheckFunction (11));
// console.log (tenCheckFunction (7));

/** Problem 4 from Page # 157 */

const array = [12, 45, 78, 45, 51, 23, 100, 0];

function arrayFunction (arr) {
    const firstElement = arr[0];
    const secondElement = arr[1];
    const sum1stAnd2nd = firstElement + secondElement;

    return sum1stAnd2nd;
}
// console.log (arrayFunction (array));

/** Problem 5 from Page # 157 */

function nFunction (n) {
    if (n > 0) {
        return n * 2;
    }
    else {
        return n * 3;
    }
}
// console.log (nFunction (10));
// console.log (nFunction (-10));

/** Problem 6 from Page # 157 */

function twoNameFunction (name1, name2){
    const firstNameLength = name1.length;
    const secondNameLength = name2.length;

    if (firstNameLength > secondNameLength){
        return true;
    }
    else {
        return false;
    }
}
// console.log (twoNameFunction ('Amima Hoque', 'Arkam'));

/** Problem 7 from Page # 157 */

function number7Function (number1, number2) {
    const multiply = number1 * number2;

    if (multiply > 100) {
        return multiply / 2;
    }
    else {
        return multiply;
    }
}

// console.log (number7Function (10, 11));
// console.log (number7Function (10, 10));
// console.log (number7Function (10, 9));

/** ======================================================================
 *  ===================== Array used in Function =========================
 *  ======================================================================
 */

/** Proble 1 from Page # 161 */

function frdArrayFunction (array) {
    let sum = 0;
    for (const number of array) {
        if (number % 2 !== 0) {
            sum = sum + number;
        }
    }
    return sum;
}
// const frdArray = [5, 15, 8, 7];

// console.log (frdArrayFunction (frdArray));

/** Proble 2 from Page # 161 */

function number2Function (array) {
    let smallest = array[0];
    for (const number of array) {
        if (number < smallest){
            smallest = number; 
        }
    }
    return smallest;
}
const frdArray = [5, 15, 81, -7, 3, 11];
// console.log (number2Function (frdArray));

function largestInArray (array) {
    let largest = array [0];
    for (const number of array) {
        if (number > largest){
            largest = number;
        }
    }
    return largest;
}
// console.log (largestInArray (frdArray));

/** Proble 3 from Page # 161 */

function ageFunction (age) {
    if (age < 18) {
        return 18;
    }
    else if (age > 45) {
        return 45;
    }
    else {
        return age;
    }
}
// console.log (ageFunction (18));
// console.log (ageFunction (17));
// console.log (ageFunction (46));

/** Proble 4 from Page # 161 */

const myFrdArray = [2, 4, 5, 7, 8, 32, 45]

function dividedBy4Function (array) {
    let sum = 0;
    for (const number of array) {
        if (number % 4 === 0) {
            sum = sum + number;
        }
    }
    return sum;
}
// console.log (dividedBy4Function (myFrdArray));

/** Proble 5 from Page # 162 */

function functionNumber5 (number) {
    if (number < 20) {
        return number * 2;
    }
    else {
        return number / 20;
    }
}

// console.log (functionNumber5 (18));
// console.log (functionNumber5 (28));

/** Proble 5 from Page # 162 */

function functionNumber5 (number) {
    if (number < 20) {
        return number * 2;
    }
    else {
        return number / 20;
    }
}

// console.log (functionNumber5 (18));
// console.log (functionNumber5 (28));

/** Proble 6 from Page # 162 */

function negativeElementSum (array) {
    let sum = 0;
    for (const element of array) {
        if (element < 0) {
            sum = sum + element;
        }
    }
    return sum; 
}
const newArray = [1, -1, 2, 8, -11, -7, 10, 0, -3];
 
// console.log (negativeElementSum (newArray));

/** Proble 7 from Page # 162 */

function dividedBy3 (array) {
    let multiple = 1;
    for (const element of array) {
        if (element % 3 === 0 && element !== 0) {
            multiple = multiple * element;
            // console.log(element);
        }
    }
    return multiple;
}
const newArr = [1, -1, 9, 8, -11, -19, 10, 0, -3, 6];

// console.log (dividedBy3 (newArr));