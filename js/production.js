document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });

  // Add the date display code here
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  document.getElementById("date").innerHTML = today;
  
  // Add the notification code here
  window.addEventListener("load", () => {
    const button = document.querySelector("button");

    if (window.self !== window.top) {
      button.textContent = "View live result of the example code above";
      button.addEventListener("click", () => window.open(location.href));
      return;
    }

    button.addEventListener("click", () => {
      if (Notification?.permission === "granted") {
        let i = 0;
        const interval = setInterval(() => {
          const n = new Notification(`Hi! ${i}`, { tag: "soManyNotification" });
          if (i === 9) {
            clearInterval(interval);
          }
          i++;
        }, 200);
      } else if (Notification && Notification.permission !== "denied") {
        Notification.requestPermission().then((status) => {
          if (status === "granted") {
            let i = 0;
            const interval = setInterval(() => {
              const n = new Notification(`Hi! ${i}`, {
                tag: "soManyNotification",
              });
              if (i === 9) {
                clearInterval(interval);
              }
              i++;
            }, 200);
          } else {
            alert("Hi!");
          }
        });
      } else {
        alert("you wont receive notifications!");
      }
    });
  }); 
  document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {                     
      document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  
    // Add the date display code here
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
  
    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById("date").innerHTML = today;
    
    // Add the notification code here
    window.addEventListener("load", () => {
      const button = document.querySelector("button");
  
      if (window.self !== window.top) {
        button.textContent = "View live result of the example code above";
        button.addEventListener("click", () => window.open(location.href));
        return;
      }
  
      button.addEventListener("click", () => {
        if (Notification?.permission === "granted") {
          let i = 0;
          const interval = setInterval(() => {
            const n = new Notification(`Hi! ${i}`, { tag: "soManyNotification" });
            if (i === 9) {
              clearInterval(interval);
            }
            i++;
          }, 200);
        } else if (Notification && Notification.permission !== "denied") {
          Notification.requestPermission().then((status) => {
            if (status === "granted") {
              let i = 0;
              const interval = setInterval(() => {
                const n = new Notification(`Hi! ${i}`, {
                  tag: "soManyNotification",
                });
                if (i === 9) {
                  clearInterval(interval);
                }
                i++;
              }, 200);
            } else {
              alert("Hi!");
            }
          });
        } else {
          alert("Hi!");
        }
      });
    }); // This is the missing closing brace
  
    // Add your notification count update code here
    var x = setInterval(function() {
      var count = document.querySelector('.badge').innerHTML;
      count = parseInt(count);
      if (count > 0) {
        count--;
        document.querySelector('.badge').innerHTML = count;
      } else {
        clearInterval(x);
      }
    }, 1000);
  });
  

  // Add your notification count update code here
  var x = setInterval(function() {
    var count = document.querySelector('.badge').innerHTML;
    count = parseInt(count);
    if (count > 0) {
      count--;
      document.querySelector('.badge').innerHTML = count;
    } else {
      clearInterval(x);
    }
  }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
  // Your existing code...

  // Get a reference to your sidebar feature and dashboard widget
  var sidebarFeature = document.getElementById('cowManagementLink');
  var dashboardWidget = document.getElementById('cowManagementWidget');

  // Add an event listener to the sidebar feature
  sidebarFeature.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action

    // Scroll to the dashboard widget
    dashboardWidget.scrollIntoView({behavior: "smooth"});
  });

  // Your existing code...
});
