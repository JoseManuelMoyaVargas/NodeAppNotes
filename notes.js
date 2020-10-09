
const fs = require('fs')
const chalk = require('chalk');
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(err){
        return []
    } 
}
const saveNotes = (notesArray)=>{
    const notes = JSON.stringify(notesArray);
    fs.writeFileSync('notes.json',notes);
}


const addNote = (title,body) =>{
    const notes =  loadNotes()
    //We check if there is a note with the title submitted.
    const duplicateNode =notes.find((note)=>note.title ===title); 

    
    if(duplicateNode ===undefined){
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added successfully!'));
    }else{
        console.log(chalk.red.inverse('Note title used. Please choose another title.'));
    }
}

const removeNote = (noteTitleToRemove)=>{
    const notes =  loadNotes();
    const notesToSave = notes.filter((note)=>note.title !== noteTitleToRemove)
    
    if(notes.length!==notesToSave.length){
        console.log(chalk.green.inverse('Note removed successfully!')); 
        saveNotes(notesToSave);
    }else{
        console.log(chalk.red.inverse('The note that you are trying to remove does not exist!')); 
    }
}

const listNotes = ()=>{
    const notes =  loadNotes();
    console.log(chalk.blue.bold('Your notes!')); 
    //For each note we print the title and the body of the note.
    notes.forEach((note) => {
        console.log('Title: ' + note.title);
    });
}

const readNote = (titleToRead)=>{
    const notes =  loadNotes();
    const foundNode =notes.find((note)=>note.title ===titleToRead); 
    if(foundNode !== undefined){
        console.log(chalk.yellow.inverse('Title: ' + titleToRead) +' - Body:' + foundNode.body);
    }else{
        console.log(chalk.red.inverse('The note that you are trying to read does not exist!'));
    }
}
//Export
module.exports = {
    readNote:readNote,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes
}