export const Witness = witnessObject => {
    return `
    <div class="witnessObject">
        <h4>${witnessObject.name}</h4>
        <p>Statement: ${witnessObject.statements}</p>
    </div>
    `
}