let randomizedMessage = "";
const inspo1 = ["Reach for the stars"];
const inspo2 = ["Climb every mountain higher"];
const inspo3 = ["I said reach!"];

function randNumber(arr){
    return Math.floor(Math.random() * arr.length);
}

randomizedMessage = inspo1[randNumber(inspo1)] + ", " + inspo2[randNumber(inspo2)] + ", " + inspo3[randNumber(inspo3)];

console.log(randomizedMessage);