import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
    {
        "_id": "61532a3d2c6ca495dbb4ebbe",
        "user": "61531579cc7c690b8962112c",
        "title": "First Note",
        "description": "This is first note",
        "tag": "Notes",
        "date": "2021-09-28T14:44:13.007Z",
        "__v": 0
      }
    ]
    const [notes, setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;