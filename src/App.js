import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import NoteState from './context/notes/noteState';
import MyNotes from './components/MyNotes';
import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import { toast } from 'react-toastify/dist/react-toastify';
import Forgot from './components/Forgot';
import { toast } from 'react-toastify';

function App() {
  const showAlert = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "warning") {
      toast.warning(message, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "error") {
      toast.error(message, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info(message, {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const [logo, setLogo] = useState(null)
  const [cross, setCross] = useState(null)
  const [ul, setUl] = useState('container')
  const toggle = () => {

    if (logo !== 'nav-icon') {
      setCross('cross')
      setLogo('nav-icon')
      setUl('icon')
    }
    else {
      setCross(null)
      setLogo(null)
      setUl('container')
    }
  }
  const [formStyle, setFormStyle] = useState('none')
  const [boxStyle, setBoxStyle] = useState('flex')
  const cancelNote = () => {
    if (formStyle !== 'none') {
      setFormStyle('none')
      setBoxStyle('flex')
    }
  }


  return (
    <>
      <NoteState>
        <Router>
          <Navbar toggle={toggle} cross={cross} logo={logo} ul={ul} />
          <Alert />
          <Switch>
            <Route exact path='/'>
              <Home formStyle={formStyle} boxStyle={boxStyle} cancelNote={cancelNote} showAlert={showAlert} />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/mynotes'>
              <MyNotes showAlert={showAlert} />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <SignUp showAlert={showAlert} />
            </Route>
            <Route exact path="/forgot">
              <Forgot showAlert={showAlert} />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
