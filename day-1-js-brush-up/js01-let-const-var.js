//let: 
//1.mutable-value can be change
//2.block scope- can't be accessed outside the block



//const
//for constant: value can't be change like let
//block scoped
//cant be reassigned


//var
//avoid var inmodern es6
//we can reassign the value
//global scop- can be accesed outside the block
console.log("----var----")
if(true) {
    var x =10;
    x=80;
    console.log("inside block: " + x);
}
console.log("outside  block : "+ x);


console.log("----let----");
if(true){
    let y = 20;
    y=80;
    console.log("inside block: "+ y);
}
//we can reassign the value
//console.log("outside block: "+y); 
//error: y is not defined (because it is out of block)

console.log("----const----")

    const z = 40;
    console.log("inside block: "+ z);
    //we can't reassigned the value
//console.log("outside block: "+z);