import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Forgot = (props) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState(null)
    const [code, setCode] = useState(null)
    const [verify, setVerify] = useState(false)
    const host = process.env.REACT_APP_VIEW
    const random = () => {
        return Math.floor(100000 + Math.random() * 900000);
    }
    const forgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true)
        const token = random();
        const email = document.getElementById('email').value;
        setEmail(email)
        const res = await fetch(`${host}/api/auth/forgotpassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, token })
        })
        const data = await res.json();
        if (data.success) {
            setLoading(false)
            document.getElementById('email').value=""
            setCode(token);
            props.showAlert('Email sent successfully', "success")
        } else {
            setLoading(false)
            props.showAlert('Email you enter is incorrect', "error")
        }
    }
    const handleReset = (e) => {
        e.preventDefault();
        setLoading(true)
        const codeBox = document.getElementById('code').value;
        if (String(code) === String(codeBox)) {
            props.showAlert('Code verified successfully', "success")
            setVerify(true)
            setLoading(false)
        } else {
            setLoading(false)
            props.showAlert('Code you enter is incorrect', "error")
        }
    }
    const changePassword = async (e) => {
        e.preventDefault();
        setLoading(true)
        const password = document.getElementById('password').value;

        const res = await fetch(`${host}/api/auth/resetpassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json();
        if (data.success) {
            props.showAlert('Password changed successfully', "success")
            setLoading(false)
            history.push('/login')
        } else {
            setLoading(false)
            props.showAlert(data.msg, "error")
        }
    }


    return (
        <>

            <div className="form-gap"></div>
            <div className="container forgot">
                <div className="row m-3">
                    <div className="col-md-4 m-auto col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-body m-auto">
                                <div className="text-center">
                                    <h3><i className="fa fa-lock fa-4x"></i></h3>
                                    <h2 className="text-center">Forgot Password?</h2>
                                    <p>You can reset your password here.</p>
                                    <div className="panel-body">
                                        <form id="register-form" autocomplete="off" className="form">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                                    {
                                                        code ? (!verify?<input id="code" name="code" placeholder="code" className="form-control" type="text" />:null) :
                                                            <input id="email" name="email" placeholder="email address" className="form-control" type="email" />
                                                    }
                                                    {
                                                        verify ? <input id="password" required name="password" placeholder="New password" className="form-control" type="password" /> : null
                                                    }

                                                </div>
                                            </div>
                                            <div className="form-group">
                                                {
                                                    !code ?<button onClick={forgotPassword} name="recover-submit" className="btn btn-lg btn-primary btn-block" type="submit" >{loading?<div className='lds-dual-ring'></div>:"Send Code"}</button>:
                                                        (!verify ?<button onClick={handleReset} name="reset" className="btn btn-lg btn-primary btn-block">{loading?<div className='lds-dual-ring'></div>:"Verify"}</button>:null)
                                                }
                                                {
                                                    verify ? <button onClick={changePassword} name="reset" className="btn btn-lg btn-primary btn-block"  type="submit">{loading?<div className='lds-dual-ring'></div>:"Reset Password"}</button> : null
                                                }
                                            </div>

                                            <input type="hidden" className="hide" name="token" id="token" value="" />
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgot
