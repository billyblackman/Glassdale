export const Note = noteObject => {
    return `
        <div class="noteObject">
            <h2>${noteObject.criminal}</h2>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
        </div>
    `
}