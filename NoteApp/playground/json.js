// let obj = {
//   name: "Andrew",
//   age: 25
// };
//
// let stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
//
// console.log(stringObj);

let personString = '{"name": "Andrew", "age": 25}';
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
