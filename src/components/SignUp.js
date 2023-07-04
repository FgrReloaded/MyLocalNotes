import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';



const SignUp = (props) => {
<<<<<<< HEAD
    const host = process.env.REACT_APP_VIEW
=======
    const host = process.env.REACT_APP_HOST
>>>>>>> 9ec6843b1263b30d9dc2682fcac72a38bb8011ec
    const [loading, setLoading] = useState(false)
    const [lock, setLock] = useState(true)
    let history = useHistory();
    const [credential, setCredential] = useState({ name: "", email: "", password: "", cpassword: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { name, email, password, cpassword } = credential;
        if(password !== cpassword){
            setLoading(false);
            props.showAlert('Passwords are not matching', 'warning')
            return
        }
        const response = await fetch(`${host}/api/auth/createuser`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, cpassword })
        });
        const json = await response.json();
        localStorage.setItem('token', json.authToken);
        setLoading(false)
        history.push("/")
        props.showAlert('Account Created Successfully', 'success')
    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="container">
                <div className="login-root">
                    <div className="box-root flex-flex flex-direction--column" style={{ minHeight: "100vh", flexGrow: "1" }}>
                        <div className="loginbackground box-background--white padding-top--64">
                            <div className="loginbackground-gridContainer">
                                <div className="box-root flex-flex" style={{ gridArea: "top / start / 8 / end" }}>
                                    <div className="box-root" style={{ backgroundIimage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", flexGrow: "1" }}>
                                    </div>
                                </div>
                                <div className="box-root flex-flex" style={{ gridArea: "4 / 2 / auto / 5" }}>
                                    <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: "1" }}></div>
                                </div>
                                <div className="box-root flex-flex" style={{ gridArea: "6 / start / auto / 2" }}>
                                    <div className="box-root box-background--blue800" style={{ flexGrow: "1" }}></div>
                                </div>
                                <div className="box-root flex-flex" style={{ gridArea: "7 / start / auto / 4" }}>
                                    <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: "1" }}></div>
                                </div>
                                <div className="box-root flex-flex" style={{ gridArea: "8 / 4 / auto / 6" }}>
                                    <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: "1" }}></div>
                                </div>
                                <div className="box-root flex-flex" style={{ gridArea: "2 / 15 / auto / end" }}>
                                    <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: "1" }}></div>
                                </div>
                                <div className="box-root flex-flex" style={{ gridArea: "3 / 14 / auto / end" }}>
                                    <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: "1" }}></div>
                                </div>
                                <div className="box-root flex-flex" style={{ gridArea: "4 / 17 / auto / 20" }}>
                                    <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: "1" }}></div>
                                </div>
                                <div className="box-root flex-flex" style={{ gridArea: "5 / 14 / auto / 17" }}>
                                    <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: "1" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: "1", zIndex: "9" }}>
                            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                                <h1><a href="/" rel="dofollow">MyLocalNotes</a></h1>
                            </div>
                            <div className="formbg-outer">
                                <div className="formbg">
                                    <div className="formbg-inner padding-horizontal--48">
                                        <span className="padding-bottom--15">Register your account</span>
                                        <form id="stripe-login" onSubmit={handleSubmit} >
                                            <div className="field padding-bottom--24">
                                                <label htmlFor="name">Your Name</label>
                                                <input type="text" value={credential.name} onChange={onChange} name="name" />
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" value={credential.email} onChange={onChange} name="email" />
                                            </div>
                                            <div className="field position-relative padding-bottom--24">
                                                <div className="grid--50-50">
                                                    <label htmlFor="password">Password</label>
                                                </div>
                                                <input type={lock?"password":"text"} value={credential.password} onChange={onChange} name="password" />
                                                {
                                                    lock?<img src='/lock.png' alt='lock' className='lock sign-lock' onClick={()=>setLock(!lock)} />:<img src='/unlock.png' alt='unlock' className='lock sign-lock' onClick={()=>setLock(!lock)} />
                                                }
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <div className="grid--50-50">
                                                    <label htmlFor="cpassword">Confirm Password</label>
                                                </div>
                                                <input type={lock?"password":"text"} value={credential.cpassword} onChange={onChange} name="cpassword" />
                                            </div>
                                            <div className="field padding-bottom--24">
                                                <button className='account' type="submit" name="submit">{loading ? <div className='lds-dual-ring'></div> : "Create Account"}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="footer-link padding-top--24">
                                    <span>Already have an account? <Link to="/login">Login</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
