//Arrow fun: is shorter and more concise way to write fun.
//its ideal for dhort, simple fun and provide cleaner code, specialy when dealing with callback and functions that needs to preserve this.
//dont need to write fun keyword, return, curly brac..


//syntax: with parameter
const functionName = (parameter) => {
    //fun body
};


//without parameter
const greet = () => {
    console.log('hello Abhi!');
}
greet();// op: hello Abhi!


//with one parameter
const square = x => x*x;
console.log(square(2));

//with multiple parameter
const add = (a1,a2,a3) => a1+a2+a3;
console.log(add(2,4,6));

const call = (b1,b2,b3) => b1+b2-b3;
console.log(call(80,30,10));

//with a block opf code
const cal = (d1,d2,d3,d4) => {
    const result = d1+d2*d3-d4;
    return result;
};
console.log(cal(30,900,70,9));