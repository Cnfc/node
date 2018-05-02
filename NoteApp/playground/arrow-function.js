//
// let square = x => x*x;
//
// console.log(square(9));


let user = {
  name: "Andrew",
  sayHi: () => {
    console.log(`Hello ${user.name}`);
  },
  sayHiAlt () {
    console.log('================');
    console.log(arguments);
      console.log(`Hello ${this.name}`);
  }
};

console.log(user.sayHi());
user.sayHiAlt(1,2,3);
