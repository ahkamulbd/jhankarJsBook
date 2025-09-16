/** ================= Using bind () ================= */

const tina = {
    name: 'Tina', 
    salary: 20000,
    getInfo () {
        console.log (`${this.name} salary: ${this.salary}`);
    }
};

// tina.getInfo ();

const soma = {
    name: 'Soma',
    salary: 25000
};

const somaInfo = tina.getInfo.bind (soma);
// somaInfo ();

/** ================== Using call () ==================== */

const mona = {
    name: 'Mona',
    salary: 27000
}
// tina.getInfo.call (mona);

/** ================== Using apply () ==================== */

const dina = {
    name: 'Dina',
    salary: 37000
}
// tina.getInfo.apply (dina);


/** Problem 1 from Page # 385 */

const team = {
    name: 'Abahoni',
    players: 19,
    play () {
        console.log (`${this.name} has ${this.players} players`);
    }
}
// team.play ();

const tournament = {
    name: 'BPL',
    players: 217
}
const tournamentInfo = team.play.bind (tournament);
// tournamentInfo ();


/** Problem 2 from Page # 385 */

const car = {
    name: 'Car',
    speed: '150 KM',
    price: 20000000,
    drive () {
        console.log (`${this.name}'s speed is ${this.speed} and price is ${this.price}`);
    }
}
// car.drive ();

const bike = {
    name: 'Bike',
    speed: '100 KM',
    price: 150000
}
// car.drive.call (bike);

const truck = {
    name: 'Truck',
    speed: '80 KM',
    price: 1700000
}
// car.drive.call (truck);

/** Problem 3 from Page # 385 */

const employee = {
    name: 'Akkas Ali',
    role: 'Marketing',
    details (){
        console.log (`${this.name} is incharge of ${this.role} department`);
    }
}
// employee.details ();

const manager = {
    name: 'Abbas Ali',
    role: 'HR'
}
// employee.details.apply (manager);

/** Problem 4 from Page # 386 */

const classroom = {
    name: 'Class 5',
    students: ['Ali', 'Juli', 'Kali', 'Boli'],
    attendence () {
        // console.log (`${this.students}`);
        // for (let student of this.students){
        //     console.log (`${student} reads in ${this.name}`);
        // }
        const lastStudent = this.students.pop ();

        console.log (`${this.students.join (', ')} and ${lastStudent} read in ${this.name}`);
    }
}
// classroom.attendence ();

const lab = {
    name: 'Radiology',
    students: ['Joki', 'Koli', 'Moli', 'Poly', 'Buli']
}
const labInfo = classroom.attendence.bind (lab);
// labInfo ();

/** Please describe (application with examples) details regarding bind, call and apply in JavaScript: */

/**
 * Answer:
 * 
        * bind(), call(), আর apply() — এগুলো JavaScript-এর function methods যেগুলো দিয়ে আমরা this এর মান কন্ট্রোল করতে পারি এবং function কিভাবে execute হবে সেটি নির্ধারণ করতে পারি।

        আমি ধাপে ধাপে ব্যাখ্যা করি:

        1. call()

        👉 Function কে সাথে সাথেই execute করে এবং আমরা this এর মান explicitly দিতে পারি।
        এছাড়া arguments আলাদা আলাদা করে দিতে হয়।

        Example:
        const person = {
            name: 'Ali',
            greet: function(city, country) {
                console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
            }
        };

        const person2 = { name: 'Juli' };

        // Use call
        person.greet.call(person2, 'Dhaka', 'Bangladesh');


        Output:

        Hello, I am Juli from Dhaka, Bangladesh

        2. apply()

        👉 call() এর মতই কাজ করে, শুধু arguments array হিসেবে দিতে হয়।
        এটি useful যখন arguments আগে থেকেই array আকারে আছে।

        Example:
        const person = {
            name: 'Kali',
            greet: function(city, country) {
                console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
            }
        };

        const person2 = { name: 'Boli' };

        person.greet.apply(person2, ['Chattogram', 'Bangladesh']);


        Output:

        Hello, I am Boli from Chattogram, Bangladesh

        3. bind()

        👉 bind() function কে execute করে না, বরং একটি new function return করে যেটি পরে call করা যায়।
        this এবং arguments permanently set হয়ে যায়।

        Example:
        const person = {
            name: 'Ali',
            greet: function(city, country) {
                console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
            }
        };

        const person2 = { name: 'Juli' };

        // bind creates a new function
        const greetJuli = person.greet.bind(person2, 'Barishal', 'Bangladesh');

        greetJuli(); // later we call it


        Output:

        Hello, I am Juli from Barishal, Bangladesh

        📝 Summary Table
        Method	Executes immediately?	Arguments passing style	Returns what?
        call	✅ Yes	Comma separated list	Function’s result
        apply	✅ Yes	Array	Function’s result
        bind	❌ No	Comma separated list (or pre-set)	New function
        Practical Applications

        Borrowing methods

        const numbers = [5, 2, 9];
        console.log(Math.max.apply(null, numbers)); // 9


        Event handling (bind)

        const button = {
            text: 'Click Me',
            showText: function() {
                console.log(this.text);
            }
        };

        const btn = document.createElement('button');
        btn.innerText = "Click";
        document.body.appendChild(btn);

        // Bind to button object
        btn.addEventListener('click', button.showText.bind(button));


        Function Reuse (call)

        function introduce() {
            console.log(`I am ${this.name}`);
        }
        const student = { name: 'Amima' };
        introduce.call(student); // I am Amima
 */

