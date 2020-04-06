/*
 *   officerSelect component that renders a select HTML element
 *   which lists all officers in the Glassdale PD API
 */
import { useOfficers } from "./OfficerProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")

// Get a reference to DOM element where event will happen and be heard
const eventHub = document.querySelector(".container")

// Add event listener and dispatch custom event
contentTarget.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        const theOfficerThatWasChosen = changeEvent.target.value

        const officerChosenEvent = new CustomEvent("officerChosen", {
            detail: {
                chosenOfficer: theOfficerThatWasChosen
            }
        })

// Dispatch the custom event
        eventHub.dispatchEvent(officerChosenEvent)
    }
})



const officerSelect = () => {
    // Get all officers from application state
    const officers = useOfficers()

    const render = officersCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the officersCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${
                    officers.map(officer => {
                        return `<option>${officer.name}</option>`
                    })
                }
            </select>
        `
    }

    render(officers)
}

export default officerSelect