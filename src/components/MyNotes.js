import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import { useHistory } from 'react-router-dom';
const MyNotes = (props) => {

    let history = useHistory();
    const context = useContext(noteContext);
    const { notes, getNotes, editNote, viewN, user, getUser } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
            getUser();
        } else {
            history.push('/login')
        }
        // eslint-disable-next-line
    }, [])


    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "Notes" })
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const handleClick = () => {
        refClose.current.click();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        props.showAlert('Note Updated Successfully', 'success')
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="container">
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="#" id="form">
                                    <div className="form-group">
                                        <label htmlFor="etitle">Title</label>
                                        <input type="text" name='etitle' value={note.etitle} minLength={5} required placeholder='Enter Title' className="form-control" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="edescription">Your Notes</label>
                                        <textarea className="form-control" value={note.edescription} minLength={5} min={5} onChange={handleChange} name='edescription' id="validationTextarea" placeholder="Enter Your Notes Here"
                                            rows="8" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="etag">Tags</label>
                                        <input type="text" className="form-control" value={note.etag} required onChange={handleChange} placeholder='Tags' name='etag' />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-auto text-center justify-content-center" style={{ fontSize: '2rem' }}>
                    {notes.length === 0 ? "No Notes To Display" : user.name+"'s Notes" }
                </div>
            </div>
            <div className="container-fluid">
                <div className="row p-2 justify-content-center align-items-center bg-danger flex-wrap">
                    {notes.map((note) => {
                        return <div className="col-md-5 col-lg-3 mx-sm-2 mx-2 mx-md-5 col-sm-6 col-6 my-2" key={note._id}>
                            <NoteItem showAlert={props.showAlert} updateNote={updateNote} note={note} view={viewN} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default MyNotes
