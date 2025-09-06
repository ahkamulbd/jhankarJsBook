/** Problem 1 from Page # 343 */

const obj1 = {
    id: 1, 
    name: 'mukta',
    address: 'mirpur'
}
// console.log (obj1.address);

/** Problem 2 from Page # 343 */

const library = {
    name: 'city library',
    books: [
        {
            id: 1,
            title: 'JavaScript Basics', 
            price: 300
        },
        {
            id: 2,
            title: 'Python Essentials', 
            price: 500
        },
    ]
}
// console.log (library.books [1].price);

/** Problem 3 from Page # 343 */

const school = {
    name: 'Green School',
    students: [
        {
            id: 1,
            name: 'Samiha'
        },
        {
            id: 2,
            name: 'Kamal'
        },
    ]
}
// console.log (school.students [1].name);

/** Problem 4 from Page # 343 */

const shop = {
    items: [
        {
            name: 'pen',
            stock: 100
        },
        {
            name: 'notebook',
            stock: 50
        }
    ]
}
// console.log (shop.items [1].stock);

/** Problem 5 from Page # 343 */

const movie = {
    title: 'Inception',
    director: {
        name: 'Nolan',
        age: 50
    },
    rating: 8.8
}
// console.log (movie.director.name);

/** Problem 6 from Page # 343 */

const game = {
    name: 'football',
    players: [
        {
            id: 1,
            name: 'Messi'
        },
        {
            id: 2,
            name: 'Ronaldo'
        },
    ]
}
// console.log (game.players [0].name);

/** Problem 7 from Page # 343 */

const vehicle = {
    type: 'car',
    features: {
        color: 'red',
        brand: {
            name: 'Toyota',
            model: 'Corolla'
        }
    }
}
// console.log (vehicle.features.brand.name);

/** ===== Optional Chaining: ============ */

const user = {
    name: 'Rahul',
    address: {
        city: 'Dhaka'
    }
}
// console.log (user?.address?.city);
// console.log (user?.profile?.email);
// console.log (user.profile.email); // TypeError

/** ================ Nullish Coalescing Operator (??) ========================== */

    /** Nullish Coalescing is a logical operator which is used to compare two values with null and undefined. If left one is null or undefined, it will print right one; otherwise, left one will be printed. But if left one is 0 or falsy value, it will print o or falsy value.  
     * 
*/

/** 
         * 🔹 Nullish Coalescing Operator (??) কি?

        ?? হলো জাভাস্ক্রিপ্টের একটি লজিক্যাল অপারেটর যা null অথবা undefined ভ্যালুর সাথে কাজ করার জন্য ব্যবহার করা হয়।

        👉 সহজ ভাষায়:

        যদি বাম পাশে থাকা ভ্যালুটি null বা undefined হয়, তাহলে ডান পাশের ভ্যালুটি রিটার্ন করবে।

        অন্যথায় বাম পাশের ভ্যালুটি রিটার্ন করবে।

        🔹 সিনট্যাক্স:
        let result = value1 ?? value2;


        👉 মানে হলো:

        যদি value1 null বা undefined না হয়, তাহলে result = value1।

        যদি value1 null বা undefined হয়, তাহলে result = value2।

        🔹 উদাহরণ:
        (১) বেসিক ব্যবহার:
        let userName = null;
        let defaultName = "Guest";

        let finalName = userName ?? defaultName;
        console.log(finalName); // Output: "Guest"


        🔹 এখানে userName = null, তাই defaultName ("Guest") ব্যবহার হয়েছে।

        (২) undefined এর ক্ষেত্রে:
        let userName;
        let finalName = userName ?? "Guest";
        console.log(finalName); // Output: "Guest"

        (৩) কিন্তু অন্য falsy value (যেমন 0, false, '') থাকলে:
        let count = 0;
        let finalCount = count ?? 5;

        console.log(finalCount); // Output: 0


        🔹 এখানে count = 0 হলো falsy ভ্যালু, কিন্তু null/undefined নয়। তাই ?? অপারেটর 0 কেই রিটার্ন করেছে, 5 নেয়নি।

        🔹 Nullish Coalescing (??) বনাম OR (||) পার্থক্য

        এখানে অনেকেই গুলিয়ে ফেলে।

        || → falsy values (যেমন: 0, false, '', null, undefined) সবগুলোকেই ধরবে।

        ?? → কেবল null আর undefined কেই ধরবে।

        উদাহরণ:
        let count = 0;

        console.log(count || 5); // Output: 5  (কারণ 0 হলো falsy)
        console.log(count ?? 5); // Output: 0  (কারণ 0 null বা undefined নয়)

        🔹 Nested Example:
        let user = {
        profile: {
            name: null,
            age: 25
        }
        };

        let userName = user.profile.name ?? "Anonymous";
        console.log(userName); // Output: "Anonymous"


        ✅ সারসংক্ষেপ:

        ?? শুধু তখন fallback ভ্যালু ব্যবহার করে, যখন মূল ভ্যালুটি null বা undefined হয়।

        || ব্যবহার করলে সব falsy ভ্যালু (0, false, '') কেই null/undefined এর মত ধরে নেয়।

        তাই ডিফল্ট ভ্যালু সেট করার জন্য ?? বেশি সঠিক, বিশেষ করে যখন 0, false, বা '' একটি বৈধ ভ্যালু।
 */


/** Problem 1 from Page # 347 */

const x = null;
// console.log (x ?? 75);

/** Problem 2 from Page # 347: একটা product অবজেক্টে stock প্রোপার্টি নাই; Nullish Coalescing দিয়ে stock-এর ডিফল্ট মান 0 সেট করা। */

let product = {};
product.stock ??= 0;
// product.stock = 0;

// console.log(product.stock); // Output: 0


/** Problem 3 from Page # 347: productDetails অবজেক্টে discount ভ্যারিয়েবলের মান falsy কিছু হলে সেটার মান 10 সেট করার কোড।  */

let productDetails = { discount: null };

if (!productDetails.discount) {
  productDetails.discount = 10;
}

// console.log(productDetails.discount); // Output: 10

/** Problem 4 from Page # 347: Optional Chaining দিয়ে vehicle অবজেক্টে engine নামের প্রোপার্টি চেক কর এবং ডিফল্ট মান 'Engine info missing' যোগ কর। */

let vehicle4 = {};

let engineInfo = vehicle4?.engine ?? "Engine info missing";

// console.log(engineInfo); // Output: "Engine info missing"


/** Problem 5 from Page # 347: Optional Chaining দিয়ে restaurant অবজেক্টে menu নামের প্রোপার্টি রিড কর এবং সেটা না থাকলে 'Menu not available' রিটার্ন কর। */

let restaurant = {};

let menuInfo = restaurant?.menu ?? "Menu not available";

// console.log(menuInfo); // Output: "Menu not available"

/** Problem 6 from Page # 347: profile অবজেক্টে social অবজেক্টে twitter নামের প্রোপার্টি চেক কর। Optional Chaining দিয়ে twitter না থাকলে 'Twitter handle not available' প্রিন্ট কর। */

let profile = {
  social: {
    // twitter: "@user123"
  }
};

let twitterHandle = profile?.social?.twitter ?? "Twitter handle not available";

// console.log(twitterHandle); // Output: "Twitter handle not available"
// console.log (typeof profile.social.twitter);

/** ===================== Pre and Post Increment ================== */

// let a = 5;
// let b = a++;
// let c = ++a;
// console.log (a);


/** Problem 1 from Page # 350 */

let a = 59;
// let b = a++;
// console.log (a, b);

let b = ++a;
// console.log (a, b);

/** Problem 2 from Page # 350 */

let orange = 100;
orange /= 15;
// console.log (orange);
// console.log (orange.toFixed (2));
// console.log (Math.round (orange));

/** Problem 3 from Page # 350 */

let mango = 20;
mango &&= 10;
// console.log (mango);

/** Problem 4 from Page # 350 */

let bananas = 50;
bananas *= 4;
// console.log (bananas);

/** Problem 5 from Page # 350 */

let grapes = 19;
grapes ||= 91;
// console.log (grapes);

/** Problem 6 from Page # 350 */

let apples = 50;
apples -= 10;
// console.log (apples);

/** Problem 7 from Page # 350 */

let price = undefined;
price ||= 90;
// console.log (price);

/** Problem 8 from Page # 350 */

let tomato = 0;
mango &&= 5;
// console.log (tomato);

/** Problem 9 from Page # 350 */

let apples9 = 15;
apples9 %= 6;
console.log (apples9);