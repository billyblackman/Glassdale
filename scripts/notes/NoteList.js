import { getNotes, useNotes, deleteNote } from "./NoteProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

//State variables

let visibility = false

//EVENT HANDLERS

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    render()
})

//Display notes event

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    } else {
        contentTarget.classList.add("invisible")
    }
})

//Delete note event

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [notUsing, noteId] = clickEvent.target.id.split("--")
        deleteNote(noteId)
    }
})


//End of event handlers

const render = () => {

    if (visibility) {
        contentTarget.classList.remove("invisible")
    } else {
        contentTarget.classList.add("invisible")
    }

    getNotes()
        .then(() => {
        const allTheNotes = useNotes().reverse()
        const allTheCriminals = useCriminals()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {

                //Find the criminal for the current note
                const theFoundCriminal = allTheCriminals.find(
                    currentCriminalObject => {
                        return currentNoteObject.criminal === currentCriminalObject.id
                    }
                )

                return Note(currentNoteObject, theFoundCriminal)
            }
        ).join("")
    })
}

export const NotesList = () => {
    render()
}