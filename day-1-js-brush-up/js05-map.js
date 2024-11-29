//col of key value pair
//key can be of any type.
//maintain the order of insertion
//provide method of easier manipulation

//creat a map
const myMap = new Map();

//use .set(key, val) to add
myMap.set(1, 'Abhi');
myMap.set(2, 'Ram');
myMap.set(3, 'Hari');

console.log(myMap);

//.get to retrive values
console.log(myMap.get(1));
console.log(myMap.get(3));
//.has to check key exists?
console.log(myMap.has(1)); //true
console.log(myMap.has(4));
