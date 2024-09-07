// console.log(document);


// console.log("kaushal");
// window.console.log("kaushal")


document.body.style.backgroundColor  = 'green'

const heading =  document.getElementById("heading")
// console.log(heading);
// console.dir(heading)

heading.style.backgroundColor = "red"
// heading.style.backgroundColor = "red"

const para = document.getElementsByClassName("para")
console.log(para);
console.dir(para)

para[0].style.backgroundColor = "blue"

const btn = document.getElementsByTagName("button")
// console.log(btn);

const head2 =  document.querySelector("#heading")
console.log(head2);

const para2 =  document.querySelector(".para")
console.log(para2);

const para3 =  document.querySelectorAll(".para")
console.log(para3);


const tagName = heading.tagName
console.log(tagName);

heading.innerText = "this is class"



// const divsec = document.getElementsByTagName("div")

const divsec = document.querySelector(".div")
console.log(divsec.innerHTML);


divsec.innerHTML = "<h1> something went wrong </h1>"
divsec.style.visibility = "hidden"


