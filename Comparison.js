const x=10;
const y=25;
const z=10;
console.log(x===y);
//=== used for same type and same value//
console.log(x==y);
//same value//
function printer(a){
    console.log(a);

}
printer(x!=y);
printer(x>y);
printer(x<y);
printer(x>y?"yes":"no");
printer(x&y);
printer(x||y);
printer(x^y);