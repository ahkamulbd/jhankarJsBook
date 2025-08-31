// const orderFood = new Promise ((resolve, reject) => {
//     // const foodReady = true;
//     const foodReady = false;

//     if (foodReady) {
//         resolve ('Food is ready');
//     }
//     // if (foodReady === false) {
//     //     resolve ('Food is ready');
//     // }
//     else {
//         reject ('Food can not be delivered');
//     }
// });

// orderFood 
//     .then ((message) => {
//         console.log (message);
//     })
//     .catch ((error) => {
//         console.log (error);
//     })


/** Another Example from Page # 321 */

// const getUsers = new Promise ((resolve, reject) => {
//     // const usersAvailable = true;
//     const usersAvailable = false;
//     const users = ['John', 'Alice', 'Bob', 'Chalie'];

//     if (usersAvailable) {
//         resolve (users);
//     }
//     reject (`No users data available`);
// });

// getUsers 
//     .then (names => {
//         console.log (names);
//     })
//     .catch (error => {
//         console.log (error);
//     });
    

/** Self made example:  */

// const addNumbers = new Promise ((resolve, reject) => {
//     const num1 = 10;
//     const num2 = 12;
//     const sum = num1 + num2;

//     if (sum > 25) {
//         resolve (sum);
//     }
//     reject (`both number should be >= 15`);
// })

// addNumbers 
//     .then (result => {
//         console.log (result);
//     })
//     .catch (error => {
//         console.log (error);
//     })

/** Example of all Promise from Page # 322 */

// const moneyRequest = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve (`Request submitted`);
//     }, 2000);
// })
// const transferMoney = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve (`Money transfered`);
//     }, 2000);
// })
// const payFee = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve (`Fee paid`);
//     }, 1500);
// })

// Promise.all ([moneyRequest, transferMoney, payFee])
//     .then (results => {
//         console.log (results);
//     })
//     .catch (error => {
//         console.log (error);
//     })


/** Problem 1 from Page # 322 */

// const userNames = new Promise ((resolve, reject) => {
//     // const names = ['Ami', 'Ark', 'Juno Buri', 'Juhain', 'Juhol'];
//     const names = ['Ami', 'Ark', 'Juno Buri', 'Juhain'];
//     const namesLength = names.length;

//     if (namesLength >= 5) {
//         return resolve (names);
//     }
//     else {
//         reject (`Some names are yet to be included`);
//     }
// })

// userNames 
//     .then ((result) => console.log (result))
//     .catch ((error) => console.log (error))
    
/** Problem 2 from Page # 322 */

// const paymentProcess = new Promise ((yes, no) => {
//     // let amount = 5000;
//     let amount = 0;

//     if (amount > 0) {
//         return yes (amount);
//     }
//     else {
//         return no (`No amount is in the account`);
//     }
// })

// paymentProcess
//     .then ((result) => console.log (result))
//     .catch ((error) => console.log (error))


/** Problem 3 from Page # 322 */

// const sendEmail = new Promise ((resolve, reject) => {
//     const validEmails = ['ali@gmail.com', 'bali@gmail.com', 'cali@gmail.com', 'dali@gmail.com', 'fali@gmail.com'];

//     if (validEmails.includes ('cali@gmail.com')){
//         return resolve (`Email from Nigerian prince`);
//     }
//     else {
//         return reject (`Lets Dance in the spam folder`);
//     }
// })

// sendEmail 
//     .then ((result) => console.log (result))
//     .catch ((error) => console.log (error))

/** Correct codes according to the problem:  */

function sendEmail(email) {
    const validEmails = ['ali@gmail.com', 'bali@gmail.com', 'cali@gmail.com', 'dali@gmail.com', 'fali@gmail.com'];

    return new Promise((resolve, reject) => {
        if (validEmails.includes(email)) {
            resolve("Email from Nigerian prince");
        } else {
            reject("Lets Dance in the spam folder");
        }
    });
}

// Example calls:
// sendEmail("cali@gmail.com")
//     .then(result => console.log(result))   // ✅ Email from Nigerian prince
//     .catch(error => console.log(error));

sendEmail("unknown@gmail.com")
    .then(result => console.log(result))
    .catch(error => console.log(error));   // ❌ Lets Dance in the spam folder
