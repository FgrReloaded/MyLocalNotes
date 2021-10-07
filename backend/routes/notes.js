const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');



//Route 1: Get all notes using GET
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }
})
// Route 2: Create notes using POST
router.post('/addnotes', fetchuser, [
    body('title', 'Title must be minimum 1 character').isLength({ min: 1 }),
    body('description', 'Description must contain at least 1 character').isLength({ min: 1 }),
], async (req, res) => {
    try {

        const { title, description, tag } = req.body;
        // if error occurs give bad request with error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save();
        res.json(saveNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }
})
//Route 3: Updating existing notes.
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Create new Note Objects
        const newNote = {};
        if(title){newNote.title = title;}
        if(description){newNote.description = description;}
        if(tag){newNote.tag = tag;}
        
        //Find the note to be updated
        let note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).send("Notes Not Found");
        }
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json({note})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }
})

//Route 4: Deleting existing notes.
router.delete('/deletenotes/:id', fetchuser, async (req, res) => {
    try {
         //Find the note to be deleted
         let note = await Note.findById(req.params.id);
         if(!note){
             return res.status(404).send("Notes Not Found");
         }
         if(note.user.toString() !== req.user.id){
             return res.status(401).send("Not Allowed")
         }
 
         note = await Note.findByIdAndDelete(req.params.id)
         res.json("Notes Deleted Successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }
})

//Route 5: View Specific note.
router.get('/viewnotes/:id', fetchuser, async (req, res) => {
    try {
         //Find the note to be deleted
         let note = await Note.findById(req.params.id);
         if(!note){
             return res.status(404).send("Notes Not Found");
         }
         if(note.user.toString() !== req.user.id){
             return res.status(401).send("Not Allowed")
         } 
         await res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }
})
module.exports = router