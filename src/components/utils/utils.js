function isValidNumber(e) {
    if (isNaN(parseInt(e.key, 10))) {
        e.preventDefault()
    } else {
        return true
    }

}

export default isValidNumber