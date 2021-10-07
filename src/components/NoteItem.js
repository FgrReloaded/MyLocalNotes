import React, { useContext, useRef } from 'react';
import noteContext from '../context/notes/noteContext';
import open from './open.png';
import edit from './edit.png';
import Delete from './delete.png';

const NoteItem = (props) => {
  const ref1 = useRef(null)
  const context = useContext(noteContext);
  const { deleteNote, viewNotes } = context;
  const { note, updateNote, view } = props;
  const title = note.title;
  const CapTitle = title.charAt(0).toUpperCase()+title.slice(1);
  return (
    <>
      <div className="card text-left py-3">
        <div className="card-body text-center">
          <h4 className="card-title">{CapTitle}</h4>
          <img src={open} className='img mx-3 my-4' onClick={()=> { viewNotes(note._id); ref1.current.click() }}  />
          <img src={edit} className='img mx-3 my-4' onClick={() => { updateNote(note) }} />
          <img src={Delete} className='img mx-3 my-4' onClick={() => { deleteNote(note._id); props.showAlert('Note Deleted Successfully', 'success') }} />
        </div>
      </div>
      <button type="button" ref={ref1} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                Launch demo modal
            </button>
            <div className="modal fade w-100" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title " id="exampleModalLabel">{view.title}</h5>
                            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            {view.description}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default NoteItem
