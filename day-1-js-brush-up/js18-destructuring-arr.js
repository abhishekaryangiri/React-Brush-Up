//array destructuring is a featur in js that allow to extract values from arrays and assign them to var in a clean and concise way

// basic syntax:
//const [var1, bar2, var3] = array;

//extracting val
const nums = [1,2,3,4,5];
const [a,b,c,d,e] = nums;
console.log(a);
console.log(d);
//skipping items
const [ , second, , , fifth] = nums;
console.log(second);
console.log(fifth);
//rest pattern
const [f, g, ...rest] = nums;
console.log(f);
console.log(g);
console.log(rest);
//swapping var
let x=50;
let y=100;
[x,y] = [y, x];
console.log(x);
console.log(y);

