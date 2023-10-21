const loginForm = document.querySelector(".form-box.login"),
  signupForm = document.querySelector(".form-box.signup"),
  date = new Date().getFullYear();
 
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
  let linksMenu= document.querySelector('.menu-bar');
  linksMenu.style.left = 0;
}

// Add event listeners
document.querySelector(".login-btn").addEventListener("click", toggleFormPopup);
document.querySelector(".close-btn").addEventListener("click", closeFormPopup);
document.querySelector("#signup-link").addEventListener("click", function () {switchForm("signup");});
document.querySelector("#login-link").addEventListener("click", function () {switchForm("login");});
document.querySelector(".hamburger-btn").addEventListener("click", () => {burgerMenu();});

document.querySelector("#currentDate").innerHTML = date;