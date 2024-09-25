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

const ol = document.querySelector("ol");
const btn = document.querySelector(".btn");
const input = document.querySelector("input");

btn.addEventListener("click", function (e) {
  const inputValue = input.value;
  if (inputValue == "") {
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = inputValue;

  const button = document.createElement("button");
  button.innerHTML = "delete";
  button.classList.add("delete")

  li.appendChild(button);
  ol.appendChild(li);

  input.value=""

});


// this is not for all dynamic li added delete
// const allBtn = document.querySelectorAll(".delete");

// allBtn.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//        let par =  e.target.parentElement 
//        console.log(par);
//        par.remove()
//     })
// })



ol.addEventListener("click",(e)=>{
   if(e.target.nodeName=="BUTTON"){
    e.target.parentElement.remove();
   }
    
})