
for (i=1; i<=10; i++){
    console.log("hello" + i);
}
 // calculating the sum of numbers from 1 to 10
 let sum = 0;
 for (let j = 1; j<= 100; j++){
    sum += j;
 }
 console.log("The sum of numbers from 1 to 100 is: " + sum);
// This code prints "hello" followed by numbers from 1 to 10
let sumi = 0;
for (let m =1; m<=200; m++){
    sumi += m;

}
console.table("The sum of numbers from 1 to 200 is: " + sumi);
// This code calculates the sum of numbers from 1 to 200 and prints it in a table format

//putting even No. from 1 to 10
for (let n = 1; n <= 100; n+= 2){
   console.log("The even numbers from 1 to 100 are: " + n);
}

// Now we will create sqaure of arrays from 0 to 100
let sqaureArray = [];
for (let s=0; s <= 100; s++){
    sqaureArray.push(s * s);
}

console.log("The square of numbers from 0 to 100 are: ");
console.table(sqaureArray);
console.log("These are all the values of square from 0 to 100 in table format");
// now we will create cube of arrays from 0 to 100
let cubeArray = [];
for (let c = 0; c <= 100; c++){
    cubeArray.push(c*c*c);
}
console.log("The cube of numbers from 0 to 100 are: ");
console.table(cubeArray);
console.log("These are all the values of cube from 0 to 100 in table format");
// Now we will create a function that takes an array and returns the sum of its elements



