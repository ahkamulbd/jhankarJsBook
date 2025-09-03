/** API - Application Programming Interface */

// const url = `https://jsonplaceholder.typicode.com/users`;
const url = `https://jsonplaceholder.typicode.com/usersssssssssssssss`;

fetch (url)
    .then (response => response.json ())
    .then (data => showData (data))
    .catch (error => console.log (error));


const showData = tata => {
    // console.log (tata [1].id);
    // console.log (tata [0].name); 
}

/** Problem 1 from Page # 326: fetch ফাংশন থেকে রিটার্ন করা প্রমিজের মাধ্যমে response.json() কল করে, ডাটা কনভার্ট কেন করা হয়?  */

/** Answer: 
 * 
        * fetch() ফাংশন সবসময় একটি Promise রিটার্ন করে। এই Promise resolve হলে আমরা একটি Response object পাই। এখন মূল ব্যাপার হলো:

        ১. Response object আসলে কী থাকে?

        এটা কেবল সার্ভার থেকে আসা raw HTTP response ধারণ করে (header, status code, body ইত্যাদি)।

        body সাধারণত স্ট্রিং (text stream) আকারে থাকে।

        ২. কেন response.json() ব্যবহার করি?

        response.json() আসলে আরেকটা Promise রিটার্ন করে, যা response body (raw text) কে JavaScript object/array এ parse করে।

        সার্ভার যদি JSON ফরম্যাটে ডাটা পাঠায় (যেমন API থেকে), তখন সরাসরি raw টেক্সট ব্যবহার করা ঝামেলাপূর্ণ।

        তাই আমরা JSON parse করি যাতে সহজে JavaScript এ কাজ করতে পারি।

        ৩. উদাহরণ
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            console.log(response); // 👉 Raw Response object
            return response.json(); // 👉 JSON এ কনভার্ট করা
        })
        .then(data => {
            console.log(data); // 👉 JS object/array, সহজে ব্যবহারযোগ্য
        })
        .catch(error => console.error(error));


        📌 এখানে response.json() না লিখলে আমরা কেবল raw response পাবো, কিন্তু JavaScript অবজেক্ট হিসেবে ডাটা নিয়ে কাজ করতে পারবো না।

        ৪. আরেকটু ক্লিয়ারভাবে

        response.text() → body কে plain string বানায়।

        response.json() → body কে JS object/array বানায়।

        response.blob() → body কে binary data বানায় (যেমন ইমেজ ডাউনলোডে)।

        👉 সোজা কথায়:
        response.json() ব্যবহার করা হয় কারণ সার্ভার থেকে আসা ডাটা JSON format (text) এ থাকে, আর আমাদের দরকার সেটা JavaScript object আকারে।
 */


/** Problem 2 from Page # 326: fetch কেন ইউজ করা হয়?  */

/**
 * Answer
 * 
        * fetch() মূলত JavaScript এর একটি built-in function, যেটা দিয়ে আমরা HTTP request পাঠাই এবং সার্ভার থেকে ডাটা আনি বা পাঠাই।

        🔑 কেন fetch() ব্যবহার করা হয়?

        ডাটা আনার জন্য (Get request)

        কোনো API থেকে JSON ডাটা, টেক্সট, ছবি বা ফাইল আনার জন্য।

        ডাটা পাঠানোর জন্য (Post/Put/Delete request)

        সার্ভারে নতুন ডাটা পাঠাতে (যেমন ফর্ম সাবমিট করা), বা আগের ডাটা আপডেট/ডিলিট করতে।

        Modern ও সহজ সিনট্যাক্স

        আগের দিনে XMLHttpRequest (XHR) ব্যবহার করতে হতো, যেটা জটিল ছিল।

        fetch() অনেক সহজ, Promise-based, তাই asynchronous কোড লেখা সহজ।

        Asynchronous কাজ করা যায়

        fetch() promise রিটার্ন করে, তাই .then() বা async/await দিয়ে সহজে asynchronous কোড লেখা যায়।

        Flexible

        শুধু ডাটা আনা না, request header, authentication token, JSON body ইত্যাদিও পাঠানো যায়।

        📝 উদাহরণ ১: ডাটা আনা (GET request)
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())   // JSON এ কনভার্ট
        .then(data => console.log(data))     // ডাটা ব্যবহার
        .catch(error => console.error("Error:", error));

        📝 উদাহরণ ২: ডাটা পাঠানো (POST request)
        fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Hello",
            body: "This is a test post",
            userId: 1
        })
        })
        .then(response => response.json())
        .then(data => console.log("Saved:", data))
        .catch(error => console.error("Error:", error));

        👉 সোজা কথায়:

        fetch() ব্যবহার করা হয় সার্ভারের সাথে যোগাযোগ করতে (client ↔ server) —

        ডাটা আনা

        ডাটা পাঠানো

        API কল করা

        ওয়েব অ্যাপ্লিকেশনকে dynamic ও interactive করা
 */


/** Problem 3 from Page # 326: fetch আর প্রমিজের মধ্যে ডিফারেন্স কি?  */

/**
 * Answer:
 * 
        * 🔑 মূল পার্থক্য
        ১. Promise কী?

        Promise হলো JavaScript এর একটি অবজেক্ট যা asynchronous কাজ (যেমন সার্ভার থেকে ডাটা আনা, ফাইল পড়া, টাইমার ইত্যাদি) শেষ হলে success বা failure হ্যান্ডেল করতে সাহায্য করে।

        এটা কেবল একটা ধারণা/মেকানিজম asynchronous অপারেশন হ্যান্ডেল করার জন্য।

        👉 উদাহরণ:

        const myPromise = new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve("Data found!");
        } else {
            reject("Error occurred!");
        }
        });

        myPromise
        .then(result => console.log(result))
        .catch(error => console.log(error));

        ২. fetch() কী?

        fetch() হলো একটা built-in function (browser API), যেটা HTTP request পাঠাতে ব্যবহার হয়।

        fetch() যখন কল করা হয়, এটা একটা Promise রিটার্ন করে।

        তাই fetch() আসলে Promise ব্যবহার করে কাজ করে।

        👉 উদাহরণ:

        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json()) // JSON এ কনভার্ট
        .then(data => console.log(data))
        .catch(error => console.log(error));

        🆚 পার্থক্য (Comparison Table)
        বিষয়	Promise	fetch()
        কী?	একটি JavaScript object (async কাজ ম্যানেজ করার টুল)	একটি function (browser API)
        কাজ	Asynchronous কাজের success/failure হ্যান্ডেল করা	HTTP request পাঠানো ও response পাওয়া
        Relation	Base mechanism	fetch সবসময় Promise রিটার্ন করে
        ব্যবহার	Timer, file read, DB query, API call সহ যেকোনো async কাজ	শুধু নেটওয়ার্ক request/response এর জন্য
        ✅ সহজ ভাষায়:

        Promise = “অ্যাসিঙ্ক্রোনাস কাজ শেষ হলে আমি জানাবো।”

        fetch() = “আমি সার্ভারে HTTP request পাঠাবো, আর আমার কাজের ফলাফল Promise আকারে ফেরত দেবো।”
 */



/** Problem 4 & 5 from Page # 326: fetch Practice  */

/** Answer: Done in the earlier part of this file */