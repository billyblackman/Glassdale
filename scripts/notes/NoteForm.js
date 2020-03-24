import { saveNote } from "./NoteProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

//State variables

let visibility = false

//Event Handlers

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    } else {
        contentTarget.classList.add("invisible")
    }
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const criminalId = document.querySelector("#criminalDropdown").value

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminal: parseInt(criminalId),
            timestamp: Date.now()
        }

        saveNote(newNote)
    }
})



const render = () => {
    contentTarget.classList.add("invisible")
    const allCriminals = useCriminals()

    contentTarget.innerHTML = `
        <fieldset>
            <label for="noteText">Note:</label>
            <input type="text" id="noteText">
        </fieldset>
        <fieldset>
            <label for="criminal">Criminal:</label>
            <select id="criminalDropdown">
                <option value="0">Choose a criminal...</option>
                ${
                    allCriminals.map(
                        (currentCriminalObject => {
                            return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
                        })
                    )
                }
            </select>
        </fieldset>
        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    getCriminals().then(render())
}

export default NoteForm