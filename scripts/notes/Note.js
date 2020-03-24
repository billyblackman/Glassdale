export const Note = (noteObject, criminalObject) => {
    return `
        <div class="noteObject">
            <h2>${criminalObject.name}</h2>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <p>
                <button id="deleteNote--${noteObject.id}">Delete Note</button>
            </p>
        </div>
    `
}