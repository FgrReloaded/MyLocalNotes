const hover = document.getElementById('addNotes');
const change = document.getElementById('form');
const addNote = document.getElementById('scale-2');
const cancelNote = document.getElementById('cancelNotes');

// hover.onclick = () => {
//     if (change.style.display != 'block') {
//         change.style.display='block'
//     }
//     if (addNote.style.display != 'none') {
//         addNote.style.display = 'none',
//         addNote.style.visibility = 'hidden'
//     }
// }
function hover2(){
    if (change.style.display != 'block') {
        change.style.display='block'
    }
    if (addNote.style.display != 'none') {
        addNote.style.display = 'none',
        addNote.style.visibility = 'hidden'
    }
}
// cancelNote.onclick = () => {
//     if (change.style.display!='none') {
//         change.style.display = 'none'
//     }
//     if (addNote.style.display != 'flex') {
//         addNote.style.display = 'flex',
//         addNote.style.visibility = 'visible'
//     }
// }
function cancelNote2(){
    if (change.style.display!='none') {
        change.style.display = 'none'
    }
    if (addNote.style.display != 'flex') {
        addNote.style.display = 'flex',
        addNote.style.visibility = 'visible'
    }
}