// Keyword event

// const inp = document.querySelector("input")



// inp.addEventListener("keyup",function(e){
//     console.log(e);
    
    // console.log( "code : ", e.code);
    // console.log("key : ",e.key);
    // console.log("key code : ", e.keyCode);

    // if(e.code=="ArrowUp"){
    //     console.log("moved upper");
    // }else if(e.code=="ArrowDown"){
    //     console.log('moved down');
    // }else if(e.code=="ArrowLeft"){
    //     console.log("moved left");
    // }else if(e.code=="ArrowRight"){
    //     console.log("moved right");
    // }

// })

// inp.addEventListener("keyup",function(e){
//     console.log("keyup");
    
// })


// form event

const form = document.querySelector("form");
const inp = document.querySelector("input")
const pass = document.querySelector("#pass")

const emailH1 = document.querySelector("h1 span")
const passwordH2 = document.querySelector("h2 span")


form.addEventListener("submit",function(e){
    e.preventDefault()

    let emailValue = inp.value;
    let passwordValue = pass.value;

   emailH1.innerHTML = emailValue;
   passwordH2.innerHTML = passwordValue

    // console.log(form.elements[0].value);
    // console.log(form.elements[1].value);
    // console.log(this.elements[0].value);
    // console.log(this.elements[1].value);
})

// "name: kaushal"
// "email : kau@g.com"
// "roll: 12"



