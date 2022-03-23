
// Synchronous Code / Blocking Code.
// console.log("First Execution")

// console.log("Second Execution")

// console.log("Third Execution")



// Asynchronous Code / Non-Blocking Code

// console.log("First Execution")

// setTimeout(() => console.log("Second Execution"), 3000)  // Time Consuming

// console.log("Third Execution")

// console.log("Fourth Execution")


console.log('starting... ');

//non-blocking 
function foo(fn){
    setTimeout(()=>{
        console.log('foo function called..');
        fn("success");
    }, 5000)
}

// let result = foo();
// console.log(result);

foo((res)=> console.log(res));


console.log('finishing...');