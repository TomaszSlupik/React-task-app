function isValidNumber(e) {
    if (isNaN(parseInt(e.key, 10))) {
        e.preventDefault()
    } else {
        return true
    }

}

export default isValidNumber

export function parseInputAsNumber (val) {
    if (val === "") return -1;
    return parseInt (val, 10)
}