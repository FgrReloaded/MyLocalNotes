import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import { useHistory } from 'react-router-dom';
const About = () => {
    
    let history = useHistory();
    const context = useContext(noteContext);
    const { user, getUser, getNotes, notes } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
            getUser();
        } else {
            history.push('/login')
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="container">
                <h3 className='text-center'>MyLocalNotes Web App</h3>
                <h5 className='text-center'>(Developed and Designed by FgrReloaded using React JS)</h5>
                <hr />
                <div className="row text-center">
                    <div className="col-12">
                        <h4>This Is User Section</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 col-12">
                       <h3>Name: {user.name}</h3>
                       <h3>Email: {user.email}</h3>
                       <h3>Total Notes: {notes.length}</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        <h4>This Is MyLocalNotes Section</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12">
                      <p>This MyLocalNotes Web App was created by FgrReloaded.</p>
                      <p>He started this project on September 26 and this project was finally created on October 7.</p>
                      <p>With the time the project will be added with more features and code will be updated directly on github.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

