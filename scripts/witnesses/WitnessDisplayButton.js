const contentTarget = document.querySelector(".witnesses__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllWitnesses") {
        //Create a custom event to tell any interested component that the user wants to see all the notes
        const displayAllWitnessesEvent = new CustomEvent("allWitnessesClicked")

        eventHub.dispatchEvent(displayAllWitnessesEvent)
    }
})

export const DisplayWitnessesButton = () => {
    contentTarget.innerHTML = "<button id='showAllWitnesses'>Show All Witnesses</button>"
}

