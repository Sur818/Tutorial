let navBar = document.getElementById("navbar");
notdisplayed = true;
function showmenu() {
  if (notdisplayed) {
    navBar.classList.add("active");
    notdisplayed = false;
  } else {
    navBar.classList.remove("active");
    notdisplayed = true;
  }
}


let tab = document.getElementById("input-exp");
let notopen = true;
// let lastClass = '';

function searchOpen() {
    if(window.innerWidth > 600) {
        if (notopen) {
            tab.classList.add("open");
            notopen = false;
        } else {
            tab.classList.remove("open");
            notopen = true;
        }
    }
}


// document.addEventListener("change", function(event) {
//   if (event.target && event.target.matches(".input-box")) {
    
//     event.preventDefault();
//     var inputField = event.target;
//     var inputLabels = document.querySelector(".input-label");

//     if (inputField.value) {
//       inputLabels.style.top = "-1.2rem";
//       inputLabels.style.color='red';
//     } else {
//       inputLabels.style.top = "0rem";
//     }
//   }
// });


