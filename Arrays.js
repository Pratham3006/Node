const arr=[10,20,30,40];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(a in arr){
    console.log(arr[a]);
}
for(a of arr){
    console.log(a);
}
const u=arr.filter((e)=>{
    return e<20;
})
console.log(u)
const i=arr.reduce((e,e1,e2)=>{
    return e+e1+e2;
})
console.log(i)
const m=arr.map((e)=>{
    return e*e+10;
})
console.log(m);