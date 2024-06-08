for(let i=0;i<10;i++){
    console.log(i);
}
let gift=2;
do{
    gift++;
    console.log(gift)
}while(gift<6)
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
//Write a for loop that calculates the sum of all numbers from 1 to 100 and prints the result.//
let sum=0;

for(let i=0;i<=100;i++){
    sum=sum+i;
}
let x=0;
while(x<=100){
    let add=0;
    x++;
    add=add+x;
    console.log(add)

}

console.log(sum)
//Use a while loop to print the multiplication table of a given number (e.g., 5). The table should go from 1 to 10.//
function mul(m){
    let x=0;
    while(x<12){
        x++;
        console.log(m*x);
        
    }
} 
mul(2);
//Write a function that uses a for loop to calculate the factorial of a given number n and returns the result. The factorial of n (denoted as n!) is the product of all positive integers less than or equal to n//
let fact=1

for(let i=6;i>0;i--){
    fact=fact*i;
    console.log(fact);
}

