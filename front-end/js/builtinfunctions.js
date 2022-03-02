// String methods
var str = 'Good sunny morning today'

console.log(str.length);
str.charAt(0)
str.includes('Good')
str.indexOf('y')

str.split('').reverse().join('')


// Math methods
Math.ceil(0.78)
Math.floor(0.8)
Math.min(4,2,5,31,6)

// Array methods
var evens = [0, 2, 4, 10, 8, 10];
evens.push(12)
evens.forEach(function(e){
    console.log(e)
})