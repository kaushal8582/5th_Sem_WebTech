// function 

// function print(){
//     console.log("Today");
//     console.log("Today");
//     console.log("Today");
//     console.log("Today");
// }

// print();
// print();
// print();


// function addTwoNumber(num1,num2){
//     let result = num1+num2;
//     console.log(result);
//     return num1 +num2;
// }


// let result = addTwoNumber(12,23);
// console.log(result);

// function userLogIndin(username="suman"){
//     if(!username){
//         return "plz enter userName."
//     }
//     return `${username} is logedIn`
// }

// console.log(userLogIndin());


// function addToCart(...num1){
//     console.log(num1);
//    let total =  num1.reduce((a,b)=>{
//         return a+b;
//     })
//     console.log(total);
// }

// addToCart(100,200,299,243,23,43,43,44543,254,345)


// let user ={
//     username:"kausahl",
//     prices:199,
//     roll:13,
// }


// let {username,prices,roll} = user

// console.log(user.username,user.prices,user.roll);
// console.log(username,prices,roll);



// function handelObject({username,roll}){
    // console.log(`Username is ${username} and price is ${roll}`);
// }


// console.log(user.username);

// handelObject(user)

// handelObject({
//     username:"Soni",
//     roll:12
// })



function returnArrayValue(getArry){
    return getArry[2];
}

let arr =[1,2,3,4,5,6,7];

console.log(returnArrayValue([9,8,7,6,54,"kausal"]));


