// For_each method
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number * 2);
    }   
);  
 
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach((name)=> {
    console.log(`Hello, ${name}`);
}
);
function sendWelcomeEmail(email){
    console.log(`Welecom to our Platfrom ${email}`);
}
const users = [
    { name: 'Alice', email: 'Alice@yopmail.com'},
    { name: 'Bob', email: ' Bob@abc.com'},
    { name: 'Charlie', email: 'Charlie@charlie.com'},
];
users.forEach((users) => {
    sendWelcomeEmail(users.email);
});

// for each method to iterate over an array of objects
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
];
products.forEach((products) =>{
    console.log(`Products: ${products.name}, Price: ${products.price}`);
});


