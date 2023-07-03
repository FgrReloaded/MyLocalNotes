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
                <h3 className='text-center about-h3'>MyLocalNotes Web App</h3>
                <h5 className='text-center about-h5'>(Developed and Designed by Nitish using React JS)</h5>
                <hr />
                <div className="row text-center">
                    <div className="col-12">
                        <h4 className='about-h4'>This Is User Section</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 col-12 m-auto p-2">
                       <h3  className='about-h3 about-details'>Name: {user.name}</h3>
                       <h3 className='about-h3 about-details'>Email: {user.email}</h3>
                       <h3 className='about-h3 about-details'>Total Notes: {notes.length}</h3>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default About

