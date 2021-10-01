import React, {useContext} from 'react'   
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
const MyNotes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {notes.map((note)=> {
                            return <NoteItem note={note}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyNotes
