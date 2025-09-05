/** Example from Page # 337 */

fetch (`https://jsonplaceholder.typicode.com/users/1`)
    .then (response => response.json ())
    .then (data => {
        // console.log (data.name, data.username);
    })
    .catch (error => {
        // console.error (error);
    });
    

/** Example from Page # 338 */

const fetchUserData = async () => {
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/users/1`);
        // const response = await fetch (`https://jsonplaceholder.typicode.com/users/11111`);
        const data = await response.json ();
        console.log (data.name);
        console.log (data.email);
        console.log (data.address.city);
        console.log (data.company.name);
    }
    catch (error) {
        console.log (error);
    }
}
// fetchUserData ();


/** Example from Page # 339-340 */


async function fetchData () {
    try {
        const userRes = await fetch ('user-url');
        // const userRes = await fetch (`https://jsonplaceholder.typicode.com/users/1`);
        const user = await userRes.json ();
        const postRes = await fetch (`post-url ? userId = ${user.id}`);
        const posts = await postRes.json ();

        const cmntsRes = await fetch (`c-url ? postId = ${posts[0].id}`);
        const cmnts = await cmntsRes.json ();
    }
    catch (error) {
        console.log (error)
    }
}
// fetchData ();


/** Proble 1 from Page # 340: Why does async-await used? */

/** 
 * Answer:
 * 
        * 1. The Problem: Callback Hell & Promise Chaining

        Before async-await, developers mainly used callbacks or .then() chains with Promises to handle asynchronous operations (like fetching data from an API).
        But this often made code:

        Harder to read (nested callbacks, long .then().then().catch() chains).

        Difficult to handle errors cleanly.

        2. The Solution: async-await

        async-await was introduced in ES2017 (ES8) to make asynchronous code look and behave more like synchronous code.

        async makes a function return a Promise automatically.

        await pauses execution of code until the Promise is resolved or rejected.

        This makes code cleaner, more readable, and easier to debug.

        3. Example Without async-await (Using Promises)
        fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => {
            console.log("Data:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });

        4. Example With async-await
        async function getData() {
        try {
            const response = await fetch("https://api.example.com/data");
            const data = await response.json();
            console.log("Data:", data);
        } catch (error) {
            console.error("Error:", error);
        }
        }

        getData();


        👉 Notice how the second version looks more like normal step-by-step synchronous code, even though it’s asynchronous.

        5. Why async-await is used

        ✅ Makes asynchronous code easier to read and write.

        ✅ Avoids “callback hell” and long .then() chains.

        ✅ Easier error handling (with try...catch).

        ✅ Code looks synchronous, but still runs asynchronously (non-blocking).

        ⚡ In short:
        async-await is used to simplify working with Promises and make asynchronous JavaScript code easier to read, write, and maintain.
 */


/** Problem 2 from Page # 340 */

const fetchUser = async () => {
    try {
        const res = await fetch (`https://jsonplaceholder.typicode.com/users/2`);
        const data = await res.json ();
        console.log (data);
        console.log (data.name);
        console.log (data.company.name);
        console.log (data.company.bs);
    }
    catch (error) {
        console.log (error);
    }
}
// fetchUser ();

/** Problem 3 from Page # 340: Callback hell বা Pyramid of Doom কি জিনিস? এইটা কখন হয়, আর এর সমাধান কি? */

/**
 * Answer: 
 * 
        * Callback Hell (বা Pyramid of Doom) হচ্ছে এমন একটি অবস্থা যেখানে জাভাস্ক্রিপ্টে অনেকগুলো asynchronous কাজকে একের পর এক (nested) কলব্যাক ফাংশনের ভেতরে লিখতে হয়। এর ফলে কোড অনেক গভীরে চলে যায়, দেখতে পিরামিডের মতো হয় এবং কোড পড়া, বোঝা ও মেইনটেইন করা কঠিন হয়ে যায়।

        🎯 কখন Callback Hell হয়?

        যখন একের পর এক কাজ নির্দিষ্ট ক্রমে করতে হয় এবং প্রতিটি কাজ শেষ হওয়ার পর পরবর্তী কাজ শুরু করতে হয়।
        উদাহরণস্বরূপ:

        doTask1(function(result1) {
            doTask2(result1, function(result2) {
                doTask3(result2, function(result3) {
                    doTask4(result3, function(result4) {
                        console.log("All tasks done:", result4);
                    });
                });
            });
        });


        👉 এখানে ফাংশনগুলোর ভিতরে আরেকটা ফাংশন, তার ভিতরে আবার আরেকটা ফাংশন — এইভাবে কোড ডানদিকে হেলে যায়। একে বলা হয় Pyramid of Doom।

        📌 সমস্যাগুলো

        কোড পড়তে খুব কঠিন হয়ে যায়।

        Debug করা কঠিন।

        Error handling জটিল হয়।

        Reuse বা Maintain করা কঠিন হয়ে পড়ে।

        ✅ এর সমাধান কী?

        Callback Hell থেকে বাঁচার কয়েকটি উপায় আছে:

        1. Named Functions ব্যবহার করা

        নেস্টেড অ্যানোনিমাস ফাংশনের বদলে আলাদা নাম দিয়ে ফাংশন লিখলে কোড ক্লিন থাকে।

        function handleTask1(result1) {
            doTask2(result1, handleTask2);
        }
        function handleTask2(result2) {
            doTask3(result2, handleTask3);
        }
        function handleTask3(result3) {
            console.log("All tasks done:", result3);
        }

        doTask1(handleTask1);

        2. Promises ব্যবহার করা

        Callback এর পরিবর্তে Promise ব্যবহার করলে কোড চেইন আকারে লেখা যায়।

        doTask1()
            .then(result1 => doTask2(result1))
            .then(result2 => doTask3(result2))
            .then(result3 => console.log("All tasks done:", result3))
            .catch(error => console.error(error));

        3. Async / Await ব্যবহার করা (সবচেয়ে আধুনিক ও পাঠযোগ্য সমাধান)

        Async/Await ব্যবহার করলে কোড দেখতে প্রায় synchronous এর মতো হয়।

        async function runTasks() {
            try {
                const result1 = await doTask1();
                const result2 = await doTask2(result1);
                const result3 = await doTask3(result2);
                console.log("All tasks done:", result3);
            } catch (error) {
                console.error(error);
            }
        }

        runTasks();

        🔑 সারসংক্ষেপ:

        Callback Hell = nested asynchronous callbacks → কোড জটিল হয়ে যায়।

        সমাধান = Named Functions, Promises, অথবা Async/Await।
 */


/** Problem 4 from Page # 340 */

const url4 = `https://jsonplaceholder.typicode.com/posts?userId=1`;