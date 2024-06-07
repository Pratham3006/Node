var a="Pratham";
console.log(a);
var a="Pratham New"
console.log(a);
const x=90;
//As we can a is globally scoped meaning can be used again,let or const can be done such//
let b=67;
function printer(){
    console.log(b)
    console.log(a);
    console.log(x);
}
//As we can see that b which scoped out of the function can be scoped inside the function//
printer();