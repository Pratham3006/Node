x=10;
y=20;
z=10;
if(x>y){
    console.log(true)
}
else if(x<y){
    console.log(false);
}
else{
    console("nothing")
}
function comparison(x,y){
    function finder(){
    if(x==y){
        return true;
    }
    else if (x<y){
        return true
    }
    else if(x>y){
        return true;
    }
}
if(finder()!=false){
    console.log("BADA")
}
else if(finder()==false){
    console.log("chota")
}
}
comparison(10,20);

const num=10;
switch(num){
    case 20:
        console.log("Big")
    break;
    case 10:
        console.log("OTG")
    break;
    default:
        console.log(null)
}

const ji=(num>8)?"yes":"no";
console.log(ji);