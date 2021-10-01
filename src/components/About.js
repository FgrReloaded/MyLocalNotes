import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const name = useContext(noteContext)
    return (
        <>
            <h1 className="text-center">This is about {name.name} </h1>
        </>
    )
}

export default About

