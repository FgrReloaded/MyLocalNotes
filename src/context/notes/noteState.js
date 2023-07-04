import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
<<<<<<< HEAD
    const host = process.env.REACT_APP_VIEW
=======
    const host = process.env.REACT_APP_HOST
>>>>>>> 9ec6843b1263b30d9dc2682fcac72a38bb8011ec
    const notesInitial = [];
    const userInitial = [];
    const [notes, setNotes] = useState(notesInitial);
    const [viewN, setViewN] = useState(notesInitial);
    const [user, setUser] = useState(userInitial);
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
           method: 'GET',
           headers: {
               'auth-token': localStorage.getItem('token')
           },
       });
       const json = await response.json();
       setNotes(json);
    }
    const getUser = async () => {
        // API call
        const response = await fetch(`${host}/api/auth/userdata`, {
           method: 'POST',
           headers: {
               'auth-token': localStorage.getItem('token')
           },
       });
       const json = await response.json();
       setUser(json)

    }
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnotes`, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'auth-token': localStorage.getItem('token')
           },
           body: JSON.stringify({title, description, tag})
       });

       const note = await response.json();
        // Adding Note
        setNotes(notes.concat(note))
    }


    // Delete Note
    const deleteNote = async (id) => {
        //API call
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        await response.json();
        const newNote = notes.filter((note)=> {return note._id !== id});
        setNotes(newNote);

    }
    const viewNotes = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/viewnotes/${id}`, {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json',
               'auth-token': localStorage.getItem('token')
           },
       });
       const json = await response.json();
       setViewN(json);
    }
    // Edit Note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        });
        await response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let i = 0; i < newNotes.length; i++) {
            const element = newNotes[i];
            if(element._id === id){
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }


    return (
        <NoteContext.Provider value={{ notes, user, viewN,addNote, deleteNote, editNote, getNotes, viewNotes, getUser }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
