const alphabet = ['a', 'b', 'c', 'd'];
// console.log(...alphabet);

alphabet.push('e');
// console.log(...alphabet);

const index = alphabet.findIndex((item) => item === 'c');

console.log(index);

const editedAlphabet = alphabet.map((item) => ({ text: item }));
console.log(...editedAlphabet);

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    const transNumberArray = numberArray.map((item) => ({ val: item }));

    return transNumberArray;
}

const numberArray = [1, 2, 3];
