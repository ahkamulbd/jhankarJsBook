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

// console.log (totalPriceObj);


/** ========================== Class Inheritance ========================== */

class Gadget {
    constructor (brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
class Laptop extends Gadget {
    constructor (brand, model, price, keyboardLight) {
        super (brand, model, price);
        this.keyboardLight = keyboardLight;
    }
}

const myLaptop = new Laptop ('HP', 'Probook', 30000, true);
// console.log (myLaptop);
// console.log (myLaptop.brand);
// console.log (myLaptop.model);
// console.log (myLaptop.price);
// console.log (myLaptop.keyboardLight);


/** Problem 1 from Page # 366: What is the inheritance of class in JavaScript? Why is it needed? */

/** 
 * Answer:
 * 
        * 🔹 What is Inheritance in JavaScript?

        Inheritance in JavaScript is a way for one class (child/subclass) to get properties and methods from another class (parent/superclass).

        👉 It’s based on prototypes, but when we use the class syntax (introduced in ES6), inheritance becomes cleaner and easier to read.

        🔹 Why is Inheritance Needed?

        Code Reusability

        Instead of rewriting the same code, you can reuse it in child classes.

        Example: Laptop, Phone, Tablet can all inherit from Gadget.

        Organization & Structure

        Helps organize code into a hierarchy (general → specific).

        Example: Animal → Bird → Eagle.

        Extensibility

        You can add new features to child classes without changing the parent class.

        Maintainability

        If something changes in the parent class, all child classes automatically benefit from it.

        ✅ In short:
        Inheritance in JavaScript allows one class to extend another, reuse its code, and build a logical structure. It makes code cleaner, less repetitive, and easier to maintain.

 */


/** Problem 2 from Page # 366: How is relationship between Parent and Child classes built in JavaScript ? */

/**
 * Answer:
 * 
        * In JavaScript, the relationship between Parent and Child classes is built through prototype chaining and the extends / super keywords. Let me explain step by step:

        🔹 1. Parent & Child with extends

        When you write:

        class Parent {}
        class Child extends Parent {}


        👉 This means:

        The Child class inherits from the Parent.

        JavaScript sets up the prototype chain so methods from Parent are available to Child.

        🔹 2. How the Relationship is Built

        Under the hood:

        Child.prototype.__proto__ points to Parent.prototype.
        (So, objects created from Child can access methods from Parent.)

        Child.__proto__ points to Parent.
        (So static methods from Parent are also available in Child.)

        🔹 3. Example with Code
        class Gadget {
        constructor(brand) {
            this.brand = brand;
        }
        showBrand() {
            return `Brand: ${this.brand}`;
        }
        }

        class Laptop extends Gadget {
        constructor(brand, keyboardLight) {
            super(brand); // calls Parent constructor
            this.keyboardLight = keyboardLight;
        }
        showLaptop() {
            return `${this.showBrand()}, Keyboard Light: ${this.keyboardLight}`;
        }
        }

        const dell = new Laptop("Dell", true);

        console.log(dell.showLaptop());   // Brand: Dell, Keyboard Light: true
        console.log(dell instanceof Laptop); // true
        console.log(dell instanceof Gadget); // true

        🔹 4. Visual Relationship (Prototype Chain)
        dell (object)
        ↑
        Laptop.prototype
        ↑
        Gadget.prototype
        ↑
        Object.prototype


        dell first looks in Laptop.prototype for methods.

        If not found, it looks in Gadget.prototype.

        If still not found, it looks in Object.prototype.

        🔹 5. Why super is Important

        In the child constructor, you must call super(...) before using this.

        super calls the parent constructor and initializes the parent part of the object.

        ✅ Summary:
        The relationship between parent and child classes in JavaScript is built using extends and super. Under the hood, it’s powered by prototype chaining, which links the child class’s prototype to the parent’s prototype, allowing property and method inheritance.
 */

/** Problem 3 from Page # 366 */

class Vehicle3 {
    constructor (brand, model, price, wheelNumber) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.wheelNumber = wheelNumber;
    }
}

class Bus extends Vehicle3{
    constructor (brand, model, price, wheelNumber, isPassenger){
        super (brand, model, price, wheelNumber);
        this.isPassenger = isPassenger;
    }
}
class Truck extends Vehicle3{
    constructor (brand, model, price, wheelNumber, isGoods){
        super (brand, model, price, wheelNumber);
        this.isGoods = isGoods;
    }
}
class Bike extends Vehicle3{
    constructor (brand, model, price, wheelNumber, madeIn){
        super (brand, model, price, wheelNumber);
        this.madeIn = madeIn;
    }
}

const sAlamBus = new Bus ('S Alam', 'M 16', 12000000, 4, true);
// console.log (sAlamBus);
// console.log (sAlamBus.brand);
// console.log (sAlamBus.model);
// console.log (sAlamBus.price);
// console.log (sAlamBus.wheelNumber);
// console.log (sAlamBus.isPassenger);

/** Problem 4 from Page # 366 */

class Animal4 {
    constructor (type, liveIn, isDomestic, legs) {
        this.type = type;
        this.liveIn = liveIn;
        this.isDomestic = isDomestic;
        this.legs = legs;
    }
    animalLiveIn () {
        return `${this.type} lives in ${this.liveIn}`;
    }
}

class Bird extends Animal4 {
    constructor (type, liveIn, isDomestic, legs, canFly) {
        super (type, liveIn, isDomestic, legs);
        this.canFly = canFly;
    }
}

const myBird = new Bird ('Dove', 'Branch of tree', false, 2, true);

// console.log (myBird);
// console.log (myBird.animalLiveIn ());

/** ===================== Problem 5 and 6 are like Problem 4 ===================== */

/** Problem 7 from Page # 366: Explain DRY principal with example */

/** 
 * Answer:
 * 
        * 🔹 What is the DRY Principle?

        DRY = Don’t Repeat Yourself

        It’s a software development principle that says:
        👉 Avoid duplicating code.
        👉 Instead, keep logic in a single place so it’s easier to reuse, maintain, and update.

        If you copy-paste the same logic multiple times, you’ll have to update it everywhere when requirements change → that’s error-prone.
        With DRY, you update in one place only.

        🔹 Bad Example (Not DRY)

        Here’s some repetitive code:

        // Calculate area of a rectangle
        let length1 = 10;
        let width1 = 5;
        console.log("Area of rectangle 1:", length1 * width1);

        let length2 = 8;
        let width2 = 6;
        console.log("Area of rectangle 2:", length2 * width2);

        let length3 = 15;
        let width3 = 4;
        console.log("Area of rectangle 3:", length3 * width3);


        ❌ Problem:

        The same formula (length * width) is repeated three times.

        If formula changes, you must edit it in many places.

        🔹 Good Example (Using DRY)

        Now we write the formula once inside a function:

        function calculateRectangleArea(length, width) {
        return length * width;
        }

        console.log("Area of rectangle 1:", calculateRectangleArea(10, 5));
        console.log("Area of rectangle 2:", calculateRectangleArea(8, 6));
        console.log("Area of rectangle 3:", calculateRectangleArea(15, 4));


        ✅ Benefits:

        Formula is defined once.

        Reusable for unlimited rectangles.

        If formula changes → update only inside the function.
 */