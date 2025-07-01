/** Problem 1 from Page # 68 */

const myEatenSandwice = 7;
const youngerEatenSandwice = 5;

const moreEatenSandwice = myEatenSandwice > youngerEatenSandwice;

// console.log(moreEatenSandwice);
// console.log(myEatenSandwice > youngerEatenSandwice);


/** Problem 2 from Page # 68 */

const myClassStudent = 45;
const nextClassStudent = 50;
const moreClassStudent = nextClassStudent > myClassStudent;

// console.log(moreClassStudent);


/** Problem 3 from Page # 68 */

const myNumber = 75;
const myFriendNumber = 75;
const checkNumber = myNumber == myFriendNumber;

// console.log(checkNumber);

/** Problem 4 from Page # 68 */

const targetMoney = 100;
const soFarGetheredMoney = 95;
const checkTarget = (targetMoney != soFarGetheredMoney);

// console.log(checkTarget);


/** Problem 5 from Page # 68 */

// console.log(10 >= 7);

/** Problem 6 from Page # 68 */

// console.log(20 <= 15);

/** Problem 7 from Page # 68 */

const myNumberInExam = 45;
const myFriendNumberInExam = 97;
const checkNumberInExam = myNumberInExam < myFriendNumberInExam;

// console.log(checkNumberInExam);

/** =======================================================
 * ========================================================
 */

/** Problem 1 from Page 70 */

const myBrotherAge = 10;
const myAge = 15;
const compareAge = myBrotherAge <= myAge;

// console.log(compareAge);

/** Problem 2 from Page 70 */

const passMark = 33;
const myMark = 45;
const checkPassed = passMark <= passMark;

// console.log(checkPassed); 

/** Problem 3 from Page 71 */

const jamburaPrice = 100;
const cotbellPrice = 200;

// console.log(jamburaPrice < cotbellPrice); 

/** Problem 4 from Page 71 */

const myReadBook = 10;
const myFriendReadBook = 10;
const checkReadBook = myReadBook == myFriendReadBook;

// console.log(checkReadBook); 


/** Problem 5 from Page 71 */

const myBiscuit = 15;
const myFriendBiscuit = 20;
const checkBiscuit = myBiscuit < myFriendBiscuit;

// console.log(checkBiscuit);

/** Problem 7 from Page 71 */

const realGoal = 2;
const barsaGoal = 3;
const checkGoal = realGoal < barsaGoal;

// console.log(checkGoal);

/** Problem 8 from Page 71 */

const myTodayStudy = true;
const myFriendTodayStudy = false; 
const checkStudy = myTodayStudy == myFriendTodayStudy; 

// console.log(checkStudy);

/** =======================================================
 * ========================================================
 */

// console.log(10 != 10);
// console.log(10 != '10');
// console.log(10 !== 10);
// console.log(10 !== '10');

/** Problem 1 from Page # 73 */

const myMoney = 50;
const myFriendMoney = "50";
const checkFirstCondition = myMoney == myFriendMoney;
const checkSecondConditon = myMoney === myFriendMoney;

// console.log(checkFirstCondition);
// console.log(checkSecondConditon);


/** Problem 2 from Page # 73 */

const firstString = "JavaScript";
const secondString = 'JavaScript';
const firstCondition = firstString == secondString;
const secondCondition = firstString === secondString;

// console.log(firstCondition);
// console.log(secondCondition);
/** Both output are true, because both apostrophe i.e '' and quotation mark i.e "" can be used to declare a string type variable in JavaScript */


/** Problem 3 from Page # 73 */


/** Solution like problem number 1 & 2 in above */


/** Problem 4 from Page # 73 */

const firstApple = "apple";
const secondApple = "apple";
const firstAppleCondition = firstApple == secondApple;
const secondAppleCondition = firstApple == secondApple;

// console.log(firstAppleCondition);
// console.log(secondAppleCondition);


/** Problem 5 from Page # 73 */

const smallTest = "test";
const capitalTest = "TEST";
const firstTestCondition = smallTest == capitalTest;
const secondTestCondition = smallTest === capitalTest; 

// console.log(firstTestCondition);
// console.log(secondTestCondition);
/** To declare a variable is case sensitive in JavaScript */

/** Problem 6 from Page # 73 */

const variableX = 15;
const variableY = "20";
const firstVariableCondition = variableX != variableY;
const secondVariableCondition = variableX !== variableY;

// console.log(firstVariableCondition);
// console.log(secondVariableCondition);
/** Because both value and data type of variableX and variableY different */


/** Problem 7 from Page # 73 */

const variableA = hello;
const variableB = "Hello";
const firstVariableCheck = variableA == variableB;
const secondVariableCheck = variableA === variableB;

console.log(firstVariableCheck);
console.log(secondVariableCheck);

/** Because variableA is not properly defined. That's why an error shown */