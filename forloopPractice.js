const arrayPuzzle = "War is always the answer. Mahatma Ghandi";
console.log(arrayPuzzle);

makePuzzleArray(arrayPuzzle);

function makePuzzleArray(string) {
    let filteredString = "";
    for (let i = 0; i < string.length; i++) {
        let x = string.indexOf("a");
            if (x !== -1) {
            string = string.substring(0,x) + "-" + string.substring(x+1);
            }
        x = string.indexOf("e");
        if (x !== -1) {
            string = string.substring(0,x) + "-" + string.substring(x+1);
            }
        x = string.indexOf("i");
        if (x !== -1) {
            string = string.substring(0,x) + "-" + string.substring(x+1);
            }
        x = string.indexOf("o");
        if (x !== -1) {
            string = string.substring(0,x) + "-" + string.substring(x+1);
            }
        x = string.indexOf("u");
        if (x !== -1) {
            string = string.substring(0,x) + "-" + string.substring(x+1);
            }
    }

    console.log(string);


}