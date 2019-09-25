let getLongestWord = (array) => {
    let longestStr = 0;
    array.forEach(string => {
        if (string.length > longestStr) {
            longestStr = string.length;
        }
    });
    return longestStr;
}

let getNumWords = (array) => {
    return array.length;
}

let wordLines = (char, word, x) => {
    let howManySpaces = x - word.length - 2;
    let spacesAtEndOfLine = "";
    for (let count = 0; count < howManySpaces; count++) {
        spacesAtEndOfLine += " "
    }
    console.log(`${char} ${word}${spacesAtEndOfLine} ${char}`);
    return (`${char} ${word}${spacesAtEndOfLine} ${char}`);
};

let FirstAndLastLines = (char, x) => {
    let line = "";
    for (let count = 0; count < x; count++) {
        line += char;
    }
    console.log(line);
    return line;
};

const frame = (text, char) => {
    let longestWord = getLongestWord(text) + 2;
    // let numWords = getNumWords(text) + 2;
    let res = ""
    res += `${FirstAndLastLines(char, longestWord+2)}\n`;
    text.forEach(word => {
        res += `${wordLines(char, word, longestWord)}\n`;
    });
    
    res += `${FirstAndLastLines(char, longestWord+2)}`;
    return res;
}

console.log(frame(["helo", "my", "friend", "hippity"], '*'));
frame(['This is a very long single frame'], "X")