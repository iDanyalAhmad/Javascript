//filter method: creates a new array 
// containing elements that possesss specific criterial or condition
// It does not modify the original array
// It is used to filter out elements based on a condition
console.log(`Given arrys is:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((numbers) => {
    return numbers % 2 === 0;
});
console.log(`The Even No. in the given arrays is:${evenNumbers}`); // Output: [2, 4, 6, 8, 10]   
const oddNumbers = numbers.filter((numbers) => {
    return numbers % 2 !== 0; 
});
console.log(`The Odd numbers in the given arrays : ${oddNumbers}`); // Output: [1, 3, 5, 7, 9]
