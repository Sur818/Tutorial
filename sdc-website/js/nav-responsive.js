let isOpen = false;

function openNav(id) {
  isOpen = true;
  let header = document.getElementById("header");
  let allNavButtons = document.getElementsByClassName("page-links");
  let navList = document.getElementById("nav-list");

  if (navList.className === "respo-ol-tag") {
    header.classList.remove("nav-open");
    navList.classList.remove("respo-ol-tag");
    for (let i = 0; i < allNavButtons.length; i++) {
      allNavButtons[i].classList.remove("page-show-links");
    }
  } else {
    header.classList.add("nav-open");
    navList.classList.add("respo-ol-tag");
    for (let i = 0; i < allNavButtons.length; i++) {
      allNavButtons[i].classList.add("page-show-links");
    }
  }
}

function printMousePos(event) {
  if(event.clientY > 350 && isOpen) {
    console.log("out of bound");
    openNav();
    isOpen = false;
  }
}

document.addEventListener("click", printMousePos);