import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';


const Navbar = (props) => {
    let location = useLocation();
    if (location.pathname === '/mynotes') {
        document.body.style.background = '#dc3545'
    } else {
        document.body.style.background = null
    }
    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/');
    }
    return (
        <>
            <div className="navbar pt-2 container-fluid">
                <div className={`row w-100 justify-content-between m-auto align-items-center `}>
                    <div id="logo" className={` ${props.logo} col-md-3 col-12 logo order-md-1 order-2 d-flex align-items-center justify-content-center m-md-auto my-4`} >
                        MyLocalNotes</div>
                    <div className="col-md-8 col-12 order-md-2 order-3 d-flex justify-content-between align-items-center">
                        <ul id="ul" className={`nav-${props.ul} flex-column flex-md-row w-100 d-flex justify-content-end my-auto align-items-center`}>
                            <li className="nav-item my-2">
                                <Link className={`nav-items mr-md-5  ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link className={`nav-items mr-md-5 d-${localStorage.getItem('token') ? '' : 'none'} ${location.pathname === '/mynotes' ? 'active' : ''}`} to="/mynotes">My Notes</Link>
                            </li>
                            <li className="nav-item my-2">
                                <Link className={`nav-items mr-md-5 ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            {!localStorage.getItem('token') ? <div>
                                <Link className="button-74 mx-2 my-md-0 my-1" to="/login">Login</Link>
                                <Link className="button-74 mx-2 my-0 my-1" to="/signup" >Signup</Link>
                            </div>
                                : <Link to="/login" className="button-30 text-decoration-none" onClick={handleLogout} >Logout</Link>}
                        </ul>
                    </div>
                    <div className="col-2 align-self-end order-md-3 order-1 ml-auto">
                        <div id="toggle" className={`${props.cross} m-2`} onClick={props.toggle} ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
