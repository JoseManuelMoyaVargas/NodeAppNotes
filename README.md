# NodeAppNotes
Simple note-taking app using Node.js.

## Using the app
We have several commands to interact with the command-line application. 
[title] has to be a string.  
[body] has to be a string.
### Add note
```
node app.js add --title=[title] --body=[body]
```
Example
```
node app.js add --title="Shopping list" --body="oranges,milk"
```

### Remove note
```
node app.js remove --title=[title]
```

Example
```
node app.js remove --title="Maths notes"
```

### List all notes
```
node app.js list
```

### Read note
```
node app.js read --title=[title]
```

Example
```
node app.js read --title="Poem"
```



