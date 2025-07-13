

//1.Write a function calculateArea that takes the length and width of a rectangle as parameters and returns the area. Use the formula: Area = Length × Width.
function calculateArea(l, w){
    return l * w;
}
let l = 23;
let w = 14;
console.log(`The area of the Rectangle is ${calculateArea(l, w)}`);
// //2.Write a function calculateCircumference that takes the radius of a circle as a parameter and returns the circumference. Use the formula: Circumference = 2 × π × Radius.
function calculateCircumference(readius){
    const pi = 3.14;
    return 2 * pi * readius;        

}
let readius = 7;
console.log(`The circumference of the circle is ${calculateCircumference(readius)}`);
//3.Write a function calculateVolume that takes the length, width, and height of a rectangular prism as parameters and returns the volume. Use the formula: Volume = Length × Width × Height.
function calculateVolume(l, w, h){
    return l * w * h;
}   
let l1 = 5;
let w1 = 4;

let h1 = 3;
console.log(`The volume of the rectangular prism is ${calculateVolume(l1, w1, h1)}`);
//4.Write a function calculatePerimeter that takes the length and width of a rectangle as parameters and returns the perimeter. Use the formula: Perimeter = 2 × (Length + Width).
function calculatePerimeter(l, w){
    return 2 * (l + w);
}
let l2 = 10;
let w2 = 5;
console.log(`The perimeter of the rectangle is ${calculatePerimeter(l2, w2)}`);
// Create a function isAdult that takes an age as a parameter and returns true if the age is 18 or older, and false otherwise.
function isAdult(age){
    if(age >=18){
        return age;
    }else{
        return false;
    }
}
isAdult(20) ? console.log("You are an adult") : console.log("You are not an adult");
// Other excercises

