//promise: is like a promise, it can either-
//1.fullfill: they keep the promises and give u what u want
//2.reject: break the promises
//3.pending: they are still working on it.

// it is used to handletask that take time, like fetching data from internet

//.then() : for success
//.catch(): for error

//ex of making tea:

const makeTea = new Promise((resolve, reject) => {
    const waterBoiled = true;
    if(waterBoiled) {
        resolve("Tea is ready");
    }else{
        reject("Tea is not ready");
    }
});
//using promises
makeTea
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("error");
    });
