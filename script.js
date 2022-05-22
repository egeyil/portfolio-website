"use strict";

//================MODAL POPUP============================
const openAboutMe = document.querySelector(".about-me");
const openAboutMeFromHamburger = document.querySelector(".about-me-hamburger");
const closeAboutMe = document.getElementById("close");
const aboutMe = document.getElementById("bio");

function openModal() {
  aboutMe.classList.remove("invisible");
  aboutMe.classList.add("open-aboutMe-animation");
  setTimeout(() => {
    document.addEventListener("click", closeModalByOutsideClick);
    aboutMe.classList.remove("open-aboutMe-animation");
  }, 520);
}

function closeModal() {
  aboutMe.classList.add("close-aboutMe-animation");
  document.removeEventListener("click", closeModalByOutsideClick);
  setTimeout(() => {
    aboutMe.classList.add("invisible");
    aboutMe.classList.remove("close-aboutMe-animation");
  }, 520);
}

function closeModalByOutsideClick(e) {
  if (aboutMe.contains(e.target)) {
    return;
  } else {
    closeModal();
  }
}

function openModalNavbar() {
  openAboutMe.removeEventListener("click", openModalNavbar);
  openAboutMe.addEventListener("click", closeModalNavbar);
  openModal();
}

function closeModalNavbar() {
  openAboutMe.removeEventListener("click", closeModalNavbar);
  openAboutMe.addEventListener("click", openModalNavbar);
  closeModal();
}

openAboutMe.addEventListener("click", openModalNavbar);
openAboutMeFromHamburger.addEventListener("click", openModal);
closeAboutMe.addEventListener("click", closeModal);

//================HAMBURGER MENU AUTOMATIC CLOSING===================
const hamburgerItemsNodeList = document.querySelectorAll(".hamburger-item"); // NodeList
const hamburgerItems = Array.from(hamburgerItemsNodeList);
const sideBarMenu = document.getElementById("sidebar-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");
const sideBarTitle = document.querySelector("#sidebar-menu h3");

function openHamburgerMenu() {
  sideBarMenu.classList.remove("invisible-menu");
  sideBarMenu.classList.add("visible-menu");
  hamburgerMenu.removeEventListener("click", openHamburgerMenu);
}

function closeHamburgerMenu() {
  sideBarMenu.classList.remove("visible-menu");
  sideBarMenu.classList.add("invisible-menu");
  hamburgerMenu.addEventListener("click", openHamburgerMenu);
}

function closeHamburgerByOutsideClick(e) {
  if (hamburgerMenu.contains(e.target)) {
    return;
  } else {
    closeHamburgerMenu();
  }
}
document.addEventListener("click", closeHamburgerByOutsideClick);

hamburgerItems.forEach((item) => {
  item.addEventListener("click", closeHamburgerMenu);
});

hamburgerMenu.addEventListener("click", openHamburgerMenu);
sideBarTitle.addEventListener("click", closeHamburgerMenu);

//================PAGE SCROLLING AND ANCHOR TAGS=======================
function scrollSmoothTo(elementId) {
  var pageSection = document.getElementById(elementId);
  pageSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
