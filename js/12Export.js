export function add (a, b) {
    return a + b;
}

export function multiply (a, b) {
    return a * b;
}

const numbers = [2, 17, -100, -23, -135, 9, 21, 8, 31];

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

function smallestElementInArray (array) {
    let smallestElement = array [0];

    // for (let element of array) {
    //     if (element < smallestElement) {
    //         smallestElement = element;
    //     }
    // }

    for (let i = 0; i < array.length; i++) {
        let element = array [i];
        if (element < smallestElement) {
            smallestElement = element;
        }
    }
    return smallestElement;
}
console.log (smallestElementInArray (numbers));