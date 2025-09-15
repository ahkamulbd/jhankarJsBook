// console.log (this);

/** =================== this in the method of Object ===================== */

// const palyer = {
//     name: 'Sakib',
//     score: 100,
//     showScore () {
//         console.log (this.score);
//     }
// }
// console.log (palyer.showScore ());
// palyer.showScore ();

/** ======================= this in the Class =========================== */

// class Player {
//     constructor (name, level) {
//         this.name = name;
//         this.level = level;
//     }
//     showDetails () {
//         console.log (this.name);
//         console.log (this.level);
//     }
// }
// const gamer = new Player ('Zak', 5);
// gamer.showDetails ();


/** ================== this in the normal function =============================== */

// function doSomething (number) {
//     console.log (this);
// }
// doSomething (3);


/** ==================== this in Constructor function ============================ */

// function Person (name) {
//     this.name = name;
// }
// const user = new Person ('Ayan');
// // console.log (user);
// // console.log (user.name);

/** ================ this in Event Listener ============================== */

// document.getElementById ('click-btn').addEventListener ('click', () => {
//     // console.log (this);
// })

/** ==================== this in Object method of Arrow Fucntion ================ */

// const person1 = {
//     name: 'John',
//     greet: function (){
//         return `Hello, I am ${this.name}`;
//     }
// }
// console.log (person1.greet ());

// const person2 = {
//     name: 'John',
//     greet: () => {
//         return `Hello, I am ${this.name}`;
//     }
// }
// console.log (person2.greet ());

/** ====================== this in 'use strict' mode =================== */

// "use strict";
// function test () {
//     console.log (this);
// }
// test ();

/** Problem 1 from Page # 379: What is the window object in browser? */

/** 
 * Answer:
 * 
        * Browser এ যখন আপনি কোনো ওয়েবপেজ ওপেন করেন, তখন সেই পুরো ব্রাউজার উইন্ডো (tab সহ) কে JavaScript একটা বিশেষ অবজেক্ট দিয়ে রিপ্রেজেন্ট করে। এই অবজেক্টটার নাম হলো window object।

        🔹 সহজভাবে বললে:

        window হচ্ছে Browser এর global object।

        অর্থাৎ আপনি যেকোনো ভেরিয়েবল বা ফাংশন গ্লোবালি ডিক্লেয়ার করলে সেটা আসলে window অবজেক্টের প্রপার্টি হিসেবে সেভ হয়ে যায়।

        🔹 উদাহরণ:
        console.log(window); 


        👉 এটা দিলে আপনি পুরো window অবজেক্টের সব property আর method দেখতে পারবেন।

        var name = "Ahkamul";
        console.log(window.name);   // Ahkamul

        🔹 window object এর কাজ কী কী?

        window এর ভেতরে প্রচুর বিল্ট-ইন property আর method থাকে যেগুলো দিয়ে আমরা browser control করতে পারি। যেমনঃ

        Document control:

        window.document → আপনার HTML ডকুমেন্ট অ্যাক্সেস করা যায়।

        Alert, Confirm, Prompt:

        window.alert("Hello");

        window.confirm("Are you sure?");

        window.prompt("Enter your name:");

        Timeout & Interval:

        window.setTimeout(function(){...}, 2000);

        window.setInterval(function(){...}, 1000);

        Browser Info:

        window.location → current URL

        window.navigator → browser সম্পর্কিত ইনফো

        window.history → back/forward history

        🔹 মনে রাখবেন:

        JavaScript এ সবচেয়ে বড় অবজেক্ট হলো window।

        আর window এর ভেতরেই document, console, localStorage, alert ইত্যাদি থাকে।

        👉 মানে দাঁড়ালো, Browser এর সবকিছু window object এর মধ্যে গ্লোবালি ম্যানেজ হয়।
 */

/** Problem 2 from Page # 379: What will be the value of this if it is run as console.log (this) in the browser?  */

console.log (this); // Output - window

/** 
 * Answer:
 * 
       * 🔹 যখন আপনি Browser Console এ লিখবেনঃ
       console.log(this);


       👉 তখন this আসলে global object কে নির্দেশ করবে।

       Browser এ global object হলো window object।

       🔹 মানে দাঁড়ালো:

       Browser এ → this === window ✅

       তাই console এ আউটপুট হবে পুরো window object।

       🔹 উদাহরণ:
       console.log(this === window);  // true

       🔹 তবে খেয়াল রাখবেন:

       this এর মান কোথায় ব্যবহার করছেন তার উপর নির্ভর করে পরিবর্তিত হয়ঃ

       গ্লোবাল কনটেক্সটে (script এর বাইরে):

       this → window

       ফাংশনের ভেতরে (normal function):

       non-strict mode এ → window

       strict mode এ → undefined

       object method এর ভেতরে:

       this → ওই object

       arrow function এর ভেতরে:

       this → surrounding lexical scope এর this

       👉 তাই আপনার প্রশ্ন অনুযায়ী,
       console.log(this) ব্রাউজারে চালালে আউটপুট হবে window object।
 */



/** Problem 3 from Page # 379: What will be the value of this, if object method is declared in normal function and arrow function?  */

/**
 * Answer:
 * 
       * this এর ভ্যালু object method এ আলাদা হয় depending on আপনি normal function নাকি arrow function ব্যবহার করেছেন।

       ১️⃣ Object Method এ Normal Function
       const person = {
       name: "Ahkamul",
       greet: function () {
       console.log(this.name);
       }
       };

       person.greet();   // "Ahkamul"


       👉 এখানে greet হলো normal function method।

       this এখানে person object কে নির্দেশ করছে।

       তাই আউটপুট হবে "Ahkamul" ✅

       ২️⃣ Object Method এ Arrow Function
       const person = {
       name: "Ahkamul",
       greet: () => {
       console.log(this.name);
       }
       };

       person.greet();   // undefined


       👉 এখানে greet হলো arrow function method।

       Arrow function এর নিজস্ব this নেই।

       এটা surrounding lexical scope এর this নেয়।

       এই কোডে surrounding scope হলো global scope, যেখানে this হলো window।

       window.name সাধারণত খালি থাকে (যদি সেট না করা থাকে), তাই আউটপুট হবে undefined।

       🔑 সংক্ষেপে তুলনা
       Function Type	this এর মান
       Normal Function	যেই object থেকে কল করা হয়েছে, সেই object
       Arrow Function	Surrounding lexical scope এর this (object নয়)

       👉 তাই object method declare করার জন্য সবসময় normal function ব্যবহার করা উচিত।
       আর arrow function সাধারণত callback বা inner function এর জন্য ভালো কাজ করে।
 */