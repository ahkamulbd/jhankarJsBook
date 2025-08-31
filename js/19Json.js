/** =============== JavaScript Object Notation (JSON) ====================== */

const user = {
    id: 1,
    name: 'Amir',
    job: 'Actor'
}
const userJSON = JSON.stringify (user);
// console.log (userJSON); 

const shop = {
    owner: 'Alia',
    address: {
        street: 'Voter Goli',
        city: 'Ctg',
        country: 'BD'
    },
    product: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
const shopJSON = JSON.stringify (shop);
// console.log (shopJSON);

const shopObj = JSON.parse (shopJSON);
// console.log (shopObj);

/** Problem 1 from Page # 317 : Difference between Object and JSON in Javascript: */


/** Problem 2 from Page # 317 */

const user2 = {
    user: 'Abir',
    email: 'abir@gmail.com',
    address: 'Pokkhali',
    orderHistory: ['cycle', 'tyre', 'wheel']
}
const user2JSON = JSON.stringify (user2);
// console.log (user2JSON);

/** Problem 3 from Page # 317 */

const shoppingCart = {
    product: ['cycle', 'tyre', 'wheel'],
    totalPrice: 57000,
    userDetails: {
        id: 1,
        name: 'Amir',
        job: 'Actor',
        constact: '01820000000'
    }
}
const shoppingCartJSON = JSON.stringify (shoppingCart);
// console.log (shoppingCartJSON);

/** Problem 4 from Page # 317 */

const weather = {
  city: "Coxs Bazar",
  temperature: "30 C",
  humidity: "78%",
  forecast: [34, 27, 33, 33, 38, 30, 29]
};

const weatherJSON = JSON.stringify(weather);
// console.log(weatherJSON);

/** Problem 5 from Page # 317 */

const movieDetails = {
    title: 'Bijoy',
    releaseYear: 1971,
    actors: ['Alamgir', 'Shabana', 'Jashim', 'Anowara'],
    rating: '5 Star'
}
const movieDetailsJSON = JSON.stringify (movieDetails);
// console.log (movieDetailsJSON);

const movieDetailsObj = JSON.parse (movieDetailsJSON);
// console.log (movieDetailsObj);

/** Problem 6 from Page # 318 */

const projectManagement = [
    {
        projectID: 1,
        projectDescription: 'poverty alleviation',
        teamMembers: ['Amir', 'Samir', 'Pamir', 'Hamir'],
        deadline: 2030,
        tasks: {
            title: 'monitoring',
            assignee: 'Mr. Joy',
            status: 'good'
        }
    },
    {
        projectID: 2,
        projectDescription: 'poverty alleviation',
        teamMembers: ['Amir', 'Samir', 'Pamir', 'Hamir'],
        deadline: 2030,
        tasks: {
            title: 'monitoring',
            assignee: 'Mr. Joy',
            status: 'good'
        }
    },
    {
        projectID: 3,
        projectDescription: 'poverty alleviation',
        teamMembers: ['Amir', 'Samir', 'Pamir', 'Hamir'],
        deadline: 2030,
        tasks: {
            title: 'monitoring',
            assignee: 'Mr. Joy',
            status: 'good'
        }
    },
]
const projectManagementJSON = JSON.stringify (projectManagement);
// console.log (projectManagementJSON);

/** Problem 7 & 8 from Page 318 are same type of problem 6 */
