/** Example 1 from Page # 332-333: */

// try {
//     const data = `Data stolen from data baba`;
//     const result = JSON.parse (data);
//     console.log (result);
// }
// catch (error){
//     console.log (`Error handled gracefully`);
// }
// finally {
//     console.log (`JSON parsing attempt completed`);
// }

/** Example 2 from Page # 333 */

// try {
//     console.log (`Opening the file -------`);
// }
// catch (error) {
//     console.error ('Error: ', error.message);
// }
// finally {
//     console.log ('Closing the file........ ');
// }

/** Example 3 from Page # 334 */

function getProperty (str) {
    try {
        return str.toUpperCase ();
    }
    catch (error) {
        console.error ('Error eaten by virus');

        return `Something went wrong`;
    }
}
// console.log (getProperty ('My name is Kuddus'));
// console.log (getProperty ());

/** Example 4 from Page # 334:  */

function performanceCleanUp () {
    try {
        console.log ('Starting a process.......');
    }
    finally {
        console.log ('Cleaning up resources....');
    }
}
// performanceCleanUp ();

/** Example 5 from Page # 334-335:  */

function validateInput (input) {
    try {
        if (typeof input !== 'string') {
            throw new Error ('Input must be string');
        }
        console.log ('Valid input: ', input);
    }
    catch (error){
        if (error) {
            console.error ('Custom Error ', error.message);
        }
        else {
            console.error ('Unknown Error ', error.message);
        }
    }
}
// validateInput ('Hello');
// validateInput (32);


/** Problem 1 from Page # 335: একটা কোড লিখ, যেখানে JSON.parse ব্যবহার করে ডাটা পার্স করার চেষ্টা করবি। ধর, JSON ডাটা হলো {product: 'Date', price: 450}। তবে সার্ভার কোনো সময় ভুল ডাটা পাঠাতে পারে, যেমন 'Data corrupted' লিখে স্ট্রিং ডাটা পাঠিয়ে দিল। যদি এরর হয়, সেটা catch ব্লকে হ্যান্ডেল করবি এবং কনসোলে ম্যাসেজ দিবি "Invalid JSON format"। */

let jsonData = '{ "product": "Date", "price": 450 }';

// try {
//     const parseData = JSON.parse (jsonData);
//     console.log (parseData);
// }
// catch (error) {
//     console.error ('Invalid JSON format');
// }

// try {
//     let parseData;

//     if (typeof jsonData === 'string'){
//         parseData = JSON.stringify (jsonData);
//     }
//     else if (typeof jsonData === 'object') {
//         parseData = jsonData;
//     }
//     else {
//         throw new Error ('Invalid data type');
//     }
//     console.log (parseData);
// }
// catch (error) {
//     console.error ('Invalid JSON format');
// }


/** Problem 2 from Page # 335 */

function validInput (input) {
    try {
        if (input.includes ('@')){
            console.log (input);
        }
        else {
            throw new Error ('Invalid input');
        }
    }
    catch (error){
        console.error ('Invalid email format');
    }
}
// validInput ('abc@gmail.com');
// validInput ('abgmail.com');


/** Problem 3 from Page # 335: JSON.parse ব্যবহার করে এমন একটা কোড ব্লক লিখে ফেল, যেখানে try ব্লকে ধর {role: 'CEO', weeklyHours: 1000} ডাটা আসছে। যদি ডাটা পার্স করতে পারিস এবং এরর খায়। যেটাই হোক না কেন, কনসোলে দেখাবি "Week is over" */

// const jsonData3 = "{role: 'CEO', weeklyHours: 1000}";
const jsonData3 = "{'role': 'CEO', 'weeklyHours': 1000}";

try {
    parseData = JSON.parse (jsonData3);
    // console.log (parseData);
}
catch (error) {
    // console.error (error.message);
}
finally {
    // console.log ('Week in over');
}


/** Problem 4 from Page # 335 */

function stringOnlyParser (input) {
    try {
        if (input === 'null' || input === '' || input === 'undefined'){
            console.log ('Input must be string');
        }
        else if (typeof input === 'string') {
            console.log (input);
        }
        else {
            throw new Error ('Error Message');
        }

    }
    catch (error) {
        console.error ('Invalid Input');
    }
}
// stringOnlyParser ('null');
// stringOnlyParser ('');
// stringOnlyParser ('Bangladesh');
// stringOnlyParser (70);


/** Problem 5 from Page # 335 */

// try {
//     console.log (`Deleting account`);
// }
// catch (error) {
//     console.error ('Failed to delete account');
// }
// finally {
//     console.log (`Account deletion attempt finished`);
// }


const addNumbers = (num1, num2) => {
    try {
        const sum = num1 + num2;
        if (sum > 20) {
            console.log (sum);
        }
        else {
            throw new Error ('Both input numbers should be greater than 10');
        }
    }
    catch (error) {
        console.log (error.message);
    }
}
addNumbers (30, 40);
addNumbers (3, 9);