const h1 = document.querySelector("h1")
const btn = document.querySelector("button")
const div = document.querySelector("div")



btn.addEventListener("click",()=>{
    let color = getRandomColor();
    // let color = "#ed3d13";
    h1.innerHTML = color;
    div.style.backgroundColor = color;
    
})

function getRandomColor(){
   let red = Math.floor(Math.random() * 255) //12
   let green = Math.floor(Math.random() * 255) //123
   let blue = Math.floor(Math.random() * 255) // 213

   return `rgb(${red},${green},${blue})` // rgb(12,123,213)
}

// rgb(red,green,blue)
// rgb(24,45,124)
// rgb(242,235,124)
// 0-255