function addNumber (number1, number2) {
    const sum = number1 + number2;

    return `Sum of the Numbers: ${sum}`;
}
// console.log (addNumber (6, 8));
// console.log (addNumber (1012, 336));

function moneyReturn (principal, rate, year) {
    const interest = principal * (rate / 100);
    const totalInterestAfterPeriod = interest * year;
    const returnAfterPeriod = principal + totalInterestAfterPeriod;
    
    return returnAfterPeriod;
}
// console.log (moneyReturn (4500, 8, 10));
// console.log (moneyReturn (50000, 10, 5));
// console.log (moneyReturn (50000, 10, 10));