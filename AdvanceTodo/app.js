const editBox = document.querySelector(".editBox");
const form = document.querySelector("form");
const cross = document.querySelector(".cross");

editBox.addEventListener("click",()=>{
    form.style.display = "block"
})

cross.addEventListener("click",()=>{
     form.style.display = "none"
})