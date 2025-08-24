/** ==============================================================================
 *  ======== Chapter 16: Built-in Object and Method ==============================
 *  ==============================================================================
 */

/** ================== Type Constructor ========================================= */

const strNum = "42";
const num = Number (strNum);
// console.log (num);
// console.log (typeof num);

const num1 = 123;
const strNum1 = String (num1);
// console.log (strNum1);
// console.log (typeof strNum1);

const isTruthy = Boolean (1);
// console.log (isTruthy);
// console.log (typeof isTruthy);

const isFalsy1 = Boolean (0);
// console.log (isFalsy1);
// console.log (typeof isFalsy1);

const isFalsy2 = Boolean (null);
// console.log (isFalsy2);
// console.log (typeof isFalsy2);

const isFalsy3 = Boolean (undefined);
// console.log (isFalsy3);

const isFalsy4 = Boolean ("");
// console.log (isFalsy4);

const add = new Function ("a", "b", "return a+b");
// console.log (add (5, 10));

const person = new Object();
person.name = 'Jhon';
person.age = 19;
// console.log (person);


/** Problem 1 from Page # 282 */

const start = '786';
const startNum = Number (start);
// console.log (startNum);
// console.log (typeof startNum);

/** Problem 2 from Page # 282 */

const willAttend = Boolean (0);
// console.log (willAttend);

/** Problem 3 from Page # 282 */

const object3 = new Object ();
object3.city = 'Bandarban';
object3.country = 'Bangladesh';
// console.log (object3);

/** Problem 4 from Page # 282 */

const total = 1970;
const totalStr = String (total);
// console.log (total, totalStr);
// console.log (typeof total, typeof totalStr);


/** ================== Math Object ============================= */

/** Problem 1 from Page # 285 */

const smallest = Math.min (45, 11, -98, 89, 23, 56, -12, -56);
// console.log (smallest);

/** Problem 2 from Page # 285 */

const greatest = Math.max (21, 35, 67);
// console.log (greatest);

/** Problem 4 from Page # 285 */

const round1 = Math.round (9.8);
const round2 = Math.round (7.2);
// console.log (round1, round2);

/** Problem 5 from Page # 285 */

const floor = Math.floor (3.1);
const ceil = Math.ceil (6.9);
// console.log (floor, ceil);

/** Problem 6 from Page # 285 */

const absValue = Math.abs (-34);
// console.log (absValue);

/** Problem 7 from Page # 285 */

const newFunc = (decimal) => {
    console.log (Math.round (decimal));
    console.log (Math.floor (decimal));
    console.log (Math.ceil (decimal));
}
// newFunc (11.19);

/** ===================== Date with JS Date ======================== */

// const now = new Date();
// console.log (now);

const specificDate = new Date ("1987-11-08");
// console.log (specificDate);

const dateTime = new Date (2017, 11, 11, 20, 0);
// console.log (dateTime);

// const getYear = now.getFullYear (2011);
// console.log (getYear);

// const getMonth = now.getMonth ();
// console.log (getMonth);

// const getDate = now.getDate ();
// console.log (getDate);

// const getHour = now.getHours ();
// console.log (getHour);

// const getMinute = now.getMinutes ();
// console.log (getMinute);

// const getSecond = now.getSeconds ();
// console.log (getSecond);

const now = new Date ()
now.setFullYear (2011);
// console.log (now.getFullYear (2011));

now.setMonth (7);
// console.log (now.getMonth (7));

const date1 = new Date ("2025-7-24");
const date2 = new Date ("2017-11-11");
const dumproAgeMC = date1 - date2;
const dumproAge = Math.round (dumproAgeMC / (1000 * 60 * 60 * 24));
// console.log (dumproAge);

const dumproAgeRamainingDays = dumproAge % 365;
const dumproAgeYear = (dumproAge - dumproAgeRamainingDays) / 365;
const dumproRealAge = `${dumproAgeYear} Years ${dumproAgeRamainingDays} Days`
// console.log (dumproRealAge); // Output: 7 Years 257 Days 


/** Problem 1 from Page # 287 */

const presentTime = new Date ();
// console.log (presentTime);

/** Problem 2 from Page # 287 */

const presentSetTime = new Date (2036, 6, 15, 14, 45, 30);
// console.log (presentSetTime);

/** Problem 3 from Page # 287 */

const fullYear = new Date ().getFullYear ();
// console.log (fullYear);

/** Problem 4 from Page # 287 */

const dateObj = new Date ();
dateObj.setFullYear (2040);

// console.log (dateObj.getFullYear());

/** Problem 5 from Page # 287 */

const newDate5 = new Date (2029, 1, 16);
const dayIndex = newDate5.getDay ();
console.log (dayIndex);

const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(newDate5);
console.log (day);

const dayBangla = new Intl.DateTimeFormat('bn-BD', { weekday: 'long' }).format(newDate5);
console.log (dayBangla);