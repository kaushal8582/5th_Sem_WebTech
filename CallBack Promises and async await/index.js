// CallBack ✅

// function getData(callback) {
//   setTimeout(() => {
//     console.log("Data received!");
//     callback();
//   }, 2000); // Simulates a 2-second delay
// }

// function processData() {
//   console.log("Processing data...");
// }

// getData(processData); // Output: "Data received!" then "Processing data..."

// function sum(a){
//     setTimeout(()=>{
//         console.log("Data received!");
//         console.log(a);
//     },2000)
// }

// let b=5;
// sum(b);

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("kaushal", sayGoodbye);

//  Promises ✅

// let promise = new Promise(function (resolve, reject) {
//   let success = true;
//   if (success) {
//     resolve("Promise fulfilled!");
//   } else {
//     reject("Promise rejected!");
//   }
// });


let promise = new Promise(function(resolve,reject){
    let success = false;    
    if(success){
        resolve("Promise fullfilled!")
    }else{
        reject("Promise rejected!")
    }
})


promise.then((msg)=>console.log(msg)
).catch((err)=>console.log(err))