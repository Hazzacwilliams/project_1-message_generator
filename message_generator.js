let randomizedMessage = "";
const inspo1 = ["Reach for the stars", "If you want to achieve more", "You are destined for greatness", "To build a wall, first,", "To become who you were meant to be"];
const inspo2 = ["Climb every mountain higher", "Move the river as it flows", "break the concrete under your feet", "smash the moon into oblivion", "eat your vegetables"];
const inspo3 = ["I said reach!", "Then you will know.", "That will be your final test.", "Your story is complete."];

function randNumber(arr){
    return Math.floor(Math.random() * arr.length);
}

randomizedMessage = inspo1[randNumber(inspo1)] + ", " + inspo2[randNumber(inspo2)] + ", " + inspo3[randNumber(inspo3)];

console.log(randomizedMessage);