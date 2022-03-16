// In JavaScript, functions are first-class citizens. i.e functions 
// can be assigned to a varible just like we do with booleans, string, 
// numbers.Therefore, you can pass a function to another function as 
// an argument.

// By definition, a callback is a function that you pass into another 
// function as an argument for executing later.


// A high-order function is a function that accepts another function 
// as an argument.

// let fun = function sum(a, b){
//   return a+b;
// }

// function fun1(){
//   console.log(fun(3,4))
//   return function(){
//     console.log("Anything..")
//   };
// }


// fun1(fun);


// Example-1

// function filter(numbers) {
//     let results = [];

//     for (const number of numbers) {
//       if (number % 2 != 0) {            // Modification in next example.
//         results.push(number);
//       }
//     }

//     return results;
//   }


//   let numbers = [1, 2, 4, 7, 3, 5, 6];
//   console.log(filter(numbers));








// Modified Example-1                               

  // function isOdd(number) {
  //   return number % 2 != 0;
  // }
  // function isEven(number) {
  //   return number % 2 == 0;
  // }
  

  
  // function filter(numbers, fn) {          // Filter method is a Higher - Order function.
  //   let results = [];
  //   for (const number of numbers) {
  //     if (fn(number)) {
  //       results.push(number);
  //     }
  //   }
  //   return results;
  // }

  // let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  // console.log(filter(numbers, isOdd));
  // console.log(filter(numbers, isEven));





// There are two types of callbacks: synchronous and asynchronous callbacks.

// A SYNCHRONOUS CALLBACK is executed during the execution of the high-order
//  function that uses the callback. 

// An ASYNCHRONOUS CALLBACK is executed after the execution of the high-order 
//  function that uses the callback.





// Example of Asynchronous Code:-

// Suppose that you need to develop a script that downloads a picture from a 
// remote server and process it after the download completes:








// Dummy Template -->> Pseudo-Code

// function download(url) {
//     // ...
// }

// function process(picture) {
//     // ...
// }

// download(url);
// process(picture);





// Wrong order of processing and downloading.  // Synchronous Code/Blocking Code

// function download(url) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
//     },3000);
// }

// function process(url) {
//     console.log(`Processing ${url}`);
// }

// let url = 'https://www.learnObytes.com/pic.jpg';

// download(url);  // 1st operation  --> Time Consuming  --> Not blocking the further execution
// process(url);   // 2nd operation








// Right order of Downloading and Processing.

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.learnObytes.com/pic.jpg';
download(url, process);