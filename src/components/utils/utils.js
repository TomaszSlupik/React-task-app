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

// export function isValidName (val) {
//     if (val.length > 0) {
//         return true}
//     else {
//         return false
//     }    
// }

// export function isValidHour (val) {
//     if (val >=0 && val < 24) return true
//     return false
// }

// export function isValidMinute (val) {
//     if (val >=0 && val < 60) return true
//     return false
// }

export function hourMinutesToSeconds (h, m) {
    return h * 3600 + m * 60;
}

export function secondsToHourMinuteSecond (s) {
    let seconds = s

    const hour = Math.floor(seconds/ 3600).toString().padStart(2, 0)
    seconds -= hour * 3600

    const minutes = Math.floor(seconds/ 60).toString().padStart(2,0)
   

    seconds -= minutes * 60
    seconds =  seconds.toString().padStart(2,0)
    return `${hour}: ${minutes}: ${seconds}`
}