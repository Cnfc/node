var User = require('./user');

function run() {
  var vas = new User("Vasya");
  var pet = new User("Pertt");

  vas.hello(pet);
}

if(module.parent) {
    exports.run = run;
} else {
    run();
}
