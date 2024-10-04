const editBox = document.querySelector(".editBox");
const form = document.querySelector("form");
const cross = document.querySelector(".cross");

const heading = document.querySelector("#heading");
const Category = document.querySelector("#Category");
const desc = document.querySelector("#desc");
const link = document.querySelector("#link");

const Btn = document.querySelector("#submitBtn");

const cardParent = document.querySelector(".cardParent");

editBox.addEventListener("click", () => {
  form.style.display = "block";
});

cross.addEventListener("click", () => {
  form.style.display = "none";
});

let arr=[]

let obj = {
  heading: "",
  desc: "",
  link: "",
  category: "",
};

Btn.addEventListener("click", (e) => {
  e.preventDefault();
  obj.heading = heading.value;
  obj.desc = desc.value;
  obj.category = Category.value;
  obj.link = link.value;

  const card = document.createElement("div");
  card.classList.add("card")
  card.innerHTML=`<div class="categ">
                    ${obj.category}
                </div>
                <h1>${obj.heading}</h1>
                <p>${obj.desc}</p>
                <a target="_blank" href=${obj.link}>${obj.link}</a>`

    cardParent.appendChild(card)

  arr.push(obj);
  console.log(arr);

    heading.value=""
    desc.value=""
    link.value=""
    Category.value =''

  form.style.display = "none";
  show()
});



function show(){
  console.log(arr);
  
}
