// main.js
import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
import ConvictionSelect from './convictions/ConvictionSelect.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import NoteForm from './notes/NoteForm.js'
import { DisplayNoteFormButton } from './notes/DisplayNoteFormButton.js'
import { DisplayNotesButton } from './notes/DisplaySavedNotesButton.js'
import './notes/Notelist.js'
import './criminals/KnownAssociatesDialog.js'
import { DisplayWitnessesButton } from './witnesses/WitnessDisplayButton.js'
import './witnesses/WitnessList.js'
import { NotesList } from './notes/Notelist.js'
// import { getNotes } from './notes/NoteProvider.js'

getCriminals()
    .then(CriminalList)
    .then(NotesList)
    .then(NoteForm)
    




getConvictions().then(
    () => ConvictionSelect()
)


DisplayNoteFormButton()
DisplayNotesButton()
DisplayWitnessesButton()
