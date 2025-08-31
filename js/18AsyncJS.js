/** ================== Single Threaded JavaSceipt ===================== */

// console.log (1);
// console.log (2);
// doSomething ();
// console.log (4);
// console.log (5);
// console.log (6);
// // const doSomething = () => console.log (3);
// function doSomething () {
//     console.log (3);
// }

/** Problem 1 from Page # 303: What will happen after function call in synchonous codes? */

/** Answer: Codes will work synchronously after calling function */

/** Problem 2 from Page # 303: Is JavaScript Single Threaded? */

/** Answer: Yes, JavaScript is single threaded */

/** ============= setTimeout and setInterval Functions ================== */

// console.log (1);
// console.log (2);
// setTimeout (() => {
//     console.log (3);
// }, 3000)
// console.log (4);
// console.log (5);
// console.log (6);

// setInterval (() => {
//     console.log ("I M U");
// }, 1000);

// let num = 0;
// setInterval (() => {
//     num ++;
//     console.log (num);
// }, 1000);

// let num = 0;
// const intervalID = setInterval (() => {
//     num ++;
//     console.log (num);

//     if (num === 10){
//         clearInterval (intervalID);
//     }
// }, 1000);


/** Problem 1 from Page # 307 */

// console.log ('Bangladesh 1');
setTimeout (() => {
    // console.log (`I wasted 3 secodes of my life by looking at screen and doing nothing`);
}, 3000);
// console.log ('Bangladesh 2');

/** Problem 2 from Page # 307 */

let number = 131;

const numberInterval = setInterval (() => {
    number = number + 2;
    // console.log (number);

    if (number <= 140) {
        clearInterval (numberInterval);
    }
}, 2000);

/** Problem 3 from Page # 307 */

let text = `I am learning JavaScript`;
let count = 0;

// const showText6 = setInterval (() => {
//     count ++;
//    console.log (text);

//    if (count === 6) {
//     clearInterval (showText6);
//    }
// }, 2000);

/** Problem 4 from Page # 307 */


setTimeout (() => {}, 0); // Default value - 0;          


/** ================= Call stack, Callback Queue, Event Loop */

// function first() {
//     console.log("Inside first()");
//     second();
//     console.log("End of first()");
// }

// function second() {
//     console.log("Inside second()");
// }

// console.log("Start");
// first();
// console.log("Finish");

// Example 2

// console.log ('Start');

// setTimeout (() => {
//     console.log ('Timeout 1');
// }, 5000);

// setTimeout (() => {
//     console.log ('Timeout 2');
// }, 500);

// console.log ('End');

/** Problem 1 from Page # 310: Event Loop কিভাবে কাজ করে ? */

/** Answer: 
 
        * JavaScript Event Loop হলো সেই মেকানিজম, যেটার কারণে JavaScript একসাথে অনেকগুলো কাজ হ্যান্ডেল করতে পারে, যদিও JavaScript single-threaded (মানে একবারে একটাই কাজ চালাতে পারে)।


        JavaScript এর execution model তিনটা জিনিসের উপর দাঁড়ানো:

        Call Stack (Execution Stack)
        👉 যেখানে synchronous (সরাসরি চলা) কোডগুলো একটার পর একটা এক্সিকিউট হয়।

        FIFO না, বরং LIFO (Last In First Out) নিয়মে কাজ করে।

        যেমন:

        function a() { console.log("A"); }
        function b() { a(); console.log("B"); }
        b();


        এখানে আগে b() stack এ ঢুকবে → তারপর a() → a() শেষ হলে বের হবে → তারপর b() শেষ হবে।

        Web APIs / Background APIs (Browser or Node.js দ্বারা প্রদত্ত)
        👉 যখন asynchronous কাজ হয় (যেমন setTimeout, fetch, DOM event ইত্যাদি), সেগুলো stack এ এক্সিকিউট না হয়ে browser এর background এ চলে।

        কাজ শেষ হলে এগুলো callback queue তে মেসেজ পাঠায়।

        Callback Queue (or Task Queue / Message Queue)
        👉 asynchronous কাজগুলো শেষ হলে তাদের callback function এখানে আসে, queue তে জমে থাকে।

        FIFO (First In First Out) নিয়মে এগুলো প্রসেস হয়।

        Event Loop
        👉 Event Loop এর কাজ হলো stack খালি আছে কিনা দেখা।

        যদি stack খালি থাকে, তবে queue থেকে callback নিয়ে stack এ পাঠায়।

        এভাবে asynchronous কোড main thread কে ব্লক না করে আলাদা queue তে অপেক্ষা করে এবং পরে execution stack এ ঢুকে execute হয়।

        📊 উদাহরণ:
        console.log("Start");

        setTimeout(() => {
        console.log("Callback from setTimeout");
        }, 2000);

        console.log("End");

        Execution Flow:

        "Start" → Call stack এ যায় → প্রিন্ট হয়।

        setTimeout → Browser API এ চলে যায় (stack এ না থাকে)। 2 সেকেন্ড পর তার callback callback queue তে পাঠানো হবে।

        "End" → Call stack এ যায় → প্রিন্ট হয়।

        2 সেকেন্ড পর event loop দেখে stack খালি, তাই callback queue থেকে "Callback from setTimeout" → stack এ পাঠায় → প্রিন্ট হয়।

        👉 Output হবে:

        Start
        End
        Callback from setTimeout

        🔑 সহজভাবে মনে রাখার কৌশল:

        Call Stack = বর্তমানে চলছে এমন কাজ।

        Web APIs = ব্যাকগ্রাউন্ড worker (asynchronous কাজের জায়গা)।

        Callback Queue = pending কাজের লাইন।

        Event Loop = নিরাপত্তা গার্ড (stack খালি হলে queue থেকে কাজ ঢুকায়)।
 */
// function a() { 
//     console.log("A"); 
// }

// function b() { 
//     a(); 
//     console.log("B"); 
// }

// b();


/** Problem 2 from Page # 310: call stack এবং callback queue এর মধ্যে Difference কি? */

/** 
 * Answer: 
 * 
        * Call Stack আর Callback Queue দুটোই JavaScript execution model এর আলাদা আলাদা অংশ, কিন্তু কাজের ধরন ভিন্ন।

        🔎 Difference between Call Stack and Callback Queue
        বিষয়	Call Stack	Callback Queue
        সংজ্ঞা	যেখানে JavaScript কোড (functions, statements) আসলেই execute হয়।	যেখানে asynchronous কাজ শেষ হলে তাদের callback function গুলো জমা থাকে।
        ধরন	Data structure: Stack (LIFO – Last In First Out)	Data structure: Queue (FIFO – First In First Out)
        কাজ	Function call গুলো একটার পর একটা চালানো ও শেষ করা।	Async কাজ (setTimeout, fetch, event ইত্যাদি) শেষ হলে callback ফাংশনকে ধরে রাখে যতক্ষণ না stack খালি হয়।
        Execution	সরাসরি execute হয় (immediate execution)।	সরাসরি execute হয় না → Event Loop stack খালি হলে queue থেকে callback stack এ পাঠায়, তারপর execute হয়।
        উদাহরণ	console.log("Hello") সাথে সাথে call stack এ execute হবে।	setTimeout(() => console.log("Hi"), 1000) callback queue তে যাবে 1 সেকেন্ড পরে।
        📊 উদাহরণ দিয়ে বোঝাই
        console.log("1");

        setTimeout(() => {
        console.log("2");
        }, 0);

        console.log("3");

        Execution Flow:

        "1" → call stack এ যায় → সাথে সাথে execute → print হয়।

        setTimeout → browser API এ যায় → 0ms পর callback queue তে callback (console.log("2")) চলে আসে।

        "3" → call stack এ যায় → execute → print হয়।

        Event Loop দেখে call stack খালি → callback queue থেকে "2" stack এ ঢোকে → execute হয়।

        👉 Output হবে:

        1
        3
        2


        ✅ সংক্ষেপে:

        Call Stack = যেখানে synchronous (তাৎক্ষণিক) কোড execute হয়।

        Callback Queue = যেখানে asynchronous কোডের callback গুলো অপেক্ষা করে, Event Loop এর signal পেলে execute হয়।
 */


/** Problem 3 from Page # 310: JavaScript যদি Single Threaded হয়, তবে asynchronous কাজগুলো কিভাবে Handle করে? */

/** Answer: 
 * 
        * 🧵 JavaScript Single-threaded মানে কী?

        JavaScript engine (যেমন V8) একটা main thread এ চলে → যেখানে একবারে একটা কাজই execute হয়।
        মানে: Call Stack-এ একসাথে একটাই function execute হয়।

        ❓ তাহলে async কাজগুলো কিভাবে চলে?

        JavaScript engine একা না → এর সাথে কাজ করে Browser (বা Node.js runtime)।
        এখানেই async কাজগুলো handle হয়।

        👉 মূলত Web APIs / Node APIs + Event Loop + Callback Queue মিলে async কাজ manage করে।

        ⚙️ Workflow (Asynchronous Handling)

        Call Stack এ কোড আসে
        যেমন:

        setTimeout(() => {
        console.log("Done!");
        }, 2000);


        Browser API / Node API কে দেওয়া হয়
        setTimeout main stack এ run না হয়ে browser এর Timer API এ চলে যায়।

        Background এ async কাজ চলে

        Timer চলতে থাকে (stack ব্লক করে না)।

        Network request হলে browser network thread এ request পাঠায়।

        Callback Queue তে Callback জমা হয়
        async কাজ শেষ হলে callback ফাংশন queue তে রাখা হয়।

        Event Loop কাজ নেয়
        Event Loop সবসময় দেখে → Call Stack খালি কিনা।

        যদি খালি থাকে → Callback Queue থেকে কাজ Call Stack এ পাঠায়।

        তখন ফাংশন execute হয়।

        📊 উদাহরণ:
        console.log("Start");

        setTimeout(() => {
        console.log("Async task done!");
        }, 2000);

        console.log("End");

        Execution Steps:

        "Start" → Call Stack → print।

        setTimeout → Browser Timer API এ চলে যায়।

        "End" → Call Stack → print।

        2 সেকেন্ড পর Timer শেষ → callback Queue তে callback function (console.log("Async task done!")) জমা হয়।

        Event Loop দেখে Call Stack খালি → Callback Queue থেকে function আনে → execute → print।

        👉 Output:

        Start
        End
        Async task done!

        🔑 Key Point

        JavaScript নিজে asynchronous না → বরং Browser/Node environment async কাজ করে দেয়।

        JS engine কেবল Event Loop এর মাধ্যমে সঠিক সময়ে callback execute করে।

        তাই single-threaded হলেও JavaScript non-blocking asynchronous কাজ করতে পারে।
 */


/** ============= The Real Type of JavaScript =========================== */

/** Explanation: JavaScript is Just In Time (JIT) compiled Language: */

/** Answer: 
 * 
        * 🔹 JavaScript কেন JIT (Just In Time) Compiled Language বলা হয়?

        JavaScript মূলত একটি interpreted language ছিল। অর্থাৎ, ব্রাউজারের JavaScript Engine (যেমন Chrome-এর V8, Firefox-এর SpiderMonkey, Safari-এর JavaScriptCore ইত্যাদি) লাইন বাই লাইন কোড পড়ে তাৎক্ষণিকভাবে execute করত।

        কিন্তু শুধুমাত্র interpreter ব্যবহার করলে performance অনেক slow হত। তাই আধুনিক JavaScript Engine-গুলো (যেমন V8) এখন JIT Compiler ব্যবহার করে।

        🚀 JIT Compiler কাজ করে কিভাবে?

        Parsing (পড়া)

        প্রথমে JavaScript কোডকে পড়া হয় এবং Abstract Syntax Tree (AST) তৈরি করা হয়।

        let x = 5;
        let y = 10;
        console.log(x + y);


        👉 উপরের কোডটা প্রথমে টুকরো টুকরো করে AST তৈরি করে।

        Bytecode তৈরি (Interpreter stage)

        কোডকে সরাসরি মেশিন ল্যাঙ্গুয়েজে না গিয়ে bytecode আকারে intermediate form-এ রূপান্তর করা হয়।

        এই bytecode ইন্টারপ্রেটার দ্বারা run হয়।

        Profiling (Hot code চিহ্নিত করা)

        JIT Compiler কোড রান করার সময় দেখে কোন ফাংশন/কোড বারবার execute হচ্ছে (যাকে বলে hot code path)।

        Optimized Machine Code তৈরি (Compilation stage)

        যেই অংশটা বেশি execute হয়, সেটাকে Just In Time মেশিন কোডে (native CPU instructions) কম্পাইল করে ফেলে।

        একবার মেশিন কোডে কম্পাইল হলে পরেরবার আর interpreter ব্যবহার করতে হয় না → performance অনেক দ্রুত হয়।

        👉 এই কারণে JavaScript-কে JIT Compiled Language বলা হয় — কারণ execution-এর সময়েই কোডকে মেশিন কোডে রূপান্তর করে ফেলা হয়।

        🔹 একটি উদাহরণ
        function add(a, b) {
            return a + b;
        }

        for (let i = 0; i < 1000000; i++) {
            add(10, 20);
        }

        এখানে কি হচ্ছে?

        শুরুতে add ফাংশনকে interpreter (bytecode form) দিয়ে execute করা হবে।

        Engine দেখবে যে add ফাংশন অনেকবার run হচ্ছে (hot function)।

        JIT Compiler add ফাংশনটিকে মেশিন কোডে রূপান্তর করবে।

        এর ফলে পরে আর interpreter দিয়ে নয় → সরাসরি মেশিন কোড চালানো হবে।

        👉 এই প্রক্রিয়াই JavaScript-কে দ্রুততর করে তোলে।

        🔹 Interpreter বনাম JIT Compiler তুলনা (সহজ উদাহরণ)

        ধরুন, আপনি একটা গল্প পড়ছেন।

        Interpreter হলো এমন একজন পাঠক, যে গল্পটা লাইন বাই লাইন পড়ে শোনাচ্ছে।

        Compiler (Traditional AOT) হলো এমন একজন, যে আগে পুরো বইটা পড়ে অনুবাদ করে তারপর শোনাচ্ছে।

        JIT Compiler হলো এমন একজন, যে শুরুতে লাইন বাই লাইন পড়ে শোনাচ্ছে, কিন্তু যেই অংশটা বেশি শোনাতে হচ্ছে, সেটা মনে রেখে native ভাষায় বলে দিচ্ছে।

        👉 তাই JIT হলো interpreter + compiler-এর combination।

        🔹 বাস্তব উদাহরণ (Console Test)
        console.time("normal");

        function multiply(a, b) {
        return a * b;
        }

        for (let i = 0; i < 10000000; i++) {
        multiply(5, 10);
        }

        console.timeEnd("normal");


        👉 প্রথম কিছু লুপ interpreter দিয়ে চলবে। কিন্তু কয়েক হাজার বার পর JIT Compiler detect করবে multiply বারবার call হচ্ছে, তাই এটাকে machine code-এ optimize করবে। ফলে সময় বাঁচবে।

        ⚡ সংক্ষেপে:

        JavaScript আগের মতো pure interpreted না।

        আধুনিক JavaScript Engine-গুলো JIT Compiler ব্যবহার করে।

        Execution-এর সময়েই কোডকে মেশিন কোডে রূপান্তর করে → performance অনেক দ্রুত হয়।
 */


/** Explanation: How is JavaScript a multi-paradigm language? */

/** Answer: 
 * 
        * JavaScript-কে multi-paradigm language বলা হয় কারণ এটি একসাথে বিভিন্ন programming style (paradigm) সাপোর্ট করে।

        🔹 Paradigm কী?

        Programming Paradigm মানে হলো কোড লেখার ধরণ বা চিন্তার পদ্ধতি।
        যেমন — কিছু ভাষা শুধুমাত্র object-oriented, কিছু আবার শুধুমাত্র functional বা procedural।

        কিন্তু JavaScript অনেকগুলো paradigm সাপোর্ট করে — তাই একে multi-paradigm বলা হয়।

        🔹 JavaScript এর প্রধান Paradigm সমূহ
        1. Imperative / Procedural Programming

        👉 এখানে আমরা step-by-step নির্দেশ দিই, কিভাবে কাজ হবে।

        let numbers = [1, 2, 3, 4];
        let doubled = [];

        for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
        }
        console.log(doubled);


        ➡️ এখানে আমরা লুপ ব্যবহার করে manual ভাবে কাজ করাচ্ছি।

        2. Functional Programming

        👉 JavaScript first-class functions সাপোর্ট করে।
        মানে function-কে variable-এ রাখা যায়, argument হিসেবে পাঠানো যায়, এমনকি return করা যায়।

        let numbers = [1, 2, 3, 4];
        let doubled = numbers.map(n => n * 2);
        console.log(doubled);


        ➡️ এখানে map() ব্যবহার করা হয়েছে, যা functional style।
        ➡️ Pure functions, higher-order functions, immutability JavaScript-এ করা যায়।

        3. Object-Oriented Programming (OOP)

        👉 JavaScript prototype-based হলেও, এখন ES6 থেকে class keyword ব্যবহার করে OOP style সাপোর্ট করে।

        class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
        }

        let p1 = new Person("Ahkamul", 35);
        p1.greet();


        ➡️ এখানে OOP-এর concept — class, object, constructor, method — ব্যবহার করা হয়েছে।

        4. Event-Driven Programming

        👉 JavaScript অনেক বেশি event-driven, বিশেষ করে browser environment-এ।

        document.getElementById("btn").addEventListener("click", function() {
        alert("Button clicked!");
        });


        ➡️ এখানে event (click) ঘটলে function execute হচ্ছে।

        🔹 কেন Multi-Paradigm বলা হয়?

        আপনি চাইলে procedural style-এ লিখতে পারেন।

        চাইলে functional style-এ লিখতে পারেন।

        আবার object-oriented style-এও লিখতে পারেন।

        Web development-এ অনেকসময় event-driven style ব্যবহার হয়।

        👉 এই flexibility JavaScript-কে multi-paradigm করে তুলেছে।

        ⚡ সংক্ষেপে:
        JavaScript হলো multi-paradigm language কারণ এটি procedural, functional, object-oriented, এবং event-driven — সব style-ই সাপোর্ট করে।
 */


/** Explanation: How is JavaScript a prototype-based language? */

/** Answer: 
 * 
        * 🔹 Prototype কী?

        JavaScript-এ প্রত্যেকটি object এর সাথে আরেকটি বিশেষ object যুক্ত থাকে যাকে বলে prototype।
        👉 সেই prototype থেকে object নতুন property বা method inherit করতে পারে।

        অর্থাৎ, classical OOP languages (যেমন Java, C++) এ inheritance হয় class এর মাধ্যমে।
        কিন্তু JavaScript-এ inheritance হয় object → object এর মাধ্যমে, যাকে বলে prototype-based inheritance।

        🔹 উদাহরণ ১: Simple Prototype
        let person = {
        greet: function() {
            console.log("Hello!");
        }
        };

        let student = Object.create(person);
        student.study = function() {
        console.log("I am studying");
        };

        student.greet(); // Hello!  <-- inherited from prototype (person)
        student.study(); // I am studying


        👉 এখানে

        student object তৈরি হয়েছে person কে prototype বানিয়ে।

        তাই student এ greet() ডিফাইন করা না থাকলেও, সে তার prototype (person) থেকে পেয়ে যাচ্ছে।

        🔹 Prototype Chain

        JavaScript-এ object lookup হয় এইভাবে:

        প্রথমে চাওয়া property/method নিজ object-এ খুঁজবে।

        না পেলে prototype object-এ খুঁজবে।

        না পেলে আবার তার prototype-এ খুঁজবে।
        👉 একে বলে prototype chain।

        console.log(student.toString());


        এখানে toString() student এ নেই, person এ-ও নেই → তাই Object.prototype থেকে পাওয়া যাচ্ছে।

        🔹 উদাহরণ ২: Function Constructor + Prototype
        function Person(name) {
        this.name = name;
        }

        Person.prototype.sayHello = function() {
        console.log(`Hello, I am ${this.name}`);
        };

        let p1 = new Person("Ahkamul");
        let p2 = new Person("Rahim");

        p1.sayHello(); // Hello, I am Ahkamul
        p2.sayHello(); // Hello, I am Rahim


        👉 এখানে

        Person function constructor থেকে object তৈরি হয়েছে।

        sayHello সরাসরি object এ নেই, বরং Person.prototype এ আছে।

        তাই p1 এবং p2 উভয়েই সেই prototype থেকে method শেয়ার করছে।

        🔹 উদাহরণ ৩: Class (Syntactic Sugar for Prototype)

        ES6 থেকে আমরা class syntax ব্যবহার করতে পারি। কিন্তু ভেতরে সবকিছুই prototype ভিত্তিক।

        class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log(`Hello, I am ${this.name}`);
        }
        }

        let p = new Person("Lima");
        p.sayHello(); // Hello, I am Lima


        👉 যদিও আমরা class লিখেছি, ভেতরে আসলে এটা Person.prototype.sayHello এর মতো করেই কাজ করছে।

        🔹 কেন JavaScript Prototype-based Language?

        Inheritance হয় object থেকে object (class নয়)।

        প্রত্যেক object-এর সাথে prototype যুক্ত থাকে।

        Property/method না পেলে search হয় prototype chain ধরে।

        ES6 class syntax আসলেও, ভেতরে আসল inheritance এখনও prototype-এর ওপর নির্ভরশীল।

        ⚡ সংক্ষেপে:
        JavaScript হলো prototype-based language কারণ এটি inheritance করার জন্য class নয়, বরং prototype (object-to-object link) ব্যবহার করে।
 */



/** Problem 1 from Page # 312: How does JavaScript run codes? */

/** Answer: 
 * 
        * 🔹 Step by Step Execution Process

        JavaScript কোড browser (যেমন Chrome-এর V8 engine) বা runtime (যেমন Node.js) এর ভেতরেই execute হয়।
        একটা কোড রান হওয়ার সময় প্রধানত ৪টা ধাপে কাজ হয়:

        1. Parsing (কোড পড়া ও বিশ্লেষণ)

        JS engine সোর্স কোডকে token এ ভেঙে নেয়।

        তারপর সেগুলো থেকে Abstract Syntax Tree (AST) বানায়।
        👉 এটা হলো কোডের একটি গঠনমূলক representation।

        2. Compilation (JIT Compiler)

        Engine AST থেকে bytecode বানায়।

        Execution-এর সময় hot code (যে কোড বারবার চলে) detect করে সেটাকে Just-In-Time (JIT) Compiler machine code এ রূপান্তর করে।
        👉 এর ফলে কোড অনেক দ্রুত চলে।

        3. Execution Context তৈরি

        প্রত্যেকবার কোনো script/function রান হলে engine একটা Execution Context বানায়।

        Execution Context এ থাকে:

        Variable Environment → variables, functions কোথায় stored থাকবে।

        Lexical Environment → scope chain / nested function context।

        this binding।

        👉 শুরুতে একটা Global Execution Context তৈরি হয়, তারপর function call হলে নতুন context stack-এ ঢোকে।

        4. Call Stack দিয়ে চালানো

        JavaScript একটা Single-Threaded Language।

        মানে একবারে একটা কাজই করতে পারে।

        সব কাজ রাখা হয় একটা data structure-এ যাকে বলে Call Stack।

        যখন function call হয়, সেটা stack-এর উপরে push হয়। কাজ শেষ হলে stack থেকে pop হয়।

        🔹 Example Walkthrough
        console.log("Start");

        function greet(name) {
        console.log("Hello " + name);
        }

        greet("Ahkamul");

        console.log("End");


        👉 Execution Flow:

        Global Execution Context তৈরি হলো।

        console.log("Start") stack এ গেল → print করল → pop হয়ে গেল।

        greet("Ahkamul") call হলো → নতুন execution context তৈরি হলো → stack এ push হলো।

        ভিতরে গিয়ে "Hello Ahkamul" print করল।

        function শেষ → context pop হয়ে গেল।

        আবার console.log("End") stack এ গেল → print করল → pop হলো।

        Stack empty → program শেষ।

        🔹 Asynchronous Code কিভাবে চলে? (Event Loop)

        JavaScript single-threaded হলেও asynchronous কাজ করতে পারে (setTimeout, fetch ইত্যাদি)।
        👉 এর পেছনে Event Loop এবং Callback Queue কাজ করে।

        Flow:

        Long running task (যেমন setTimeout) ব্রাউজারের Web API-তে চলে যায়।

        শেষ হলে তার callback callback queue তে আসে।

        Event loop call stack খালি হলে queue থেকে callback নিয়ে আসে।

        ফলে asynchronous কাজও single-threaded model এ handle হয়।

        🔹 সংক্ষেপে:

        JavaScript কোড চালানোর ধাপগুলো হলো –

        Parsing → কোড পড়া।

        Compilation (JIT) → bytecode/machine code এ রূপান্তর।

        Execution Context তৈরি → variables, scope ইত্যাদি সেট করা।

        Call Stack দিয়ে রান → synchronous কাজগুলো stack এ push/pop হয়।

        Event Loop + Callback Queue → asynchronous কাজ manage করে।
 */


/** Problem 2 from Page # 312: What is JavaScript? */

/** Answer: 
 * 
        * 🔹 JavaScript কী?

        JavaScript (JS) হলো একটি high-level, interpreted, JIT-compiled, multi-paradigm programming language যেটা মূলত ওয়েব ব্রাউজারে চলার জন্য তৈরি হয়েছিল।

        👉 এটি ব্যবহার করে আমরা ওয়েবসাইটকে interactive, dynamic এবং responsive করতে পারি।

        🔹 মূল বৈশিষ্ট্যসমূহ

        Client-Side Language (Browser এ চলে)

        শুরুতে JavaScript তৈরি হয়েছিল শুধু ওয়েব ব্রাউজারে client-side scripting এর জন্য।

        এখন Node.js এর কারণে এটা server-side এও চলে।

        High-Level Language

        প্রোগ্রামারের জন্য লেখা সহজ।

        মেমোরি ম্যানেজমেন্ট বা লো-লেভেল কাজ করতে হয় না।

        Dynamically Typed

        Variable ডিক্লেয়ার করার সময় ডাটা টাইপ আলাদা করে দিতে হয় না।

        let x = 5;       // number
        x = "Hello JS";  // string


        Single-Threaded + Asynchronous

        JavaScript একসাথে একটিমাত্র কাজ করতে পারে (single-threaded)।

        তবে asynchronous programming (Event Loop, Callback, Promises, async/await) এর মাধ্যমে non-blocking কাজ করতে পারে।

        Prototype-Based & Object-Oriented

        JS-এ inheritance হয় prototype chain এর মাধ্যমে।

        Class syntax থাকলেও ভেতরে সবই prototype।

        Multi-Paradigm Language

        JavaScript দিয়ে আপনি লিখতে পারবেন —

        Procedural কোড

        Object-Oriented কোড

        Functional Programming স্টাইল

        Interpreted + JIT Compiled

        Engine কোডকে আগে parse করে interpreter এর মতো চালায়।

        বারবার চলা কোডকে JIT Compiler দিয়ে machine code এ রূপান্তর করে → ফলে দ্রুত চলে।

        🔹 কোথায় কোথায় JavaScript ব্যবহার হয়?

        Web Development (Frontend)

        Browser এ ওয়েবসাইটকে dynamic করা।

        Framework: React, Angular, Vue.

        Web Development (Backend)

        Node.js ব্যবহার করে server-side কাজ।

        Framework: Express.js, NestJS.

        Mobile App Development

        React Native, Ionic ইত্যাদি দিয়ে mobile apps তৈরি।

        Desktop App Development

        Electron.js দিয়ে cross-platform desktop app (যেমন VS Code, Slack)।

        Game Development

        Phaser.js, Three.js দিয়ে browser games।

        Machine Learning & Data Science

        TensorFlow.js, Brain.js ইত্যাদি দিয়ে।

        🔹 সহজ উদাহরণ
        // Variable এবং Function
        let name = "Ahkamul";

        function greet(user) {
        console.log("Hello, " + user + "!");
        }

        greet(name); 
        // Output: Hello, Ahkamul!


        👉 এই ছোট্ট কোড দিয়ে বোঝা যাচ্ছে JavaScript খুব সহজে ব্যবহার করা যায়।

        ⚡ সংক্ষেপে:
        JavaScript হলো ওয়েবের programming language।
        এটা দিয়ে browser, server, mobile app, desktop app এমনকি AI project-ও তৈরি করা যায়।
        আজকের দিনে JavaScript ছাড়া ওয়েব কল্পনা করা যায় না।
 */


/** Problem 3 from Page # 312: Please write a flowchart to understand JIT compiled process in JavaScript: */

/** Answer: 
 * 
        * JavaScript Engine (যেমন Chrome-এর V8) এর ভেতরে JIT (Just-In-Time) Compilation process বোঝার জন্য একটা Flowchart বানানো যাক।

        🔹 Flowchart (Text-Based Representation)
                ┌────────────────────┐
                │   JavaScript Code  │
                └─────────┬──────────┘
                        │
                        ▼
                ┌────────────────────┐
                │   Parsing          │
                │ (AST তৈরি হয়)      │
                └─────────┬──────────┘
                        │
                        ▼
                ┌────────────────────┐
                │   Interpreter      │
                │ Bytecode রান করে  │
                └─────────┬──────────┘
                        │
                Hot code?│
                (বারবার রান হচ্ছে?) 
                ┌─────────┴──────────┐
                │                    │
                ▼                    ▼
        ┌────────────────────┐   ┌───────────────────────────┐
        │   না (No)          │   │   হ্যাঁ (Yes)             │
        │ Bytecode দিয়েই রান │   │   JIT Compiler এ পাঠানো   │
        └─────────┬──────────┘   └───────────┬───────────────┘
                │                          │
                ▼                          ▼
        ┌────────────────────┐     ┌───────────────────────────┐
        │  Output Generate   │     │ Machine Code এ রূপান্তর  │
        └─────────┬──────────┘     └───────────┬───────────────┘
                │                          │
                ▼                          ▼
            ┌───────────────────────────┐
            │ Machine Code থেকে Output │
            └───────────────────────────┘

        🔹 ধাপে ধাপে ব্যাখ্যা

        JavaScript Code → Engine কোড নেয়।

        Parsing → Tokenize করে AST (Abstract Syntax Tree) বানায়।

        Interpreter → AST থেকে Bytecode বানিয়ে চালায়।

        Hot Code Detection → কোন function/loop বারবার চলছে সেটা detect করে।

        JIT Compiler → Hot code কে machine code এ রূপান্তর করে।

        Execution → পরে সেই machine code থেকে output আসে (দ্রুত performance)।
 */ 


/** Problem 4 from Page # 312: How are memory management and garbage collection process worked in JavaScript? */

/** Answer: 
 * 
        * JavaScript-এ memory management এবং garbage collection হলো একেবারে ভিতরের (internal) কাজ, যেটা programmer সরাসরি handle করতে পারে না। কিন্তু conceptally কিভাবে হয় সেটা বুঝে রাখা খুব জরুরি।

        🔹 Memory Management in JavaScript

        JavaScript একটি high-level language → তাই memory allocation/deallocation স্বয়ংক্রিয়ভাবে engine (যেমন V8) handle করে।

        1. Memory Allocation (মেমোরি বরাদ্দ)

        যখন আমরা variable, object, function ইত্যাদি declare করি, তখন JavaScript Engine memory allocate করে:

        let num = 10;             // primitive (stack memory)
        let person = {name: "A"}; // object (heap memory)


        Primitive Values (number, string, boolean, null, undefined, symbol, bigint)
        → সাধারণত stack memory তে রাখা হয়।

        Objects, Arrays, Functions
        → heap memory তে stored হয়, কারণ এগুলো dynamic size এর হতে পারে।

        2. Memory Usage

        যখন কোনো function call হয়, তখন তার জন্য একটা execution context এবং stack frame তৈরি হয়।

        Function শেষ হলে stack থেকে pop হয়ে যায়।

        কিন্তু heap এ তৈরি object গুলো তখনও থাকতে পারে (যদি reference থেকে যায়)।

        🔹 Garbage Collection in JavaScript

        Garbage collection মানে হলো —
        যে memory আর কোনো reference দ্বারা ব্যবহার হচ্ছে না, সেটাকে ফাঁকা করে দেওয়া।

        JavaScript-এ garbage collector স্বয়ংক্রিয়ভাবে কাজ করে → অর্থাৎ unused memory free করে দেয়।

        ✅ Garbage Collection Algorithm

        সবচেয়ে বেশি ব্যবহৃত technique হলো Mark-and-Sweep Algorithm।

        ধাপগুলো:

        Roots (Global objects যেমন window, globalThis) থেকে শুরু করা হয়।

        Garbage Collector mark করে কোন কোন object এখনো reference দ্বারা accessible।

        যেগুলো accessible নয়, সেগুলো sweep করে (অর্থাৎ memory free করে)।

        🔹 Example 1: Simple Reference
        let person = {
        name: "Ahkamul"
        };

        // এখন person object heap এ আছে
        person = null; // reference কেটে গেছে
        // ✅ Garbage Collector এটাকে sweep করে memory free করবে

        🔹 Example 2: Circular Reference Problem (Automatically handled in JS)
        function createCycle() {
        let obj1 = {};
        let obj2 = {};

        obj1.ref = obj2;
        obj2.ref = obj1;
        return obj1;
        }

        let cycle = createCycle();
        cycle = null;
        // ✅ যদিও obj1 এবং obj2 একে অপরকে reference করছে,
        // তবুও global থেকে আর কোনো reference নেই → তাই garbage collector sweep করবে।

        🔹 Summary

        Memory Allocation

        Primitive → stack

        Object/Array/Function → heap

        Garbage Collection

        JavaScript automatic memory management করে।

        Unreachable object detect করে remove করে।

        প্রধানত Mark-and-Sweep algorithm ব্যবহার হয়।

        ⚡ সংক্ষেপে:
        JavaScript programmer-কে memory manage করতে হয় না → engine নিজে থেকেই allocate করে এবং garbage collection এর মাধ্যমে free করে। তবে reference ধরে রাখলে (memory leak) সমস্যা হতে পারে।
 */