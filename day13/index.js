// const div= document.querySelector("div")

// console.log(div);

// let id = div.getAttribute("id")
// console.log(id);

// let classatr = div.getAttribute("class")
// console.log(classatr);

// let name = div.getAttribute("name")
// console.log(name);


// const input = document.querySelector("input")

// input.setAttribute("placeholder","Enter your name")


// div.style.backgroundColor = "red"
// div.style.borderRadius = "1000px"


// const h1 = document.querySelector("h1")

// h1 = "kaushl"
// h1.style.fontSize = "10vw"
// h1.style.fontFamily= "sans-serif"

// h1.innerText = "college buddy"




const newDiv = document.createElement("div")
newDiv.innerHTML = "<i> this is meet class </i>"

const div= document.querySelector("div")

// div.prepend(newDiv)
// div.append(newDiv)
// div.before(newDiv)
// div.after(newDiv)

const img = document.createElement("img")
img.setAttribute("src","https://images.unsplash.com/photo-1725832062946-2ec9aae5c4e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8")

img.setAttribute("alt","img")
div.before(img)

document.querySelector("input").remove()
// input.remove()

img.remove()




