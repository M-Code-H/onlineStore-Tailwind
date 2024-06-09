let navbar = document.querySelector(".navbarfixed");

addEventListener("scroll", function () {
  // تثبيت navbar عند نزول ب scroll
  if (this.scrollY >= 100) {
    navbar.classList.remove("h-90px");
    navbar.classList.add("scroll");
  } else {
    navbar.classList.add("h-90px");
    navbar.classList.remove("scroll");
  }
});

let dots = document.querySelectorAll(".dots .dot");
let slider = document.querySelectorAll(".slider .slide");

let SlideIndex = 0;
let SliderTime = null;

timeSlider();
function timeSlider() {
  if (slider.length > 0) {
    slider[0].classList.add("displaySlide"); // Add Class "displaySlide"
    SliderTime = setInterval(nextSlider, 5000);
    SliderTime = setInterval(prevSlider, 5000);
  }
}

function showSlider(images) {
  // show + hidden
  if (images >= slider.length) {
    SlideIndex = 0;
  } else if (images < 0) {
    SlideIndex = slider.length - 1;
  }

  slider.forEach((slideEach) => {
    slideEach.classList.remove("displaySlide");
  });
  dots.forEach((dotsEach) => {
    dotsEach.classList.remove("bg");
  });
  slider[SlideIndex].classList.add("displaySlide");
  dots[SlideIndex].classList.add("bg");
}

function prevSlider() {
  // click button prev Slider
  clearInterval(SliderTime);
  SlideIndex--;
  showSlider(SlideIndex);
}

function nextSlider() {
  // click button next Slider
  SlideIndex++;
  showSlider(SlideIndex);
}

function dotsSlider(PN) {
  showSlider((SlideIndex += PN));
}

// input search hidden\show start

const iconSearch = document.getElementById("iconSearch"); // ايقونة بحث
const divInputSearch = document.getElementById("divInputSearch"); // input search

iconSearch.addEventListener("click", function () {
  divInputSearch.classList.toggle("test"); //اظهار واخفاء مربع البحث + ايقونة
});
// input search hidden\show End

// Slider Keen Start

const scrollTop = function () {
  const scrollBtn = document.createElement("button"); // Create Element button
  scrollBtn.innerHTML = "top"; // text button
  scrollBtn.setAttribute("id", "scroll-btn"); // Add Attribute [id]
  document.body.appendChild(scrollBtn); // Add button for  body
  const scrollBtnDisplay = function () {
    if (window.scrollY > window.innerHeight) {
      scrollBtn.classList.add("show"); // Add class "show" show for button
    } else {
      scrollBtn.classList.remove("show"); // Remove Class "show" hidden for button
    }
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();

/* عدد منتجات التي وضعت في سلة*/
let btnAllproducts = document.querySelectorAll(".sicon-card button");
let numProducts = document.querySelector(".numProducts");
let a = 0;

for (let i = 0; i < btnAllproducts.length; i++) {
  btnAllproducts[i].addEventListener("click", function () {
    a++;
    localStorage.num = a;

    numProducts.textContent = localStorage.num;
  });
}

let login = document.getElementById("login");
let singUp = document.getElementById("singUp");
let btnLog = document.getElementById("btnLog");
let btnSin = document.getElementById("btnSin");

function clickShowSingUp() {
  login.style.transform = "translateY(-300%)";
  login.style.transition = "all .5s ease-in-out";
  singUp.style.transform = "translateX(0%)";
  singUp.style.transition = "all .8s ease-in-out";
}
function clickShowSingIn() {
  login.style.transform = "translateY(0%)";
  singUp.style.transform = "translateX(-200%)";
  login.style.transition = "all .8s ease-in-out";
  singUp.style.transition = "all .5s ease-in-out";
}

/* Validate Form Login start ============= */
function foLValidate() {
  let loEmail = document.getElementById("loEmail").value;
  let loPass = document.getElementById("loPass").value;
  let LoError = document.getElementById("errorLo");
  let text;
  if (loEmail == "") {
    text = "رجاء أدخال بريد الاكتروني  ";
    LoError.innerHTML = text;
    return false;
  }
  if (loEmail.indexOf("@gmail.com") == -1 || loEmail.length < 8) {
    text = "بريد الاكتروني غير صحيح";
    LoError.innerHTML = text;
    return false;
  }
  if (loPass.length < 8) {
    text = "رجاء ادخال كلمة المرور ";
    LoError.innerHTML = text;
    return false;
  }
  if (loPass.length < 8) {
    text = "يجب أن تتكون كلمة من 8 حرف على أقل";
    LoError.innerHTML = text;
    return false;
  }
  return true;
}
/*  Validate Form Login END ============= */

/* Validate Form SingUP start ============= */
function foSValidate() {
  let sUEmail = document.getElementById("sUEmail").value;
  let sUName = document.getElementById("sUName").value;
  let sUPhone = document.getElementById("sUPhone").value;
  let sUPass = document.getElementById("sUPass").value;
  let sUCheckbox = document.getElementById("sUCheckbox");
  let SUerrorMess = document.getElementById("errorSU");
  let textErorr;
  if (sUName == "") {
    textErorr = "رجاء أدخال الأسم الكريم";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  if (sUName.length < 2) {
    textErorr = "الأسم  غير صحيح";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  if (sUEmail == "") {
    textErorr = "رجاء تأكد من بريد الاكتروني ";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  if (sUEmail.indexOf("@gmail.com") == -1 || sUEmail.length < 8) {
    textErorr = "بريد الاكتروني غير صحيح";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  if (sUPhone == "") {
    textErorr = "رجاء أدخال رقم الهاتف";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  if (sUPhone.length < 10 || isNaN(sUPhone)) {
    textErorr = "رجاء تأكد من  رقم الهاتف";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  if (sUPass == "") {
    textErorr = "رجاء ادخال كلمة المرور ";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  if (sUPass.length < 8) {
    textErorr = "يجب أن تتكون كلمة من 8 حرف على أقل";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  if (sUCheckbox.checked == false) {
    textErorr = "يرجى موافقة على الشروط والقواعد";
    SUerrorMess.innerHTML = textErorr;
    return false;
  }
  return true;
}

let boxImagesSlide  = document.querySelectorAll(".boxImagesSlide ");
let image = document.getElementById("image");

    for (let i = 0; i < boxImagesSlide.length; i++) {
    
      boxImagesSlide[i].addEventListener("click" , function (img) {
        
      image.src = img.target.src

     })
    }
  


const iconMiuns = document.querySelector(".bx-minus");
const iconPlus = document.querySelector(".bx-plus");
let te = 1;
let div = document.querySelector(".nums");
localStorage.numPage = 1;
div.textContent = localStorage.numPage;

iconPlus.addEventListener("click", () => {
  te++;
  localStorage.numPage = te;

  div.textContent = localStorage.numPage;
});
iconMiuns.addEventListener("click", () => {
  if (te == 1) {
    te = 1;
  } else {
    te--;
    localStorage.numPage = te;

    div.textContent = localStorage.numPage;
  }
});



