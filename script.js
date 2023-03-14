 const numbers=[2,1,3];
const sorted = numbers.sort();
console.log(sorted);
sorted.reverse();
console.log(sorted);
///////////////////////////////
const members=[
    {id:1 , name:"html"},
    {id:2 , name:"css"}
];
members.sort(function(a,b){
    let nameA=a.name.toLowerCase;
    let nameB=b.name.toLowerCase;
    if(nameA>nameB)return 1;
    if(nameB>nameA)return -1;
    return 0;
});
console.log(members);
//////////////////////////