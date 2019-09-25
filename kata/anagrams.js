let checkIfWordCanBeAnagram = (target, word) => {
    if (target.length != word.length) {
        return 0;
    }
    for (let i = 0; i < target.length; i++) {
        console.log(i, target);
        let letter = target.charAt(i);
        if (word.includes(letter)) {
            word.splice(word.indexOf(letter), 1);
        } else {
            return 0;
        }
    }
    return 1;
};

let checkIfAnagram = (target, array) => {
    let count = 0;
    array.forEach(word => {
        count += checkIfWordCanBeAnagram(target, word);
    });
    return count - 1;
};

function anagramCounter (wordsArray) {
    let counter = 0;
    wordsArray.forEach((word , index) => {
        counter += checkIfAnagram(word, wordsArray);
        wordsArray.splice(index, 1);
    });
    return counter;
}


console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac']));
// console.log(checkIfAnagram("dell", ['dell', 'ledl', 'abc', 'cba']));