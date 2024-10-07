const InputFle = document.querySelector("#file");
const img = document.querySelector("#right img");
const text_value = document.querySelector(".progre-report .text-value");
const percent_value = document.querySelector(".progre-report .percent");
const progressBar = document.querySelector(".progress input");
const allBtn = document.querySelectorAll(".buttons button")


InputFle.addEventListener("change",(e)=>{
    let file = InputFle.files[0]
    img.src = (URL.createObjectURL(file))
})


let Britness=100
let contrast=100
let grayscale=0
let invert=0


function remove(){
    allBtn.forEach((btn)=>{
        btn.classList.remove("active")
    })
}


progressBar.addEventListener("change",(e)=>{
    console.log(e.target);
    
    percent_value.innerHTML = `${e.target.value}%`
    
})


allBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        remove()
        e.target.classList.add("active")
        let value = e.target.innerText;
        if(value=="Britness"){
            text_value.innerHTML = value
            percent_value.innerHTML = `${Britness}%`
            progressBar.value = Britness
        }
        else if(value=="grayscale"){
            text_value.innerHTML = value
             percent_value.innerHTML = `${grayscale}%`
             progressBar.value = grayscale
        }
        else if(value=="contrast"){
            text_value.innerHTML = value
             percent_value.innerHTML = `${contrast}%`
             progressBar.value = contrast
        }
        else if(value=="invert"){
            text_value.innerHTML = value
             percent_value.innerHTML = `${invert}%`
             progressBar.value = invert
        }
        
    })
})