export const Criminal = (criminalObject) => {
    return `
    <div class="criminalObject">
        <h4>${criminalObject.name}</h4>
        <p>Age: ${criminalObject.age}</p>
        <p>Conviction: ${criminalObject.conviction}</p>
        <p>Arresting Officer: ${criminalObject.arrestingOfficer}</p>
        <p>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
        <button id="associates--${criminalObject.id}">Show Associates</button>
    </div>
    `
}