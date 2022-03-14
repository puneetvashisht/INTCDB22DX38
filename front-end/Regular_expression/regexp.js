// // let re = /hi/i;
// // let regex=new RegExp("hi")

// // let result = re.test("HI john");

// // console.log(result);

// // let message = "Hi ,are you there?. Hi are are...";

// // let re = /a/gi;

// // console.log(re.exec(message));
// // console.log(re.exec(message));
// // console.log(re.exec(message)); //This 're' object remembers the previous result of exec method

// let re = /name/gi;

// let match;

// let matches = [];

// do {
//   match = re.exec("MY name is Rahul and your name is?");
//   if (match) {
//     matches.push(match);
//   }
// } while (match != null);

// console.log(matches);

//Searching string using regex
let regex = /OK/gi;

let str = "Are you Ok?Yes ,I'm Ok";

// let result = str.match(regex);

// console.log(result);
let result = str.replace(regex, "fine");
console.log(result);
