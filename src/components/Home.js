import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';
import {Link} from 'react-router-dom'
export const Home = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const handleClick= (e)=> {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert('Note Added Successfully', 'success')
    }
    const handleChange= (e)=> {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        
        <>
            <div className="container m-auto">
                <div className="row">
                    <div className="col-12 my-4">
                        <h3 className="text-center add-your-text">
                            Add Your Notes Here
                        </h3>
                    </div>
                </div>
                <div className="row" id="scale-2" style={{display: `${props.boxStyle}`}}>
                    <div className="col-8 m-auto">
                        <div className="box text-center">
                            <div><Link className="btn btn-outline-primary m-auto" to={localStorage.getItem('token') ? '/' : '/login'} id="addNotes" onClick={props.hover} >Add Notes</Link></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 m-auto">
                        <form action="#" id="form" style={{display: `${props.formStyle}`}} >
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" value={note.title} name='title' placeholder='Enter Title' className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Your Notes</label>
                                <textarea className="form-control" value={note.description} onChange={handleChange} name='description' id="validationTextarea" placeholder="Enter Your Notes Here"
                                    rows="8" required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="tag">Tags</label>
                                <input type="text" className="form-control" value={note.tag} onChange={handleChange} placeholder='Tags' name='tag' />
                            </div>
                            <button disabled={note.title.length < 1 || note.description.length < 1} type="submit" className="btn btn-outline-info" onClick={handleClick}>Add Note</button>
                            <button disabled={note.title.length < 1 || note.description.length < 1} type="reset" className="btn btn-outline-success mx-2">Reset</button>
                            <button className="btn btn-outline-danger float-right" id="cancelNotes" onClick={props.cancelNote}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
