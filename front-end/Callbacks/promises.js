


console.log('starting... ');

//non-blocking 
function foo(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            // console.log(fn);
            console.log('foo function called..');
            reject("failure");
        }, 5000)
    })  
}

// let result = foo();
// console.log(result);

// foo((res)=> console.log(res));
foo()
.then(res => console.log(res))
.catch(err => console.log('Err: ', err))

console.log('finishing...');