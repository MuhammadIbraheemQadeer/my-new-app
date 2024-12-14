function checkEligibility(name,age){
    if (age>18) {
    return (`${name}, You are eligible to vote.`);}
    else {
    return (`${name}, You are not eligible to vote.`);}
};

console.log(checkEligibility("Muhammad",15));
console.log(checkEligibility("Ibraheem",20));

const checkEligibilityArrow = (name,age) =>{ if (age>18) {
    return (`${name}, You are eligible to vote.`);}
    else {
    return (`${name}, You are not eligible to vote.`);}
}
console.log(checkEligibility("Muhammad",15));
console.log(checkEligibility("Ibraheem",20));
