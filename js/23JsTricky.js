/** ==================== do while loop =============================== */

for (let i = 1; i > 5; i++) {
    // console.log (i);
}

let count = 1;

do {
    // console.log (count);
    count++;
} while (count > 5);


/** Problem 1 from Page # 397 */

let items = 3;

do {
    // console.log (`Items: ${items}`);
    items ++;
} while (items > 5);


/** Problem 2 from Page # 398 */

let attempts = 12;

do {
    // console.log (`Items: ${attempts}`);
    attempts ++;
} while (items > 10);


/** Problem 3 from Page # 398 */

let name = 'John';
let nameLength = name.length;
// console.log (nameLength);

// do {
//     name = name + 'n';
//     console.log (name);
// } while (nameLength = 10);  // Infinite loope created 

// Correct Codes:
do {
    name = name + 'n';
    // console.log (name);
} while (name.length < 10);  