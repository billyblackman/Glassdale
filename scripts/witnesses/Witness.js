export const Witness = witnessObject => {
    return `
    <section class="witness">
    <header>
        <h2>${witnessObject.name}</h2>
    </header>
    <p>${witnessObject.statements}</p>
</section>
    `
}