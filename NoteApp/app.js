
console.log('Starting App');

const fs = require('fs');
const os = require("os");
const _ = require('lodash');
const yargs = require('yargs');


const notes = require("./notes.js")
// const debugging = require("./pla")

const argv = yargs
  .command('add', 'Add a new note', {
     title: {
       describe: "Title of note",
       demand: true,
       alias: 't'
     },
     body: {
       
     }
  })
  .help()
  .argv;
var command = argv._[0];


if(command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note ) {
    console.log("Note Created");
    notes.logNote(note);
  } else {
    console.log('Note title created');
  }
} else if(command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note ));

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
