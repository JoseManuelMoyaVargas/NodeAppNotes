
const validator = require('validator');
const chalk = require('chalk')
const yargs = require('yargs')
const fs =  require('fs')

const notesUtilities = require('./notes.js');
const { addNote, removeNote, listNotes, readNote } = require('./notes.js');

//Add commands
yargs.command({
    command:'add',
    describe:'Adding a new note!',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        addNote(argv.title,argv.body)
    }
}).argv

yargs.command({
    command:'remove',
    describe:'Removing a note!',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        removeNote(argv.title);
    }
}).argv;

yargs.command({
    command:'list',
    describe:'Listing notes!',
    handler(){
        //console.log("Listing notes");
        listNotes();
    }
}).argv;

yargs.command({
    command:'read',
    describe:'Reading notes!',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(noteToRead){
       readNote(noteToRead.title);
    }
}).argv;

yargs.parse()