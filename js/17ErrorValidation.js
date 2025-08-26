/** ========================== Type Validation ======================== */

const multiply = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return `Please provide a number`;
    }
    else {
        const multi = num1 * num2;
        return multi;
    }
}
// console.log (multiply (5, 10));
// console.log (multiply ('5', 10));

const getSecondElement = (array) => {
    if (Array.isArray (array) === false){
        return `Please provide an array`;
    }
    else {
        const second = array [1];
        return second;
    }
}
const price = 10;
// const numbers = [12, 16, 17, 2, 19, 10];

// console.log (getSecondElement (price));
// console.log (getSecondElement (numbers));


/** Problem 1 from Page # 298 */

const string1 = 'Jinan';

const checkFirstLetter = (str) => {
    if (typeof str !== 'string'){
        return `Please write a string`;
    }
    // else {
    //     return str [0];
    // }
    return str [0];
    
}

// console.log (checkFirstLetter (string1));
// console.log (checkFirstLetter (price));


/** Problem 2 from Page # 298 */

const numbers = [12, 16, 17, 2, 19, 10];

const checkLastElement = (array) => {
    if (Array.isArray (array) === false) {
        return `Please provide an array`;
    }
    return `${array [array.length - 1]}`;
}

// console.log (checkLastElement (price));
// console.log (checkLastElement (numbers));

/** Problem 3 from Page # 298 */

const getArea = (length, width) => {
    if (typeof length !== 'number' || typeof width !== 'number'){
        return `Lenth and width both will be number`;
    }
    const area = length * width;
    return area;
}
// console.log (getArea (10, 20));
// console.log (getArea ('5', 20));

/** ================= Different types of Error in JavaScript ================ */

/** How many errors are in JavaScript: 
 * 1. Syntax Error
 * 2. Type Error
 * 3. Reference Error
 * 4. Logical Error
 * 5. Range Error
 */
