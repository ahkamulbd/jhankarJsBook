export function add (a, b) {
    return a + b;
}

export function multiply (a, b) {
    return a * b;
}

const numbers = [2, 17, 100, -23, 35, 9, 21, 8, 31];

// export const maxElement = Math.max (...numbers);

export function greaterNumber (array) {
    let maxElement = numbers [0];

    for (let number of array) {
        if (number > maxElement) {
            maxElement = number;
        }
    }
    return maxElement;
}
// console.log (greaterNumber (numbers));