import { useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

//Add event listener to listen for when the known associates button is clicked
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        //Get the id of the criminal that was clicked
        const [wontuse, criminalId] = clickEvent.target.id.split("--")

        //Let all interested components know that a known associates button was clicked
        const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
            //Tell interested components the id of the criminal whose button was clicked
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(showAssociatesEvent)
    }
})


eventHub.addEventListener("crimeChosen", event => {
    // Filter the list of criminal who committed the crime

    // Get the criminals
    const criminals = useCriminals()

    // Get the crime
    const theCrimeThatWasChosen = event.detail.chosenCrime

    // Look at all of the criminals and determine if each one is a vandal
    const guiltyCriminals = criminals.filter(criminal => {
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false 
    })

    // Clear inner HTML of the criminal list
    contentTarget.innerHTML = ""

    // Build it up again
    for (const singleCriminal of guiltyCriminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
})

export const CriminalList = () => {
    const criminals = useCriminals()
    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}

