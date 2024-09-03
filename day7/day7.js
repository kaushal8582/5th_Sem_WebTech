//scope

// var a =49;

// if(true){
//      a =10
//     let b=20
//     const c =35;
//     console.log(a);
// }

// console.log(a);
// console.log(b);
// console.log(c);



// function one(){
//     const username = "kaushal"
//     function two(){
//         const website = "google meet"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }

// one();


if(true){
    const username = "kaushal";
    if(username=="kaushal"){
        const website = " google meet"
        console.log(username+website);
    }
    if(true){
        const website = " youtube ";
        console.log(website+username);
    }
    // console.log(website);
}
// console.log(username);



console.log(addOne(5));

function addOne(num){
    return num+1
}

// ye ek function hai jo normal function hai 

const addTwo = function(num){
    return num+2;
}

console.log(addTwo(6));

// or ye ek expression with function hai jisko pahle declare karen se pahle use nahi kar sakte hai;

