
const first = [{id:1}];
const second = [5,6,7,8];
const combined = first.concat(second);
first[0].id=10
console.log(combined);
console.log(first);