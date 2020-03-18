const contentTarget = document.querySelector(".notes__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllNotes") {
        //Create a custom event to tell any interested component that the user wants to see all the notes
        const displayAllNotesEvent = new CustomEvent("allNotesClicked")

        eventHub.dispatchEvent(displayAllNotesEvent)
    }
})

export const DisplayNotesButton = () => {
    contentTarget.innerHTML = "<button id='showAllNotes'>Show All Notes</button>"
}

