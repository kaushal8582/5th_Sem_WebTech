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


// let promise = new Promise(function(resolve,reject){
//     let success = false;    
//     if(success){
//         resolve("Promise fullfilled!")
//     }else{
//         reject("Promise rejected!")
//     }
// })


// Then and Catch ✅

// promise.then((data)=>{
//     console.log("some data for ls college ",data);
// }).catch((error)=>{
//     console.log("data is not found",error);  
// }).finally(()=>{
//     console.log("present");
    
// })

// promises chaining ✅

const promisess = new Promise(function(resolve,reject){
    let find =true;

    if(find){
         resolve("mil gayi ls college");
    }else{
        reject("nahi mili")
    }

})

// promisess.then((data)=>{
//     console.log(data);
//     return "BCA department"
// }).then((data)=>{
//     console.log(data);
//     return "Lab"
// }).then((data)=>{
//     console.log(data);
// })


// Attaching multiple handlers ✅

// promisess.then((data)=>{
//     console.log("first ", data);
// })

// promisess.then((data)=>{
//     console.log("second ",data);
// })

// promisess.then((data)=>{
//     console.log("third ",data);
// })


// Async & await

// async function getAllDataOfLscollege(){
//     await console.log("PRint all ls college Data");
//     console.log("promise");
// }


// Try & Catch ✅

try {
    console.log("prince is good but not in study");
    throw new Error("prince error ")
} catch (error) {
    console.log(error);
}