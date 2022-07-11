// ================== moveZeros ======================

// Question:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// ===================================================

// Solution:
const moveZeros = (arr) => {
    const zeros = arr.filter(value => value === 0 );
    let nonZeros = arr.filter(value => value !== 0);
    return nonZeros.concat(zeros);
}

console.log(moveZeros([0, 4, 1, 0, 5, 0, 34, 2, 6, 8, 0]))