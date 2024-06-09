const iconMiunsBas = document.querySelector(".basMinus");
const iconPlusBas = document.querySelector(".basPlus");
const valueTotel = document.querySelector("#valueTotel");
const totel = document.querySelector("#totel");
const numProduct = document.querySelector("#numProduct");
let n = parseInt(valueTotel.innerText);
totel.innerText = n;
localStorage.numPage = 1;
numProduct.textContent = localStorage.numPage;
let x = 1;
iconPlusBas.addEventListener("click", () => {
  x++;
  localStorage.numPage = +x;
  numProduct.textContent = +localStorage.numPage;
  n += parseInt(valueTotel.innerText);
  totel.innerText = n;
});
iconMiunsBas.addEventListener("click", () => {
  if (x == 1) {
    x = 1;
  } else {
    x--;
    localStorage.numPage = x;
  numProduct.textContent = localStorage.numPage;
  }
 
 if ( n == 100 ) {
  n = 100;
 
 }
 else{
   n -= parseInt(valueTotel.innerText)
 }
 totel.innerText = n;
});

const deleteProduct = document.querySelector(".deleteProduct");
const cardBasProduct = document.querySelector(".card-basproduct");

deleteProduct.addEventListener("click", () => {
  totel.innerText = "0"
  cardBasProduct.style.display = "none";
});

const divImgPush = document.querySelectorAll(".divImgPush div");

divImgPush.forEach(function (ele) {
  ele.onclick = function () {
    divImgPush.forEach(function (ele) {
      ele.classList.remove("activeImg");
    });
    ele.classList.add("activeImg");
  };
});
