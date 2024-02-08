
// Theme Switching
document.getElementById('light-mode').addEventListener('click', function() {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
});

document.getElementById('dark-mode').addEventListener('click', function() {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
  localStorage.setItem('theme', 'dark');
});

// Apply the saved theme on page load
window.onload = function() {
  let theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (theme === 'light') {
    document.body.classList.add('light-mode');
  }
}

// Current Time Display
setInterval(function() {
  document.getElementById('current-time').textContent = new Date().toLocaleTimeString();
}, 1000);

// Language Selection
document.getElementById('language-select').addEventListener('change', function() {
  let language = this.value;
  // Add functionality to change language
  // This will depend on how you're implementing multi-language support
});

// Dynamic Content Loading
document.getElementById('milk-records-link').addEventListener('click', function(event) {
  event.preventDefault();

  fetch('milk_records.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('main-content').innerHTML = data;
    });
});
