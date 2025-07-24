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
console.log(monthlyMobileUses(7));