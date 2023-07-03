import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export const Home = (props) => {
    const context = useContext(noteContext);
    const [anim, setAnim] = useState(false)
    const [value, setValue] = useState("")
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, value, note.tag);
        setNote({ title: "", tag: "" })
        setValue()
        props.showAlert('Note Added Successfully', 'success')
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
        if (e.target.value === "") {
            e.target.parentElement.classList.remove("active-form")
        }else{
            e.target.parentElement.classList.add("active-form")
        }
    }
    const handleQuill = (e)=>{
        setValue(e)
    }
    return (

        <>
            <div className="container mt-4 m-auto mb-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center add-your-text">
                            Add Your Notes Here
                        </h3>
                    </div>
                </div>
                <div className={`row ${anim?"animate":"nonAnimate"}`} id="scale-2">
                    <div className="col-8 m-auto d-flex justify-content-center align-items-center">
                        <div className="box text-center m-auto">
                            <Link className="button-55 text-center m-auto text-decoration-none text-black" onClick={()=>{setAnim(!anim)}} to={localStorage.getItem('token') ? '/' : '/login'}><div className='text-center m-auto'   id="addNotes" >Add Notes</div></Link>
                        </div>
                    </div>
                </div>
                <div className={`row ${anim?"nonAnimate":"animate"}`}>
                    <div className="col-md-8 col-10 m-auto">
                        <form id="form" className='mb-2' >
                            <div className="form-group">
                                <input type="text"  value={note.title} name='title' onChange={handleChange} />
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Your Notes</label>
                                <ReactQuill theme="snow" value={value} onChange={handleQuill} />
                            </div>
                            <div className="form-group">
                                <input type="text"  value={note.tag} onChange={handleChange} name='tag' />
                                <label htmlFor="tag">Tags</label>
                            </div>
                            <button disabled={note.title.length < 1} type="submit" className="button-39" onClick={handleClick}>Add Note</button>
                            <button disabled={note.title.length < 1} onClick={()=>{setNote({title:"", tag:""}); setValue("")}} type="reset" className="button-17 ml-4">Reset</button>
                            <button onClick={(e)=>{setAnim(!anim); e.preventDefault()}} id='cancelNotes' className="float-right button-82-pushable">
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text">
                                    Cancel
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
