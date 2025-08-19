/** 
 * Problem: Booking Summary Analyzer for a Resort
 * 
    You are working as the developer for River View Resort. Guests make bookings through a system, and each booking contains data like this:

  const bookings = [
  {
    id: 1,
    guestName: "Rahim Uddin",
    roomType: "Deluxe",
    nights: 3,
    pricePerNight: 2500,
    bookedOn: "2025-08-01"
  },
  {
    id: 2,
    guestName: "Karim Hossain",
    roomType: "Standard",
    nights: 2,
    pricePerNight: 1800,
    bookedOn: "2025-08-01"
  },
  {
    id: 3,
    guestName: "Shila Akter",
    roomType: "Suite",
    nights: 5,
    pricePerNight: 4000,
    bookedOn: "2025-08-02"
  },
  // more bookings...
];

🧾 Task: 
{
  totalRevenue: 22000, // total revenue = sum of nights × pricePerNight
  bookingsPerDay: {
    "2025-08-01": 2,
    "2025-08-02": 1
  },
  mostPopularRoomType: "Deluxe", // highest number of bookings
  averageRevenuePerBooking: 7333.33 // rounded to two decimal points
}

Bonus Challenges (Optional but Great for Learning!):

1. Sort bookings by date, and within each date, by revenue (highest first).
2. Add a filter function that can extract bookings above a certain revenue threshold.
3. Display top 2 highest revenue bookings with guest names.

Concepts You'll Practice:

1. Object/array manipulation
2. reduce(), map(), filter(), sort()
3. Logic building and clean code

 */

const bookings = [
  {
    id: 1,
    guestName: "Rahim Uddin",
    roomType: "Deluxe",
    nights: 3,
    pricePerNight: 2500,
    bookedOn: "2025-08-01"
  },
  {
    id: 2,
    guestName: "Karim Hossain",
    roomType: "Standard",
    nights: 2,
    pricePerNight: 1800,
    bookedOn: "2025-08-01"
  },
  {
    id: 3,
    guestName: "Shila Akter",
    roomType: "Suite",
    nights: 5,
    pricePerNight: 4000,
    bookedOn: "2025-08-02"
  },
    {
    id: 4,
    guestName: "Karim Hossain",
    roomType: "Deluxe",
    nights: 2,
    pricePerNight: 1800,
    bookedOn: "2025-08-01"
  },
  {
    id: 5,
    guestName: "Shila Akter",
    roomType: "Suite",
    nights: 5,
    pricePerNight: 4000,
    bookedOn: "2025-08-02"
  },
  {
    id: 6,
    guestName: "Rahim Uddin",
    roomType: "Deluxe",
    nights: 3,
    pricePerNight: 2500,
    bookedOn: "2025-08-01"
  },
  {
    id: 7,
    guestName: "Rahim Uddin",
    roomType: "Deluxe",
    nights: 3,
    pricePerNight: 2500,
    bookedOn: "2025-08-01"
  },
  {
    id: 8,
    guestName: "Karim Hossain",
    roomType: "Deluxe",
    nights: 2,
    pricePerNight: 1800,
    bookedOn: "2025-08-01"
  },
];

const revenues = bookings.map ((obj) => obj.nights * obj.pricePerNight);
const totalRevenue = revenues.reduce ((revenue, totalRevenue) => (revenue + totalRevenue), 0);
console.log (totalRevenue);
