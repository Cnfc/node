
var phrases = require('./ru');
exports.connect = function() {
  phrases = require("./ru");

};

exports.getPhrase = function(name) {
  if(!phrases[name]) {
    throw new Error("No one " + name);
  }
  return phrases[name];
}
