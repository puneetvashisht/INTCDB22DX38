// The callback approach works very well. However, it makes the code more 
// difficult to follow. Also, it adds complexity to the functions with 
// callback arguments.

// If the number of functions grows, you may end up with the callback 
// hell problem. To resolve this, JavaScript comes up with the concept of promises.






// Using callbacks to deal with an asynchronous operation:-

// The following example adds a callback argument to the 
// getUsers() and findUser() functions:

// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { username: 'john', email: 'john@test.com' },
//       { username: 'jane', email: 'jane@test.com' },
//     ]);
//   }, 2000);
// }

// function findUser(username, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     callback(user);
//   });
// }

// findUser('john', console.log);








// Understanding JavaScript Promises:-

// By definition, a promise is an object that encapsulates the result of an 
// asynchronous operation.

// A promise object has a state that can be one of the following:

// 1. Pending
// 2. Fulfilled with a value
// 3. Rejected for a reason



// const  promise = new Promise((resolve, reject)=> {
//     // executor code. // It may be a network request.
// })




// Example of Promise:-

// const promise = new Promise((resolve, reject) => {
    
//     data = 3;
//     error = "Operation was unsuccessful"
//     // Some Operation ........ 
//     // Some lines of code..
//     let success = false;  // The value of success is based on the success of above operation.


//     // Lines below returns the state of the promise object.
//     if (success) {
//       resolve(data);  // Promise is resolved
//     } else {
//       reject(error);
//     }
//   });

//   console.log(promise)






// Consuming a Promise: Using then(), catch() methods.

// let success = false;       // Flag ==> Make it false for simulating the rejection.

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           { username: 'john', email: 'john@test.com' },
//           { username: 'jane', email: 'jane@test.com' },
//         ]);
//       } else {
//         reject('Failed to get the user list because of down server');
//       }
//     }, 5000);
//   });
// }

// const promise = getUsers();

// // console.log(promise)

// promise.then((users) => {
//     console.log(users);
//   })


// promise.catch((error) => {
//   console.log(error);
// });