const circle={
    radius:1,
    draw(){
        console.log("draw");
    }
}
const another ={};
for(let key in circle){
   another[key]=another[key];
}
console.log(another);
const another1 = Object.assign({Color:"red",circle});
console.log(another1);
const another2 ={location:2,...circle};
console.log(another2);
console.log(Math.PI);
console.log(Math.random());
function getRandomArbitrary(max,min){
    return Math.floor( Math.random()*(max-min)+min);
}
console.log(getRandomArbitrary(10,4));
console.log(Math.round(1.2));
console.log(Math.max(1,2,3,4,5,6,7,8,9,0));
console.log(Math.min(1,2,3,4,5,6,67,7,8));
console.log(Math.abs(-22));
