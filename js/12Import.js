// import {add, multiply} from './12Export.js';

// console.log (add (10, 20));
// console.log (multiply (10, 20));

// import { maxElement} from './12Export.js';

// console.log (maxElement);

// import { greaterNumber} from './12Export.js';

// const numbers = [2, 17, 100, -23, 350, 9, 21, 8, 31];

// console.log (greaterNumber (numbers));


/**
 *  Total number of bookings?
    Total revenue of the day?
    Average revenue per booking?
    Highest revenue from a single booking?
 */

const bookings = [2500, 3000, 1800, 4000, 1500];
// const [room1, room2, room3, room4, room5] = bookings;

const totalBookings = bookings.length;
console.log(`Total Number of Bookings: ${totalBookings}`);

function riverViewDailyRevenue (array) {
    let sum = 0;
    for (let element of bookings) {
        sum += element;
    }

    return sum;
}
const totalRevenue = riverViewDailyRevenue (bookings);
console.log (`Total Revenue: ${totalRevenue}`);

const averageRevenue = totalRevenue / totalBookings;
console.log (`Average Revenue: ${averageRevenue}`); 

const highestRevenue = Math.max (...bookings);
console.log (`Highest Revenue: ${highestRevenue}`);