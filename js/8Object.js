/** ===================================================================
 *  ============ Declaring Object =====================================
 *  ===================================================================
 */

/** Problem 1 from Page # 126 */

const teacher = {
    name : 'Dipak',
    subject: 'Bangla',
    age: 45,
    residence: 'Lama Bazar'
}

/** Problem 2 from Page # 126 */

const tree = {
    name : 'Banayan',
    height: '70 Feet',
    age: 3,
    fruitName: 'Banayan Fruit'
}

/** =================================================================
 *  ========= Accessing Data from Object ============================
 *  =================================================================
 */

/** Problem 1 from Page # 131 */

const player = {
    name : 'Sakib',
    age : 36,
    sports : 'Cricket',
    team : 'Bangladesh'
}
// console.log(player.team);

/** Problem 3 from Page # 131 */

const favPlace = {
    name : "Cox's Bazar",
    distance : "400 KM",
    popularity : "High"
}
// console.log(favPlace["popularity"]);

/** Problem 7 from Page # 131 */

const college = {
    name: "NDC",
    established: 1949,
    groups: ["Science", "Arts", "Commerce"]
}
// console.log(college.groups[1]);

/** Problem 8 from Page # 132 */

const family = {
    father: {
        name: "Ashraf",
        age: 82,
        profession: "Teaching"
    },
    mother: {
        name: "Forkan Ara",
        age: 72,
        profession: "Housewife"
    }
}
const fatherAge = family.father.age;
const motherAge = family.mother.age;
const ageSum = fatherAge + motherAge;

// console.log(ageSum);

/** =============================================================================
 *  ================ Keys and Values in Object ==================================
 *  =============================================================================
 */

const computer = {
    brand: "HP",
    price: 35000,
    processor: "intel",
    ssd: "512 gb"
}
const keysComputer = Object.keys(computer);
// console.log(keysComputer);

const valuesComputer = Object.values(computer);
// console.log(valuesComputer);

const hasBrand = keysComputer.includes("brand");
// console.log(hasBrand);

if ("price" in computer){
    // console.log("Price is Tk 35000");
}
else{
    // console.log("No price");
}

if (computer.hasOwnProperty("ssd")){
    // console.log("SSD is 512 GB");
}
else{
    // console.log("No SSD");
}

const person = {
    name: "Jhon",
    age: 37,
    country: "Bangladesh"
}
const entriesPerson = Object.entries(person);
// console.log(entriesPerson);

for (personKey in person){
    const personValue = person[personKey];

    // console.log(personKey);
    // console.log(personValue);
}

/** =============================================================================
 *  ======================== Problem Solving ====================================
 *  =============================================================================
 */

/** Problem 1 from Page # 137 */

const bookObject = {
    name: "Sonar Tori",
    auther: "Robindranath", 
    price: 200
}
const bookObjectKeys = Object.keys(bookObject);
const bookObjectValues = Object.values(bookObject);

// console.log(bookObjectKeys);
// console.log(bookObjectValues);


/** Problem 2 from Page # 137 */

const article = {
    title: "Learning JS",
    category: "Programming"
}
const articleKeys = Object.keys(article);
const hasAuthor = articleKeys.includes("author");
// console.log(hasAuthor);

for (const key in article){
    // console.log(key);
    // console.log(article[key]);
}

/** Problem 3 from Page # 137 */

const laptop = {
    brand: "Dell",
    model: "inspiron",
    price: 45000
}

for (const key in laptop){
    const value = laptop[key];
    // console.log(key, value);
    // console.log(laptop[key]);
}

/** Problem 4 from Page # 137 */

const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
}
const phoneKeys = Object.keys(phone);
const phoneValues = Object.values(phone);

// console.log(phoneKeys, phoneValues);

for (const key of phoneKeys){
    // console.log(key);
}
for (const value of phoneValues){
    // console.log(value);
}

/** Problem 5 from Page # 137 */

const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splender"
}
const bikeValues = Object.values(bike);
// console.log(bikeValues);

/** Problem 6 from Page # 137 */

const books = {
    book1: "Herry Potter",
    book2: "The Habbit",
    book3: "Game of Thrones"
}
for (const book in books){
    const value = books[book];
    // console.log(book, value);
    // console.log(value);
}

/** Problem 7 from Page # 137 */

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
const numbersValues = Object.values(numbers);
// console.log(numbersValues);

let valuesSum = 0;
for (const value of numbersValues){
    valuesSum = valuesSum + value;
}
// console.log(`Sum of numbers Value: ${valuesSum}`);

/** Problem 9 from Page # 137 */

const building = {
    floor: 10,
    address: {
        street: "Main Road",
        city: "Dhaka"
    },
    type: "Commercial"
}
for (const key in building){
    const value = building[key];
    // console.log(key);
    // console.log(value);
}