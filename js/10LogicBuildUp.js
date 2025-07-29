function inchToFeet (inch) {
    const feetFraction = inch / 12;
    // console.log(feetFraction);

    // const feetInt = parseInt (feetFraction);
    // console.log(feetInt);

    const feetFloor = Math.floor (feetFraction);
    // console.log (feetFloor);

    const feetReminder = inch % 12;
    // console.log (feetReminder);

    const result = `${feetFloor} Feet ${feetReminder} Inches`;

    return result;
}

// console.log(inchToFeet (66));

/** Problem 1 from Page # 166 */

function mileToGauge (mile) {
    const requiredGauge = mile * 1760;

    return requiredGauge;
}
// console.log (mileToGauge (13));

/** Problem 2 from Page # 166 */

function kilowatHourToKilCalorie (kilowatHour) {
    const requiredKiloCalorie = kilowatHour * 860;
     
    return requiredKiloCalorie;
}
// console.log (kilowatHourToKilCalorie (10));

/** Problem 3 from Page # 166 */

function hourToSecond (hour) {
    const minutes = hour * 60;
    const seconds = minutes * 60;

    return seconds;
}

// console.log (hourToSecond (10));

/** Problem 4 from Page # 166 */

function sentimeterToMeter (sentimeter) {
    const meterFraction = sentimeter / 100;
    const meterWholeNumber = Math.floor (meterFraction);
    const meterReminder = sentimeter % 100;
    const requiredResult = `${meterWholeNumber} Meter ${meterReminder} Sentimeter`;

    return requiredResult;
}

// console.log (sentimeterToMeter (570));

/** Problem 5 from Page # 166 */

function inchToCentimeter (inch) {
    const centimeter = inch * 2.54;

    return centimeter;
}
// console.log (inchToCentimeter (13));

/** Problem 6 from Page # 166 */

function poundToKG (pound) {
    const kg = pound * 0.453;

    return kg;
}
// console.log(poundToKG (13));

/** ==========================================================================================
 *  ==========================================================================================
 */

function isLeapYear (year) {
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLipi1 = isLeapYear (2100);
const isLipi2 = isLeapYear (2400);
const isLipi3 = isLeapYear (1900);
const isLipi4 = isLeapYear (2052);

// console.log (isLipi1, isLipi2, isLipi3, isLipi4);

/** Problem 1 Page # 169 */

function incomeTaxCalculation (income) {
    if (income <= 50000) {
        return 10;
    }
    else if (income >= 50001 && income <= 100000){
        return 20;
    }
    else if (income >= 100001 && income <= 200000){
        return 30;
    }
    else {
        return 40;
    }
}
// console.log (incomeTaxCalculation (22000));

/** Problem 2 Page # 170 */

function packageDeliveryCost (weight) {
    if (weight < 10) {
        return 100;
    }
    else if (weight >= 10 && weight < 20) {
        return 300;
    }
    else if (weight >= 20 && weight < 50) {
        return 1000;
    }
    else {
        const cost = 1000 + (weight - 49) * 100;
        return cost;
    }
}
// console.log (packageDeliveryCost (8));
// console.log (packageDeliveryCost (18));
// console.log (packageDeliveryCost (28));
// console.log (packageDeliveryCost (58));

/** ========================================================================
 *  ========================================================================
 */

function oddElementsSum (array) {
    const odds = [];
    for (let element of array) {
        if (element % 2 !== 0) {
            odds.push (element);
        }
    }
    // console.log (odds);
    let sum = 0;
    for (let element of odds) {
        sum += element;
    }

    // let sum = 0;
    // for (let element of array) {
    //     if (element % 2 !== 0) {
    //         sum += element;
    //     }
    // }
    // const average = sum / array.length;
    const average = sum / odds.length;
    
    return average;
}
// const arrayElements = [3, 6, 12, 4, 11, 0, -7, 23, 54, 13];
const arrayElements = [6, 12, 4, 54];

const result = oddElementsSum (arrayElements);
// console.log(result);

/** Problem 1 from Page # 175 */

const newArrary = [3, 6, 12, 4, 11, 0, -7, 23, 54, 13];

function averageOfEvenElements (array) {
    let sum = 0; 
    let even = [];
    for (let element of array) {
        if (element % 2 === 0 && element !== 0) {
            sum += element;
            even.push (element);
        }
    }
    // console.log (even);
    const average = sum / even.length;

    return average;
}
// console.log (averageOfEvenElements (newArrary));

/** Problem 2 from Page # 175 */

const array2 = [3, 6, 12, 4, 11, 0, -7, 23, 54, 13];

function newArray2 (array) {
    let oddArray = [];
    for (let element of array) {
        if (element % 2 !== 0 && element !== 0) {
            oddArray.push (element);           
        }
    }
    // console.log(oddArray);

    let oddArrayDouble = [];
    for (let element of oddArray) {
        oddArrayDouble.push (element * 2);
    }
    // console.log(oddArrayDouble);

    // return newArrary;
}
// newArray2 (array2);
// console.log (newArray2 (array2));

/** Problem 3 from Page # 175 */

// const array3 = [3, 6, 12, 4, 11, 0, -7, 23, 54, 13];
const array3 = [6, 12, 4, 54];

function checkOddNumberInArray (array) {
    for (let element of array) {
        if (element % 2 === 0) {
            return `No odd number found`;
        }
        else {
            return `Odd numbers found`;
        }
    }
}
// console.log (checkOddNumberInArray (array3));

/** Problem 4 from Page # 175 */

const array4 = [3, 6, 12, 4, 11, 0, -7, 23, 54, 13];

function findOddArrayAverage (array) {
    let odd = [];
    for (let element of array) {
        if (element % 2 !== 0) {
            odd.push (element);
            // console.log (element);
        }
    }
    // console.log (odd);

    let sum = 0;
    for (let element of odd) {
        sum += element;
    }
    const average = sum / odd.length;

    return average; 
}
// findOddArrayAverage (array4);

// const result4 = findOddArrayAverage (array4);

// console.log (result4.toFixed (2));

/** Problem 5 from Page # 175 */

const array5 = [3, 6, 12, 4, 11, 0, -7, 23, 54, 13];

function oddArrayMinus1 (array) {
    const odd = []; 
    for (let element of array) {
        if (element % 2 !== 0) {
            odd.push (element - 1);
        }
    }

    // console.log (odd);
    return odd;
}

const result5 = oddArrayMinus1 (array5);
// console.log (result5); 

/** ===============================================================================
 *  ===============================================================================
 */

const students = ['abul', 'babul', 'cabul', 'habul', 'babul', 'cabul', 'abul', 'babul', 'cabul' ];

function noDuplicate (array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes (item) === false) {
            unique.push (item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate (students);
// console.log (uniqueArray);

/** Problem 1 from Page # 177 */

const numbers1 = [1, 5, 61, 5, 87, 7, 5, 81, 61, 5, 61, 5, 87, 87, 7, 5, 81, 61, 5];

function noDuplicateNumber (array) {
    const uniqueNumber = [];
    for (const item of array) {
        if (uniqueNumber.includes (item) === false) {
            uniqueNumber.push (item);
        }
    }

    return uniqueNumber;
}
const resultUnique = noDuplicateNumber (numbers1);
// console.log(resultUnique);

/** Exchanging the value between two variables */

let a = 5;
let b = 7;
console.log (a, b);

let temp = a;
a = b;
b = temp;
console.log (a, b);