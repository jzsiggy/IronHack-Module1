const getHours = (nbr) => {
    return Math.floor(nbr);
}

const getMins = (nbr) => {
    let decimal = nbr - Math.floor(nbr);
    if (decimal * 60 - Math.floor(decimal * 60) < 0.999) {
        return Math.floor(decimal * 60);
    } else {
        return Math.floor(decimal * 60) + 1;
    }
}

const whatTimeIsIt = function(angle) {
    let resultInDecimal = angle / 30;
    // console.log(resultInDecimal);
    let hours = getHours(resultInDecimal);
    let mins = getMins(resultInDecimal);

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (mins < 10) {
        mins = `0${mins}`;
    }
    
    return (`${hours}:${mins}`)
}

console.log(whatTimeIsIt(40));
