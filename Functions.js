//Write a function greet(name) that takes a person's name as a parameter and returns a greeting message. For example, calling greet("Alice") should return "Hello, Alice!".//
const name=(x)=>{
    var a=`Hello ${x}`;
    console.log(a);
}
name("Pratham")
//Write a function calculateArea(radius) that takes the radius of a circle as a parameter and returns the area of the circle. Use the formula area = π * radius^2. (You can use Math.PI for π).//
function calculateArea(radius){
    const cal=parseFloat(Math.PI*radius*radius);
    console.log(cal)
}
calculateArea(2.2)
//Description: Write a function findMax(a, b, c) that takes three numbers as parameters and returns the maximum of the three numbers.//
function findMax(a, b, c){
    const first=Math.max(a,b);
    const second=Math.max(first,c);
    console.log(second)
}
findMax(10,20,7);
// Write a function celsiusToFahrenheit(celsius) that takes a temperature in Celsius and converts it to Fahrenheit using the formula fahrenheit = celsius * 9/5 + 32.//
const celsiusToFahrenheit=(celsius)=>{
    const fahrenheit = celsius * 9/5 + 32;
    console.log(fahrenheit)
}
celsiusToFahrenheit(31);
//Write a function isEven(number) that takes a number as a parameter and returns true if the number is even, and false if it is odd.//
const a=function isEven(number){
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }

}
console.log(a(2));
//Write a function sumArray(arr) that takes an array of numbers as a parameter and returns the sum of all the elements in the array.//
function sum(a){
    length=a.length;
    let sum=0;
    for(let i=0;i<length;i++){
        sum=sum+a[i];
    }
    return sum;
}
const r=[10,20,30,40]
console.log(sum(r));
//Write a function findDuplicates(arr) that takes an array as a parameter and returns a new array containing all the duplicate elements in the original array.//
function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};
    for (let num of arr) {
        if (seen[num]) {
            duplicates.push(num);
        } else {
            seen[num] = true;
        }
    }
    return duplicates;
}
console.log(findDuplicates([1, 2, 3, 4, 2, 5, 3, 6])); 
