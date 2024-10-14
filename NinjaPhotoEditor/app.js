const InputFle = document.querySelector("#file");
const img = document.querySelector("#right img");
const text_value = document.querySelector(".progre-report .text-value");
const percent_value = document.querySelector(".progre-report .percent");
const progressBar = document.querySelector(".progress input");
const allBtn = document.querySelectorAll(".buttons button");
const resetBtn = document.querySelector(".reset");

InputFle.addEventListener("change", (e) => {
  let file = InputFle.files[0];
  img.src = URL.createObjectURL(file);
});

let Britness = 100;
let contrast = 100;
let grayscale = 0;
let invert = 0;
let Rotate = 90;




function filterImg() {
    img.style.transform = `rotate(${Rotate}deg)`
  img.style.filter = `brightness(${Britness}%) grayscale(${grayscale}%) contrast(${contrast}%) invert(${invert}%) `;
}

function remove() {
  allBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
}

progressBar.addEventListener("input", (e) => {
  const activeClass = document.querySelector(".buttons .active");
  if (activeClass.textContent == "Britness") {
    percent_value.innerHTML = `${e.target.value}%`;
    progressBar.value = e.target.value;
    Britness = e.target.value;
  } else if (activeClass.textContent == "grayscale") {
    percent_value.innerHTML = `${e.target.value}%`;
    progressBar.value = e.target.value;
    grayscale = e.target.value;
  } else if (activeClass.textContent == "contrast") {
    percent_value.innerHTML = `${e.target.value}%`;
    progressBar.value = e.target.value;
    contrast = e.target.value;
  } else if (activeClass.textContent == "invert") {
    percent_value.innerHTML = `${e.target.value}%`;
    progressBar.value = e.target.value;
    invert = e.target.value;
  }

  filterImg();
});

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    remove();
    e.target.classList.add("active");
    let value = e.target.innerText;
    if (value == "Britness") {
      text_value.innerHTML = value;
      percent_value.innerHTML = `${Britness}%`;
      progressBar.value = Britness;
    } else if (value == "grayscale") {
      text_value.innerHTML = value;
      percent_value.innerHTML = `${grayscale}%`;
      progressBar.value = grayscale;
    } else if (value == "contrast") {
      text_value.innerHTML = value;
      percent_value.innerHTML = `${contrast}%`;
      progressBar.value = contrast;
    } else if (value == "invert") {
      text_value.innerHTML = value;
      percent_value.innerHTML = `${invert}%`;
      progressBar.value = invert;
    }
  });
});

resetBtn.addEventListener("click", (e) => {
  Britness = 100;
  contrast = 100;
  grayscale = 0;
  invert = 0;

  percent_value.innerHTML = `${Britness}%`;
  progressBar.value = Britness;
  text_value.innerHTML = "Britness";

  document.querySelector(".buttons .active").classList.remove("active");
  document.querySelector(".britness").classList.add("active");

  filterImg();
});

// HOME WORK
// function banana or then rotate ko change karna ok , and jab ye ho jaye to filterImg() method ko call kar dena