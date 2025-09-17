// let apuRoast = 0;
// let bpuRoast = 0;
// let cpuRoast = 0;
// let dpuRoast = 0;
// let epuRoast = 0;

function counter () {
    let count = 0;

    return function () {
        count++;

        return count;
    }
}

const apuRoast = counter ();
// console.log (apuRoast());
// console.log (apuRoast());
// console.log (apuRoast());
// console.log (apuRoast());

/** Problme 1 from Page # 390: What is the Closure in JavaScript? */

/** Answer:
 * 
        * 🔹 Closure কী?

        Closure হলো একটি ফাংশনের ভেতরে তৈরি হওয়া আরেকটি ফাংশন, যেটা বাইরের ফাংশনের ভেরিয়েবল বা ডেটা মনে রাখতে পারে—even যদি বাইরের ফাংশন কাজ শেষ করে দেয়।

        অর্থাৎ, Closure এমন একটি মেকানিজম যা inner function-কে outer function-এর scope-এর ভেরিয়েবল ব্যবহার করার ক্ষমতা দেয়।

        🔹 কেন Closure দরকার?

        ডেটা private রাখতে (যেন বাইরে থেকে access করা না যায়)।

        কোনো ভেরিয়েবলকে persistent (স্থায়ী) রাখতে, অর্থাৎ ফাংশন শেষ হলেও সেই ভেরিয়েবল হারিয়ে না যায়।

        জাভাস্ক্রিপ্টের function factory বা module pattern বানাতে।

        🔹 Closure এর গঠন

        Closure তৈরি হয় যখন:

        একটি ফাংশনের ভেতরে আরেকটি ফাংশন ডিফাইন করা হয়।

        inner function, outer function-এর ভেরিয়েবল ব্যবহার করে।

        outer function return হয়ে গেলেও inner function সেই ভেরিয়েবল access করতে পারে।

        🔹 উদাহরণ ১: সাধারণ Closure
        function outerFunction() {
            let count = 0; // outer function-এর ভেরিয়েবল

            function innerFunction() {
                count++; // inner function outer-এর ভেরিয়েবল ব্যবহার করছে
                return count;
            }

            return innerFunction;
        }

        const closureExample = outerFunction();

        console.log(closureExample()); // 1
        console.log(closureExample()); // 2
        console.log(closureExample()); // 3

        ব্যাখ্যা:

        outerFunction() একবার কল করলে, সেটা innerFunction রিটার্ন করে।

        কিন্তু count ভেরিয়েবল মুছে যায় না, বরং মনে থাকে।

        তাই প্রতিবার closureExample() কল করলে count এক এক করে বাড়তে থাকে।

        🔹 উদাহরণ ২: Data Private রাখা
        function bankAccount(initialBalance) {
            let balance = initialBalance;

            return function(amount) {
                balance += amount;
                return balance;
            }
        }

        const account = bankAccount(100); 

        console.log(account(50));  // 150
        console.log(account(-20)); // 130
        console.log(account(70));  // 200

        ব্যাখ্যা:

        এখানে balance ভেরিয়েবল বাইরে থেকে সরাসরি access করা যায় না।

        কিন্তু inner function-এর মাধ্যমে balance আপডেট ও রিটার্ন করা যায়।

        এভাবেই closure data private রাখে।

        🔹 Closure-এর ব্যবহারিক দিক

        Module Design Pattern → যেখানে private ডেটা ও public ফাংশন রাখা যায়।

        Event Handler → যেখানে event listener কোনো ভেরিয়েবল মনে রাখতে পারে।

        setTimeout / setInterval → যেগুলো future time-এ কোনো ভেরিয়েবল মনে রাখে।

        👉 সহজভাবে বললে:
        Closure = Function + তার lexical scope (যেটা function তৈরি হওয়ার সময়ের scope ধরে রাখে)।
 */


/** Problem 2 from Page # 390 */

function fridgeTracker () {
    let count = 0;

    function openTime () {
        count++;

        return count;
    }

    return openTime;
}

const aboulOpened = fridgeTracker ();

// console.log (aboulOpened ());
// console.log (aboulOpened ());
// console.log (aboulOpened ());
// console.log (aboulOpened ());
// console.log (aboulOpened ());

/** Example from Problem 1 */

function bankBalance (initialBalance) {
    let balance = initialBalance;

    function newBalance (amount) {
        balance += amount;

        return balance;
    }

    return newBalance;
}

const polBalance = bankBalance (500);

// console.log (polBalance (300));
// console.log (polBalance (- 200));
// console.log (polBalance (300));
// console.log (polBalance (500));


/** Problem 3 from Page # 391 */

function taskTracker () {
    let count = 0;

    return function () {
        count++;

        return count;
    }
}

const zarifTask = taskTracker ();

// console.log (zarifTask ());
// console.log (zarifTask ());
// console.log (zarifTask ());

/** Another Example: */

function numberOfSchoolStudent (initialStudent) {
    let presentStudent = initialStudent;

    return function (student) {
        presentStudent += student;

        return presentStudent;
    }
}

const biddapithStudent = numberOfSchoolStudent (1000);

// console.log (biddapithStudent (50));
// console.log (biddapithStudent (- 150));
// console.log (biddapithStudent (200));
// console.log (biddapithStudent (250));

biddapithStudent (100);
biddapithStudent (-300);
console.log (biddapithStudent (100));