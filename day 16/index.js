// const h1 = document.querySelector("h1")
// const btn = document.querySelector("button")
// const div = document.querySelector("div")

// btn.addEventListener("click",()=>{
//     let generatedColor = generateRandomColor();
//     h1.innerText =generatedColor;
//     div.style.backgroundColor = generatedColor;
// })

// // #ffffff

// let hexCode = "123456789ABCDEF"
// console.log(hexCode.length);

// function generateRandomColor(){
//     let color = "#"
//     for(let i=1;i<=6;i++){
//         let index = Math.floor(Math.random()* hexCode.length )
//         color+= hexCode[index]
//     }
//     return color;
// }

const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const div = document.querySelector("div");

function setSometing() {
  console.log(this.textContent);
  this.style.backgroundColor = "red";
}

btn.addEventListener("click", setSometing);
h1.addEventListener("click", setSometing);
div.addEventListener("click", setSometing);
