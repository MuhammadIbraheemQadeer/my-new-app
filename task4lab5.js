
function calculateInterest(principal, rate, time) {
    const Interest=(principal * rate * time) / 100;
return (Interest);
}
console.log(calculateInterest(1000, 5, 1)); 

const calculateInterestArrow = (principal, rate = 5, time = 1) => (principal * rate * time) / 100;   
console.log(calculateInterestArrow(1000)); 

