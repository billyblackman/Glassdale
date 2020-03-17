const contentTarget = document.querySelector(".noteForm__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNoteForm") {
        //Create a custom event to tell any interested component that the user wants to see the notes
        const notesButtonClickEvent = new CustomEvent("noteFormButtonClicked")

        //Dispatch button click event to event hub
        eventHub.dispatchEvent(notesButtonClickEvent)
    }
})

export const DisplayNoteFormButton = () => {
    contentTarget.innerHTML = "<button id='showNoteForm'>Show Note Form</button>"
}