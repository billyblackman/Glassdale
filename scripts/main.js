// main.js
import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
import ConvictionSelect from './convictions/ConvictionSelect.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import NoteForm from './notes/NoteForm.js'
import { DisplayNoteFormButton } from './notes/DisplayNoteFormButton.js'
import { DisplayNotesButton } from './notes/DisplaySavedNotesButton.js'
import './notes/Notelist.js'

getCriminals().then(
    /*
        Now that you have the data, what
        component should be rendered?
    */
    () => CriminalList()
    
)



getConvictions().then(
    /*
        Now that you have the data, what
        component should be rendered?
    */
    () => ConvictionSelect()
)

NoteForm()
DisplayNoteFormButton()
DisplayNotesButton()