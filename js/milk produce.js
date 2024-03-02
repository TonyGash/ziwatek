document.getElementById('milk-produce-link').addEventListener('click', function(event) {
  event.preventDefault();

  fetch('milk_produce.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('main-content').innerHTML = data;
    });
});
