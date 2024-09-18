// const btn = document.querySelector("button")
// const first = document.querySelector("#first")
// const second = document.querySelector("#second")


// btn.addEventListener("click",function(e){
//     e.stopPropagation()
//     console.log("button was clicked");
// })

// first.addEventListener("click",function(e){

//     console.log("first was clicked");
    
// })

// second.addEventListener("click",function(e){
//     e.stopPropagation()
//     console.log("second div was clicked");
// })


const ol = document.querySelector("ol")
const btn = document.querySelector("button")
const input = document.querySelector("input")

btn.addEventListener("click",function(e){
    const inputValue = input.value;
    if(inputValue==""){
        return
    }
    const li = document.createElement("li")
    li.innerHTML = inputValue
    ol.appendChild(li)
    console.log(li);
    
    

})

