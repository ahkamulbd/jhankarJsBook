const numbers = [12, 98, 45, 63, 21, 72, 100];
const length = numbers.length;

// for (let i = 0; i < length; i++){
//     let index = numbers[i];
//     console.log(index);
// }

for (number of numbers){
    // console.log(number);
}

/** ============================================================================
 *  ============================== For of Loop ================================= 
 *  ============================================================================
 */

/** */

/** Problem 1 from Page # 105 */

const subjects = ['Bangla', 'English', 'Math', 'Science', 'Social Science'];

for (const subject of subjects){
    // console.log(subject);
}

/** Problem 2 from Page # 105 */

const favouriteFoods = ['Ruti', 'Panta', 'Loitta', 'Tea', 'Fish'];

for (const favouriteFood of favouriteFoods){
    // console.log(favouriteFood);
}

/** Problem 3 from Page # 105 */

const familyBirthYears = [1978, 1987, 2014, 2017];

for (const familyBirthYear of familyBirthYears){
    // console.log(familyBirthYear);
}

/** Problem 4 from Page # 105 */

const favouriteFootballers = ['Maradon', 'Messi', 'Ronaldo (Brazil)', 'Ronaldinho', 'Roneey', 'School'];

for (const favouriteFootballer of favouriteFootballers){
    // console.log(favouriteFootballer);
}

/** ==========================================================================================
 *  ============================ While Loop ==================================================
 *  ==========================================================================================
 */

/** Problem 1 from Page 109 */

let i = 0;

while (i < 10){
    // console.log(`${i} Practicing Programming 3 hours in a day`);
    i++;
}

/** Problem 2 from Page 109 */

let num = 1;

while (num < 20){
    // console.log(num);
    num++;
}

/** Problem 4 from Page 109 */

let number3Times = 1;

while (number3Times <= 10){
    // console.log(`${number3Times} X 3 = ${number3Times * 3}`);
    number3Times++;
}

/** Problem 5 from Page 109 */

let number101 = 101;

while (number101 <= 110){
    // console.log(`${number101 / 2}`);
    number101++;
}

/** ==================================================================================
 *  =========================== Sum with while loop ==================================
 *  ==================================================================================
 */

/** Problem 1 from Page # 111 */

let newNumber = 50;

while (newNumber <= 100){
    // console.log(newNumber);
    newNumber++;
}

/** Problem 2 from Page # 111 */

let number5 = 5;
let sum = 0;

while (number5 <= 15){
    sum = sum + number5;
    // console.log(sum);
    number5 ++; 
    // console.log(sum);
}
// console.log(`Sum of numbers from 5 to 15 = ${sum}`);

/** Problem 3 from Page # 111 */

let studentNumber = 1;
let studentSum = 0;

while (studentNumber <= 50){
    studentSum = studentSum + studentNumber;
    // console.log(sum);
    studentNumber ++; 
    // console.log(sum);
}
// console.log(`Sum of numbers from 1 to 50 = ${studentSum}`);

/** Problem 4 from Page # 112 */

let number21 = 1;
let number21Sum = 0;

while (number21 <= 50){
    number21Sum = number21 + number21Sum;
    // console.log(`New Sum = ${number21Sum}`);
    number21 ++; 
}

/** Problem 5 from Page # 112 */

let number20 = 20;
let number20Sum = 0;

while (number20 <= 40){
    number20Sum = number20 + number20Sum;
    number20 ++; 
}
// console.log(`Output = ${number20Sum}`);

/** ============================================================================
 *  ======================== For Loop ==========================================
 *  ============================================================================
 */

/** Problem 1 from Page # 114 */

for (let i = 150; i <= 170; i++){
    // console.log(i);
}

/** Problem 2 from Page # 114 */

let rollSum = 0;

for (let i = 31; i <= 58; i++){
    rollSum = rollSum + i;
    // console.log(i);
}
// console.log(`Sum of 31 to 58 = ${rollSum}`);

/** Problem 3 from Page # 114 */

let number25Sum = 0;

for (let i = 25; i <= 75; i++){
    number25Sum = number25Sum + i;
}
// console.log(`Sum of 25 to 75 = ${number25Sum}`);

/** =================================================================
 *  ====================== Odd & Even with Loop =====================
 *  =================================================================
 */

/** Problem 1 from Page # 119 */

for (let i = 20; i <= 50; i++){
    if (i % 7 === 0){
        // console.log(i);
    }
}

/** Problem 2 from Page # 119 */

for (let i = 40; i <= 80; i++){
    if (i % 7 === 0 && i % 5 === 0){
        // console.log(i);
    }
}

/** Problem 3 from Page # 119 */

let sum13 = 0;

for (let i = 1; i <= 40; i++){
    if (i % 13 === 0){
        sum13 = sum13 + i;
    }
}
// console.log(sum13);

/** Problem 4 from Page # 119 */

for (let i = 1; i <= 50; i = i + 4){
    // console.log(i);
}

/** Problem 5 from Page # 119 */

for (let i = 0; i <= 100; i ++){
    if ((i % 9 === 0 && i % 6 === 0) && i !== 0){
        // console.log(i);
    }
}


/** Problem 6 from Page # 119 */

let sum3And4 = 0;

for (let i = 1; i <= 50; i ++){
    if (i % 3 === 0 && i % 4 === 0){
        sum3And4 = sum3And4 + i;
        // console.log(i);
    }
}
// console.log(sum3And4);

/** =========================================================================
 *  ================= break & continue in Loop ==============================
 *  =========================================================================
 */

/** Problem 1 from Page # 122 */

for (let i = 1; i <= 30; i++){
    // console.log(i);
    if (i === 15){
        break;
    }
}

/** Problem 2 from Page # 122 */

for (let i = 1; i <= 40; i++){
    if (i % 7 === 0){
        continue;
    }
    // console.log(i);
}

/** Problem 3 from Page # 122 */

for (let i = 1; i <= 15; i++){
    if (i === 9){
        continue;
    }
    // console.log(i);
}

/** Problem 5 from Page # 122 */

for (let i = 1; i <= 25; i++){
    if (i % 3 === 0){
        continue;
    }
    // console.log(i);
}


/** Problem 6 from Page # 122 */

for (let i = 91; i <= 120; i++){
    console.log(i);
    if (i % 10 === 0){
        break;
    }
}
