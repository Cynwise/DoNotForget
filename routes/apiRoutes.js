const fs = require("fs");
const path = require("path");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        const notes = fs.readFileSync(path.join(__dirname, "../db/db.json"), 'utf8')
        res.json(JSON.parse(notes))
    });

    app.post("/api/notes", (req, res) => {
        const notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), 'utf8'))
        var id = Math.floor(Math.random() * 100000);
        const newNote = { ...req.body, id };
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (error) => {
            if (error) console.log(error);
        });
        res.json(newNote);
    });
};