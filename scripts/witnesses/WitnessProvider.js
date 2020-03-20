let witnesses = []

export const useWitnesses = () => witnesses.slice()

export const getWitnesses = () => {
/*
    Load database state into application state with a fetch().
    Make sure the last then() updates the witnesses array
*/
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(
            parsedWitnesses => {
                console.table(parsedWitnesses)
                witnesses = parsedWitnesses
            }
        )
}