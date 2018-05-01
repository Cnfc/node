
console.log('Starting App');

const fs = require('fs');
const os = require("os");
const _ = require('lodash');
const yargs = require('yargs');

const notes = require("./notes.js")

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log("Yargs", argv);

if(command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note ) {
    console.log("Note Created");
    notes.logNote(note);
  } else {
    console.log('Note title created');
  }
} else if(command === 'list') {
  notes.getAll();
} else if(command === 'read') {
  let note = notes.getNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log("Does not exist!");
  }

} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : "Note not found";
  console.log(message);

} else {
  console.log("Command is not recognized");
}
