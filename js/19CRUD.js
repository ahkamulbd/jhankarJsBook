/** ==================== CRUD Operation ========================== */

/** ======= HTTP (Hypertext Transfer Protocol) Methods: ============================ */


/** Creat - To create data or create new data in server. Method - POST */
/** Read - To fetch data from srver made earlier. Method - GET */
/** Update - To update or modify data fully or partially in the srver. Method - PATCH / PUT */
/** Delete - To delete data from the srver. Method - DELETE */


/** Read / GET: */

const url = `https://jsonplaceholder.typicode.com/users`;
fetch (url)
    .then ((res) => res.json ())
    // .then ((data) => console.log (data))
    // .then ((data) => console.log (data [0].username, data [0].address.city, data [0].phone))


/** Create / POST:  */

const urlPost = `https://example.com/api/user`;
// const urlPost = `https://jsonplaceholder.typicode.com/users`;
const userPost = {
    name: 'John Doe',
    email: 'john@example.com'
};
const options = {
    method: 'POST',
    body: JSON.stringify (userPost),
    Headers: {
        'Content-type': 'application/json',
    },
}

// fetch (urlPost.options)
//     .then (res => res.json ())
//     .then (data => console.log (data))
//     // .catch (errro => console.log (errro))


/** Update (PUT, PATCH) */
/** Uses of PUT and PATCH are nearer. PUT is used to change full data or create new data if no data exists. And PATCH is used to change a portion of data */

const urlPUT = `https://jsonplaceholder.typicode.com/users/1`;
const updatedUser = {
    name: 'John Doe',
    email: 'john@example.com'
};
const optionsPut = {
    method: 'PUT',
    body: JSON.stringify (updatedUser),
    headers: {
        'Content-type': 'application/json',
    },
};
// fetch (urlPUT, optionsPut)
//     .then (res => res.json ())
//     .then (data => console.log (data))
//     .catch (error => console.log (error));


/** Delete / DELETE: */

const urlDelte = `https://jsonplaceholder.typicode.com/users/1`;
const optionsDelete = {
    method: 'DELETE',
};
fetch (urlDelte, optionsPut)
    .then (res => res.json ())
    .then (data => console.log (`Deleted: ${data}`))
    .catch (error => console.log (error))

