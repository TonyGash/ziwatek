// Function to toggle the form popup
function toggleFormPopup() {
    const formPopup = document.querySelector('.form-popup');
    formPopup.classList.toggle('active');
    const blurBgOverlay = document.querySelector('.blur-bg-overlay');
    blurBgOverlay.classList.toggle('active');
  }
  
  // Function to close the form popup
  function closeFormPopup() {
    const formPopup = document.querySelector('.form-popup');
    formPopup.classList.remove('active');
    const blurBgOverlay = document.querySelector('.blur-bg-overlay');
    blurBgOverlay.classList.remove('active');
  }
  
  // Function to switch between the login and signup forms
  function switchForm(formType) {
    const loginForm = document.querySelector('.form-box.login');
    const signupForm = document.querySelector('.form-box.signup');
  
    if (formType === 'login') {
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
    } else if (formType === 'signup') {
      loginForm.classList.remove('active');
      signupForm.classList.add('active');
    }
  }
  
  // Add event listeners
  document.querySelector('.login-btn').addEventListener('click', toggleFormPopup);
  document.querySelector('.close-btn').addEventListener('click', closeFormPopup);
  document.querySelector('#signup-link').addEventListener('click', function() { switchForm('signup'); });
  document.querySelector('#login-link').addEventListener('click', function() { switchForm('login'); });