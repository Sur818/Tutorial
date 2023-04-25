window.onscroll = function () {
  scrollMe();
};

var navbar = document.getElementById("header");
var sticky = 80;

function scrollMe() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
