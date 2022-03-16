
  
//   Example-1

  function isOdd(number) {
    return number % 2 != 0;
  }
  function isEven(number) {
    return number % 2 == 0;
  }
  



  function filter(numbers, fn) {          // Filter method is a Higher - Order function.
    let results = [];
    for (const number of numbers) {
      if (fn(number)) {
        results.push(number);
      }
    }
    return results;
  }


  let numbers = [1, 2, 4, 7, 3, 5, 6];









//   Example-2;

const names = ['Sina', 'Sam', 'Qoli', 'Ben', 'Zoe', 'Zoe', 'Quentin', 'Ala'];

const filtered = [];
for (let i = 0; i < names.length; i++){         // Filtering the array
    if(names[i][0] !== 'Q'){
        filtered.push(names[i])
    }
}

const longNames = [];
for(let i = 0; i < longNames.length; i++){      // Filtering the array
    if(filtered[i].length >= 5){
        longNames.push(filtered[i])
    }
}

const elements = [];
for(let i = 0; i < longNames.length; i++){       // Mapping the array
    const el = document.createElement('p')
    el.innerText = longNames[i];
    elements.push(el);
}


// Note: In all the for loops above, we have a common piece of code i.e 
// iterating over an array.

// Why can't we write this common code at one place in a higher-order-function ? Let's do it.
// Let us create a function which will do the iterations for us. And we can 
// also pass our custom filtering algorithm to that function. So that it can not only iterate 
// over the arary but also filter it according to the passed algorithm.




// Using higher-order-function, filter() and map(). Now, We only have to worry about writing 
// the algorithms for filtering and mapping the array.

names
    .filter(n => n[0] !== 'Q')
    .filter(n => n.length >= 5)
    .map(n => {                                         // Can be even more simplified.
        const el = document.createElement('p')          // See in the next example. 
        el.innerText = n;
        return el;
    })



// More simplified using First-order-function for converting an element of array 
// to the JSX element.

names
    .filter(n => n[0] !== 'Q')                     // Filtering
    .filter(n => n.length >= 5)                    // Filtering
    .map(n => convertToJSXElement)                 // Mapping


function converetToJSXElement(n){
    const el = document.createElement('p')
    el.innerText = n;
    return el;
}