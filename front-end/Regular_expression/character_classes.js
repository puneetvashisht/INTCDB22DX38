// \d match a single digit
// \s match a single whitespace symbol
// \w match the word

let phone = "+1-(408)-555-0105";
let re = /\d/g;
// console.log(phone.match(re));

const numbers = phone.match(re);
const phoneNo = numbers.join("");

console.log(phoneNo);
