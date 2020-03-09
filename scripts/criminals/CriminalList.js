import { Criminal } from "./Criminal.js";
import { useCriminals } from "./CriminalProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    const allCriminals = useCriminals()

    for (const criminalObject of allCriminals) {
        contentTarget.innerHTML += Criminal(criminalObject)
    }
} 


