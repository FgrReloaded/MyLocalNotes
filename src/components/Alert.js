import React from 'react'
import { ToastContainer } from 'react-toastify/dist/react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Alert = () => {
    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Alert
