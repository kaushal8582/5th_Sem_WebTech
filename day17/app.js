// Keyword event

// const inp = document.querySelector("input")

// inp.addEventListener("keydown",function(e){
//     // console.log("presed");
//     // console.log( "code : ", e.code);
//     // console.log("key : ",e.key);
//     // console.log("key code : ", e.keyCode);

//     if(e.code=="ArrowUp"){
//         console.log("moved upper");
//     }else if(e.code=="ArrowDown"){
//         console.log('moved down');
//     }else if(e.code=="ArrowLeft"){
//         console.log("moved left");
//     }else if(e.code=="ArrowRight"){
//         console.log("moved right");
//     }


// })

// inp.addEventListener("keyup",function(e){
//     console.log("keyup");
    
// })


const form = document.querySelector("form");
// const inp = document.querySelector("input")
// const pass = document.querySelector("#pass")

form.addEventListener("submit",function(e){
    e.preventDefault()
//    console.log(inp.value);
//    console.log(pass.value);

    // console.log(form.elements[0].value);
    // console.log(form.elements[1].value);
    console.log(this.elements[0].value);
    console.log(this.elements[1].value);
    
    

})

"name: kaushal"
"email : kau@g.com"
"roll: 12"



