const form = document.querySelector("form")
const inpt = document.querySelector("input")
const h2 = document.querySelector("h2")

form.addEventListener("click",(e)=>{
    e.preventDefault()
})

// inpt.addEventListener("change",function(e){
//     // initial se final change ko show karta hai 
//     console.log(e);
//     console.log("chenged");
// })

inpt.addEventListener("input",function(e){
    // console.log("value input");
    console.log(e.target.value);
    h2.innerText = e.target.value
})
