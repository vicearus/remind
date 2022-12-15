// Setting up express and other tools
const express = require("express");
// Setting up middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//initiates public folder onto browser
app.use(express.static('public'));


// Calling routes
// app.use("/api", require("./routes"));

const dbData = require('./db/db.json');
app.get("/api/notes", (req, res) => res.json(dbData))

// Sets up public files in home page
app.get('/notes', (req, res) =>
res.sendFile((`${__dirname}/public/notes.html`)));


app.listen(3001, () => console.log("Listening on http://localhost:3001"));