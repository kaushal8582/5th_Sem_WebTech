
const div = document.querySelector("div")
const btn = document.querySelector("button")

btn.onclick = ()=>{
    console.log("adarsh");
    btn.style.backgroundColor="red"
}

div.onmousemove = (e)=>{
    // console.log(e.target);
    console.log("x:", e.clientX , "y: ",e.clientY);
}

div.onmousemove = ()=>{
    div.style.backgroundColor ="red"
}