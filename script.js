
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Validation logic
var loginForm = document.querySelector('.login form');
var signupForm = document.querySelector('.signup form');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm(form) {
    var email = form.elements[0].value;
    var password = form.elements[1].value;
    var policy = form.elements[form.elements.length - 2].checked; // The checkbox is the second last element in the form

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password === '') {
        alert('Please enter your password.');
        return false;
    }

    if (!policy) {
        alert('You must accept the Terms & Conditions to proceed.');
        return false;
    }

    return true;
}


loginForm.onsubmit = function(e) {
    if (!validateForm(loginForm)) {
        e.preventDefault();
    }
};

signupForm.onsubmit = function(e) {
    if (!validateForm(signupForm)) {
        e.preventDefault();
    }
};


