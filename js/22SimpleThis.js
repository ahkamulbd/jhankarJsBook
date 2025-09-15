// const student = {
//     name: 'Learner',
//     getThis () {
//         console.log (this);
//     }
// }
// // student.getThis ();

// const teacher = {
//     name: 'Teacher'
// }
// teacher.getThis = student.getThis;
// teacher.getThis ();

// const freeThis = student.getThis;
// // freeThis ();


// /** Problem 1 from Page # 381 */

const laptop = {
    brand: 'dell',
    getBrand () {
        console.log (this);
        console.log (this.brand);
    }
}
// laptop.getBrand ();
// laptop.getBrand (this);

const mobile = {
    brand: 'Samsung'
}
mobile.getBrand = laptop.getBrand;
// mobile.getBrand ();

/** Problem 2 form Page # 381: How is this confirmed in JavaScript? And how is it changed in which contexts? */

/** 
 * Answer:
 * 
        * 🔹 1. কিভাবে this নির্ধারণ (confirm) হয় JavaScript-এ?

        JavaScript-এ this function কল করার সময় নির্ধারিত হয়। মানে who calls the function সেটা গুরুত্বপূর্ণ।

        ✅ কনফার্ম করার নিয়ম:

        Global Context (Browser এ)

        console.log(this);


        👉 এখানে this = window (browser এ)।

        Node.js এ হলে this = {} (empty object) অথবা global হতে পারে, execution context অনুযায়ী।

        Inside Object Method

        const obj = {
        name: "Ahkamul",
        show() {
            console.log(this);
        }
        }
        obj.show();


        👉 এখানে caller হলো obj, তাই this = obj।

        Standalone Function Call

        function demo() {
        console.log(this);
        }
        demo();


        👉 এখানে কোনো অবজেক্ট দিয়ে কল করা হয়নি, তাই non-strict mode এ this = window, strict mode এ this = undefined।

        Arrow Function

        const obj = {
        name: "Ahkamul",
        show: () => {
            console.log(this);
        }
        }
        obj.show();


        👉 Arrow function নিজের this তৈরি করে না।
        ওটা surrounding lexical scope (যেখানে function ডিফাইন করা হয়েছে) সেখানকার this ধরে রাখে।

        তাই উপরের কোডে this হবে window (না যে obj)।

        Constructor Function / Class

        function Person(name) {
        this.name = name;
        }
        const p = new Person("Ahkamul");
        console.log(p.name);


        👉 এখানে this = newly created object (p)।

        Event Listener (DOM)

        document.querySelector("button").addEventListener("click", function() {
        console.log(this);
        });


        👉 এখানে this = button (যেটাতে event ঘটেছে)।

        কিন্তু arrow function হলে:

        document.querySelector("button").addEventListener("click", () => {
        console.log(this);
        });


        👉 এখানে this = surrounding scope (সাধারণত window)।

        Explicit Binding (call, apply, bind)

        function greet() {
        console.log(this.name);
        }

        const user = { name: "Ahkamul" };
        greet.call(user);   // Ahkamul
        greet.apply(user);  // Ahkamul

        const boundGreet = greet.bind(user);
        boundGreet();       // Ahkamul


        👉 এখানে this কে জোর করে user করে দেয়া হলো।

        🔹 2. কোন কোন Context এ this পরিবর্তিত হয়?

        Caller বদলালে (student → teacher) → this বদলায়।

        Strict mode এ → this undefined হয়ে যায় যখন standalone function হয়।

        Arrow Function এ → this আর বদলায় না, surrounding lexical scope-এ fix হয়ে যায়।

        Constructor Function এ → this নতুন object নির্দেশ করে।

        call/apply/bind দিয়ে → manually this পরিবর্তন করা যায়।

        DOM Event এ → this target element নির্দেশ করে, কিন্তু arrow function ব্যবহার করলে surrounding scope নির্দেশ করে।

        🔹 সহজ মনে রাখার সূত্র

        👉 this কখনোই function-এর ভেতর “hardcoded” থাকে না।
        this সবসময় নির্ভর করে → কোন অবজেক্ট থেকে function call হলো তার উপর।
        শুধু Arrow function আর bind-এ এটা fix হয়ে যায়।
 */


/** Problem 3 from Page # 381: manager নামে একটা অবজেক্ট তৈরি কর। যার মধ্যে assignWork নামে মেথড থাকবে। সেই assignWork মেথডের ভিতরের manager-এর tasks নামক প্রোপার্টি (একটা Array), সেটাতে নতুন টাস্কের নাম যোগ করবে। এই কোড লিখে আউটপুট চেক কর। আর এই মেথডের ভিতরে this বলতে কাকে বুঝায়, সেটা মেথডের ওপরে কমেন্ট করে লিখ।   */

const manager = {
    tasks: [],

    assignWork (taskName) {
        this.tasks.push (taskName);
        // console.log (`Newly Assigned Task: ${taskName}`);
    }
}
manager.assignWork ('Planning');
manager.assignWork ('Monitoring');
manager.assignWork ('Evaluation');

// console.log (manager.tasks);

/** Explanation:
 * 
    * manager অবজেক্টের মধ্যে tasks নামে একটা array property আছে।

    assignWork মেথডের ভেতরে this.tasks.push(taskName) লেখার মানে হলো →
    👉 এখানে this = manager (কারণ manager.assignWork() থেকে ফাংশনটা কল করা হয়েছে)।

    ফলে নতুন task সেই manager.tasks array-তে যুক্ত হচ্ছে।
 */