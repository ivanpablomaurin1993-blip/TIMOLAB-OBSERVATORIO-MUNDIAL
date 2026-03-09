function calculateCuriosity(pathLength, timeSpent) {

let curiosityScore = 0;

if(pathLength > 3){
curiosityScore += 40;
}

if(pathLength > 6){
curiosityScore += 30;
}

if(timeSpent > 20){
curiosityScore += 30;
}

return curiosityScore;
}

console.log("TIMOLAB Curiosity Engine Active");