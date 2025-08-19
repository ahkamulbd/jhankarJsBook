/** ==================== Immutable String ========================= */

/** Problem 1 from Page # 240 */

const city = 'Chattogram';
// const indexG = city.indexOf ('g');
const indexG = city.indexOf ('G'); // output: -1
// console.log (indexG);  

/** Problem 2 from Page # 240 */

const division = 'Sylhet';
const existY = division.includes ('y');
// console.log (existY);

/** Problem 3 from Page # 240 */

const name = 'Rifat';
const nameLength = name.length;
const lastCharecter = name [nameLength - 1];
// console.log (lastCharecter);

/** Problem 4 from Page # 240 */

const language = 'javascript';
const indexOfRip = language.indexOf ('rip');
// console.log (indexOfRip);

/** Problem 5 from Page # 240 */

const text = 'Immutable';
const textLength = text.length;
// text = 'Mutable';
// console.log (textLength);
// console.log (text);

/** ================== toLowerCase () and toUpperCase () ============== */

/** Problem 1 from Page # 243 */

const email = 'User@Example.com';
const lowerEmail = email.toLowerCase ();
// console.log (lowerEmail);

/** Problem 2 from Page # 243 */

const greeting = 'hELlo WoRLd';
const upperGreeting = greeting.toUpperCase ();
const lowerGreeting = greeting.toLowerCase ();
// console.log (upperGreeting);
// console.log (lowerGreeting);

/** Problem 3 from Page # 243 */

const language243 = 'JavaScript';
const existScript = language243.includes ('script');
// console.log (existScript);

/** Problem 4 from Page # 243 */

const text243 = 'NodeJs';
const firstChar = text243 [0];

// if (firstChar === firstChar.toUpperCase () ) {
//     console.log ('Yes');
// }
// else {
//     console.log ('No');
// }

// const checkFirst = (firstChar === firstChar.toUpperCase () ? 'Yes' : 'No');
// const checkFirst = (firstChar === firstChar.toUpperCase ()) ? 'Yes' : 'No';
const checkFirst = firstChar === firstChar.toUpperCase () ? 'Yes' : 'No';
// console.log (checkFirst);

/** ============== trim, slice, split, join, concat, substring ============== */

/** Problem 1 from Page 248 */

const friends = "Raju,Rana,Hasan,Kabir,Mahi";
const friendsArray = friends.split (',');
// console.log (friendsArray);

/** Problem 2 from Page 248 */

// const friendsString = friendsArray.join ('');
const friendsString = friendsArray.join (',');
// console.log (friendsString);

/** Problem 3 from Page 248 */

const string = "function if else while";
const stringArray = string.split (' ');
// console.log (stringArray);

/** Problem 4 from Page 248 */

const languages = ["JavaScript", "Python", "Java"];
const languagesString = languages.join ('; ');
// console.log (languagesString);

/** Problem 5 from Page 248 */

const loopString = "for,while,for-in,for-of,do-while";
const loopArray = loopString.split(',');
// console.log (loopArray);

/** Problem 6 from Page 248 */

const string6 = "  console log debug   ";
const trimSrting6 = string6.trim ();
// console.log (trimSrting6);

/** Problem 7 from Page 248 */

const str1 = "push";
const str2 = "pop";
const str3 = "shift";
const str4 = "unshift";

const joinedString = str1.concat (` ${str2} ${str3} ${str4}`);
// console.log (joinedString);

/** Problem 8 from Page 248 */

const string8 = "Hello JavaScript Developer";
const sliceJs = string8.slice (6, 16);
// console.log (sliceJs);

/** Problem 9 from Page 248 */

const string9 = "Code more learn more";
const sliceLearn = string9.substring (10, 15);
// console.log (sliceLearn);

/** ================== repeat, replace ================================= */

/** Problem 1 from Page # 250 */

const string250 = 'Hi';
const repeatHi = string250.repeat (10);
// console.log (repeatHi);

/** Problem 2 from Page # 250 */

const string2502 = "I am learning JavaScript. JavaScript is amazing.";
// const replaceJS = string2502.replace ('JavaScript', 'JS');
const replaceJS = string2502.replaceAll ('JavaScript', 'JS');
// console.log (replaceJS);

/** Problem 3 from Page # 250 */

const string2503 = "I love apples and apples are tasty.";
const replaceApples = string2503.replaceAll ('apples', 'Mangoes');
// console.log (replaceApples);

/** ======================= loop in string And reverse ================================== */

const sentence1 = "I love my darling";


for (const letter of sentence1){
    // console.log (letter);
}

let reverse = "";
for (const letter of sentence1){
    reverse = letter + reverse;
}

// console.log (reverse);
