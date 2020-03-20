import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { Witness } from "./Witness.js"

const contentTarget = document.querySelector(".witnessesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allWitnessesClicked", customEvent => {
    render()
})

const render = () => {
    getWitnesses().then(() => {
        const alltheWitnesses = useWitnesses()

        contentTarget.innerHTML = alltheWitnesses.map(
            currentWitnessObject => {
                return Witness(currentWitnessObject)
            }
        ).join("")
    })
}

eventHub.addEventListener("allWitnessesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    } else {
        contentTarget.classList.add("invisible")
    }
})