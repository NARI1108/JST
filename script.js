const number=[1,2,3,2,4];
console.log(number.indexOf(1));
console.log(number.indexOf(3));
console.log(number.indexOf(5));
console.log(number.indexOf("2"))
console.log(number.indexOf(2));
console.log(number.lastIndexOf(2));
const order =[5,2,3,45,5];
if(order.lastIndexOf(45) !== 3){
    console.log("yes");
}else{
console.log("No");}
console.log(order.includes(11));
console.log(order.indexOf(5,1));
const Courses=[
    {id:1 , name:"a"},
    {id:2 , name:"b"}
]
const result = Courses.find(function(course){
    return course.name === "v";
});
console.log(result);
const deads=[
    {id:1 , name:"c"},
    {id:2 , name:"g"}
]
const die = deads.findIndex(function(dead)
{
    return dead.name ==="g";
}
)
console.log(die);