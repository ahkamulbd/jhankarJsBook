/** ==================== do while loop =============================== */

for (let i = 1; i > 5; i++) {
    // console.log (i);
}

let count = 1;

do {
    // console.log (count);
    count++;
} while (count > 5);


/** Problem 1 from Page # 397 */

let items = 3;

do {
    // console.log (`Items: ${items}`);
    items ++;
} while (items > 5);


/** Problem 2 from Page # 398 */

let attempts = 12;

do {
    // console.log (`Items: ${attempts}`);
    attempts ++;
} while (items > 10);


/** Problem 3 from Page # 398 */

let name = 'John';
let nameLength = name.length;
// console.log (nameLength);

// do {
//     name = name + 'n';
//     console.log (name);
// } while (nameLength = 10);  // Infinite loope created 

// Correct Codes:
do {
    name = name + 'n';
    // console.log (name);
} while (name.length < 10);  


/** ======================= whitch ============================ */

// const role = 'moderator';

// switch (role) {
//     case 'admin':
//         console.log ('Full control');
//         break;
//     case 'moderator':
//         console.log ('Manage posts');
//         break;
//     case 'member':
//         console.log ('Post and comment');
//         break;
//     case 'guest':
//         console.log ('View only');
//         break;

//     default:
//         console.log ('Invalid role');    
// }


/** Problem 1 from Page # 400 */

const mobile = 'China';

// switch (mobile) {
//     case 'Apple':
//         console.log ('USA');
//         break;
//     case 'Samsung':
//         console.log ('South Korea');
//         break;
//     case 'Xiaomi':
//         console.log ('China');
//         break;
//     default:
//         console.log ('Invalid role');
// }

/** Problem 2 from Page # 400 */

const browser = 'Safari';

// switch (browser) {
//     case 'Chrome':
//         console.log ('Best for developers');
//         break;
//     case 'Brave':
//         console.log ('Privasy focused');
//         break;
//     case 'Safari':
//         console.log ('Apple users choice');
//         break;
//     default:
//         console.log ('Unsupported browser');
// }

/** Problem 3 from Page # 401 */

const paymentMethod = 'goods';

// switch (paymentMethod) {
//     case 'cash':
//         console.log ('Pay with cash');
//         break;
//     case 'credit':
//         console.log ('Pay with credit card');
//         break;
//     case 'dabit':
//         console.log ('Pay with dabit card');
//         break;
//     default:
//         console.log ('Invalid payment method');
// }

/** Problem 4 from Page # 401 */

const membership = 'silver';

// if (membership === 'free'){
//     console.log ('Access limit content');
// }
// else if (membership === 'silver') {
//     console.log ('Access most content');
// }
// else if (membership === 'gold') {
//     console.log ('Access premium content');
// }
// else if (membership === 'platinum') {
//     console.log ('Full access');
// }
// else {
//     console.log ('Invalid membership');
// }

/** Problem 5 from Page # 401 */

const orderStaus = 'delivered';

// switch (orderStaus) {
//     case 'pending':
//         console.log ('Your order is being processed');
//         break;
//     case 'shipped':
//         console.log ('Your order is on the way');
//         break;
//     case 'delivered':
//         console.log ('Your order has been delivered');
//         break;
//     case 'cancelled':
//         console.log ('Your order has been cancelled');
//         break;
//     default:
//         console.log ('Order is yet to be done');
// }

/** Problem 6 from Page # 401 */

/** Can be done */