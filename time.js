exports = sec2min = (s) =>{
    return (parseFloat(s)/60).toFixed(1)
}
exports = sec2hr = (s) =>{
    return (parseFloat(s)/3600).toFixed(1)
}
exports = min2sec = (s) =>{
    return (parseFloat(s)*60).toFixed(1)
}
exports = hr2sec = (s) =>{
    return (parseFloat(s)*3600).toFixed(1)
}

