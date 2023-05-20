/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunctionOne() {
  document.getElementById("myDropdownOne").classList.toggle("show");
  document.body.classList.toggle("open");
}
function myFunctionTwo() {
  document.getElementById("myDropdownTwo").classList.toggle("show");
  document.body.classList.toggle("close");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        document.body.classList.remove("open");
        document.body.classList.remove("close");
      }
    }
  }
};

const toggleMenu = () => document.body.classList.toggle("open");

const menu = document.getElementById("nav-menu");
const nav_close = document.getElementById("nav-close");
const nav_toggle = document.getElementById("nav-toggle");
const overlay = document.getElementById("overlay");
const navLink = document.querySelectorAll(".nav-link");
const whiteBg = document.querySelector(".navbar");

const opening = () => {
  if (nav_toggle) {
    nav_toggle.addEventListener("click", () => {
      menu.classList.add("show-menu");
      overlay.style.display = "block";
      whiteBg.style.background = "none";
    });
  }
};

const normalState = () => {
  menu.classList.remove("show-menu");
  overlay.style.display = "none";
  whiteBg.style.background = "#fff";
};

const closing = () => {
  if (nav_close) {
    nav_close.addEventListener("click", () => {
      normalState();
    });
  }
};

navLink.forEach((n) => n.addEventListener("click", normalState));
closing();
opening();
