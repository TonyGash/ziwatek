const loginForm = document.querySelector(".form-box.login"),
  signupForm = document.querySelector(".form-box.signup"),
  date = new Date().getFullYear(),
  linksMenu = document.querySelector('.menu-bar');

 
// Function to toggle the form popup
function toggleFormPopup() {
  const formPopup = document.querySelector(".form-popup"),
    blurBgOverlay = document.querySelector(".blur-bg-overlay"),
    loginForm = document.querySelector(".form-box.login"),
    signupForm = document.querySelector(".form-box.signup");

  formPopup.classList.toggle("active-form");
  blurBgOverlay.classList.toggle("active-form");

  loginForm.classList.remove("active");
  signupForm.classList.remove("active");
}

// Function to close the form popup
function closeFormPopup() {
  const formPopup = document.querySelector(".form-popup"),
    blurBgOverlay = document.querySelector(".blur-bg-overlay");

  formPopup.classList.remove("active-form");
  blurBgOverlay.classList.remove("active-form");
}

// Function to switch between the login and signup forms
function switchForm(formType) {
  if (formType === "login") {
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
  } else if (formType === "signup") {
    loginForm.classList.add("active");
    signupForm.classList.add("active");
  } else {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  }
}

// Function to switch into hamburger menu
function burgerMenu() {
  linksMenu.classList.toggle('active-menu')
}

function closeBurgerMenu(e) {
  let menu =  document.querySelector('.hamburger-btn');

  // 1. When document body is clicked, ie outside the menu
  if(!linksMenu.contains(e.target)&&!menu.contains(e.target)){
    linksMenu.classList.remove('active-menu')
  }


  // // 2. When escape key is clicked
  // document.documentElement.addEventListener('keydown', (e) => {
  //   if (e === 'escape'){
          // linksMenu.classList.remove('active-menu')
  //   }
  // });
}

//;



// Add event listeners
document.querySelector(".login-btn").addEventListener("click", toggleFormPopup);
document.querySelector(".close-btn").addEventListener("click", closeFormPopup);
document.querySelector("#signup-link").addEventListener("click", function () {switchForm("signup");});
document.querySelector("#login-link").addEventListener("click", function () {switchForm("login");});
document.querySelector(".hamburger-btn").addEventListener("click", () => {burgerMenu();});
document.documentElement.addEventListener('click', closeBurgerMenu);

document.querySelector("#currentDate").innerHTML = date;
