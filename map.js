//map method: create a new array by applying a function to each element of the original array
// Transforms the data without modifying the original array
//
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
];
products.map((products) => {
    console.log(` The price of ${products.name} is: ${products.price}`);
});
