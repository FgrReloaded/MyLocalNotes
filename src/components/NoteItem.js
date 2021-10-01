import React from 'react'

const NoteItem = (props) => {
    const {note} = props;
    return (
        <>
            {note.title}
            {note.description}
            {note.tag}
        </>
    )
}

export default NoteItem
