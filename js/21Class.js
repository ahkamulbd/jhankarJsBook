/** =============== Basic Structure of Class ================== */

// class Player {
//     constructor (name, runs, wickets) {
//         this.name = name;
//         this.runs = runs;
//         this.wickets = wickets;
//     }
// }
// const sakib = new Player ('Sakib Al Hasan', 9000, 700);
// console.log (sakib);

// const ash = new Player ('Mohammad Ashraful', 10000, 230);
// console.log (ash);

/** instance of the objects formed from a class */

class FoodOrder {
    constructor (customer, food, price) {
        this.vendor = 'Panda';
        this.customer = customer;
        this.food = food;
        this.price = price;
    }
}

const sakilOrder = new FoodOrder ("Sakil", 'Pizza', 300);
// console.log (sakilOrder);
// console.log (sakilOrder instanceof FoodOrder);


/** Problem 1 from Page # 356: What is the difference between Class and object */

/**
 * Answer: 
 * 
        * 🔹 Class in JavaScript

        A class is a blueprint or template for creating objects.

        Introduced in ES6 (2015) as syntactic sugar over JavaScript’s prototype-based inheritance.

        Defines the properties (fields) and methods (functions) that its objects will have.

        👉 Think of a class like a plan for a house.

        🔹 Object in JavaScript

        An object is an actual instance created from a class.

        It represents a real-world entity with specific values for properties.

        Objects are created using the new keyword with a class.

        👉 Think of an object like the actual house built from the plan.

        🔑 Main Differences
        Feature	Class	Object
        Definition	Blueprint/template for creating objects	Instance of a class
        Existence	Exists once (definition only)	Can exist many times (multiple instances)
        Purpose	Defines properties and methods	Stores actual values and behaviors
        Example	class Car {}	const car1 = new Car("Toyota")

        ✅ In short:

        Class → What to create (design/blueprint)

        Object → The thing created (real entity/instance)
 */

/** Problem 2 from Page # 356: What is meant by Class instance? */

/** Answer: 
 * 
 * The objects created from a class are called the instance of that Class. Instance can be checked with 'instanceof' i.e. whether any instance has been created from a Class can be checked with 'instanceof' like the checking typeof the variables.
 */

/** Problem 3 from Page # 356 */

class Vehicle {
    constructor (brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
const bmwX5 = new Vehicle ('BMW', 'X5', 3000);
const tesla3 = new Vehicle ('Tesla', 'Model 3', 2000);
// console.log (bmwX5);
// console.log (tesla3);

/** Problem 4 from Page # 356 */

class Worker {
    constructor (id, name, hoursWorked) {
        this.id = id;
        this.name = name;
        this.hoursWorked = hoursWorked;
    }
}
const worker = new Worker (101, 'Tom', 40);
// console.log (worker);

/** Problem 5 from Page # 356 */

// class Library {
//     constructor (name, books, location) {
//         this.name = name,
//         this.books = books,
//         this.location = location
//     }
// }
// const publicLibrary = new Library ('Public Library', 100000, 'Sahid Minar');
// console.log (publicLibrary);
// console.log (publicLibrary instanceof Library);

/** Problem 6 from Page # 356 */

class Classroom {
    constructor (students, section, teacher) {
        this.students = students;
        this.section = section;
        this.teacher = teacher;
    }
}

const sectionA = new Classroom ([], 'Section A', 'Mr. Plumber');
// console.log (sectionA);

/** Problem 7 from Page # 356 */

/** Same as Problem 6 */


/** Problem 8 from Page # 356 */

class Product {
    constructor (name, catagory, stock = 0) {
        this.name = name;
        this.catagory = catagory;
        this.stock = stock;
    }
}
const mobile = new Product ('Mobile', 'Eletronics', 50);
const camera = new Product ('Camera', 'Electronics');
// console.log (mobile);
// console.log (camera);



/** ===================== Method in Class ======================= */

class Player {
    constructor (name, runs, wickets) {
        this.name = name;
        this.runs = runs;
        this.wickets = wickets;
    }
    // getRuns () {
    //     return this.runs;
    // }
    addRuns (run) {
        // this.runs = this.runs + run;
        this.runs += run;
    }
}

const tamim = new Player ('Tamim', 5000, 100);
// const tamimRuns = tamim.getRuns ();
// console.log (tamimRuns);

tamim.addRuns (150);
tamim.addRuns (60);
tamim.addRuns (30);

// console.log (tamim);

/** Example - instance method */

class BankAccount {
    constructor (owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit (amount) {
        this.balance += amount;

        return this.balance;
    }

    withdraw (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            
            return amount;
        }
        else {
            return this.balance = `Insufficient funds`;
        }
    }
}
// const myAccount = new BankAccount ('Leo', 20000);
// myAccount.deposit (5000);
// myAccount.withdraw (3000);
// myAccount.withdraw (30000);
// console.log (myAccount);
// console.log (myAccount.withdraw (30000));


/** Problem 1 from Page # 361 */

class Hotel {
    constructor (name, roomNUmber, roomRent) {
        this.name = name;
        this. roomNUmber = roomNUmber;
        this.roomRent = roomRent;
    }
    getName () {
        return this.name;
    }
}
const peninsula = new Hotel ('Peninsula', 321, 4000);
// console.log (peninsula.getName ());

/** Problem 2 from Page # 361 */

class Employee {
    constructor (employeeName, designation, salary) {
        this.employeeName = employeeName;
        this.designation = designation;
        this.salary = salary;
    }
    getSalary () {
        return this.salary;
    }
}
const mubarak = new Employee ('Mubarak', 'Room Boy', 12000);
const mubarakSalary = mubarak.getSalary ();
// console.log (mubarakSalary);

/** Problem 3 from Page # 361 */

class Library {
    constructor (books = []) {
        this.books = books;
    }
    addBooks (book) {
        this.books.push (book);

        return this.books;
    }
    hasBooks (book) {
        if (this.books.includes (book)){
            return this.books = true;
        }
        else {
            return this.books = false;
        }
    }
}
const azad = new Library ([]);
azad.addBooks ('Joddopi Amar Guru');
// console.log (azad);

azad.hasBooks ('Amar Boi');
// console.log (azad);


/** Problem 4 from Page # 361 */

class ShoppingCart {
    constructor (products = [], totalPrice = 0) {
        this.products = products;
        this.totalPrice = totalPrice;
    }
    addToCart (productName, productPrice) {
        this.products.push (productName);
        this.totalPrice += productPrice;
    }
    getTotalPrice () {
        return this.totalPrice;
    }
}

const totalPriceObj = new ShoppingCart ([], 10000);
totalPriceObj.addToCart ('Computer', 30000);
totalPriceObj.getTotalPrice ();

console.log (totalPriceObj);
