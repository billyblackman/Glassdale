import { useCriminals } from "./CriminalProvider.js"

const contentTarget = document.querySelector(".knownAssociatesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("knownAssociatesClicked", customEvent => {
    //Get the criminal id
    const criminalId = customEvent.detail.chosenCriminal

    const criminalArray = useCriminals()

    //Use FIND method, which returns the FIRST (and only the first) item in the array that matches the condition specified
    const iFoundYou = criminalArray.find(
        (currentCriminal) => {
            if (currentCriminal.id === parseInt(criminalId)) {
                return true
            }
            return false
        }
    )

    KnownAssociatesDialog(iFoundYou)

    //Query the DOM for the id of the associates dialog
    const criminalDialog = document.querySelector("#associatesDialog")
    criminalDialog.showModal()
})

export const KnownAssociatesDialog = (criminalObject) => {
    contentTarget.innerHTML = `
        <dialog id="associatesDialog">
            ${
                criminalObject.known_associates.map(
                    (currentAssociate) => {
                        return `<div>${currentAssociate.name}</div>`
                    }
                ).join("")
            }
        </dialog>
    `
}