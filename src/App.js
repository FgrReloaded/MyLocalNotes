import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/noteState';
import MyNotes from './components/MyNotes';
import { useState } from 'react';
function App() {
  const [logo, setLogo] = useState(null)
  const [cross, setCross] = useState(null)
  const [ul, setUl] = useState('container')
  const toggle = ()=> {
    
    if(logo !== 'nav-icon'){
      setCross('cross')
      setLogo('nav-icon')
      setUl('icon')
    }  
    else{
      setCross(null)
      setLogo(null)
      setUl('container')
    }
  }
  const [formStyle, setFormStyle] = useState('none') 
  const [boxStyle, setBoxStyle] = useState('flex')
  const hover = ()=>{
      if(formStyle !== 'block') {
      setFormStyle('block')
      setBoxStyle('none')
      }
  }
  const cancelNote = ()=> {
    if(formStyle !== 'none') {
      setFormStyle('none')
      setBoxStyle('flex')
      }
  }


  return (
    <>
    <NoteState>
      <Router>
        <Navbar toggle={toggle} cross={cross} logo={logo} ul={ul} />
        <Switch>
          <Route exact path = '/'>
            <Home hover={hover} formStyle={formStyle} boxStyle={boxStyle} cancelNote={cancelNote} />
          </Route>
          <Route exact path = '/about'>
            <About />
          </Route>
          <Route exact path = '/mynotes'>
            <MyNotes/>
          </Route>
        </Switch>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
