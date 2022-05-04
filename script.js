"use strict";

//================MODAL POPUP============================
const openButton = document.querySelector(".about-me");
const openButtonHamburger = document.querySelector(".about-me-hamburger");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("bio");
const hamburgerItemsNodeList = document.querySelectorAll(".hamburger-item"); // NodeList
const hamburgerItems = Array.from(hamburgerItemsNodeList);
const sideBarMenu = document.getElementById("sidebar-menu");
const hamburgerInput = document.getElementById("hamburger-input");
const hamburgerMenu = document.getElementById("hamburger-menu");

function openModal() {
  modal.classList.remove("invisible");
  modal.classList.add("open-modal-animation");
  setTimeout(() => {
    modal.classList.remove("open-modal-animation");
  }, 520);
}

function closeModal() {
  modal.classList.add("close-modal-animation");
  setTimeout(() => {
    modal.classList.add("invisible");
    modal.classList.remove("close-modal-animation");
  }, 520);
}

function openModalNavbar() {
  openButton.removeEventListener("click", openModalNavbar);
  openButton.addEventListener("click", closeModalNavbar);
  openModal();
}

function closeModalNavbar() {
  openButton.removeEventListener("click", closeModalNavbar);
  openButton.addEventListener("click", openModalNavbar);
  closeModal();
}

openButton.addEventListener("click", openModalNavbar);
openButtonHamburger.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

//================HAMBURGER MENU AUTOMATIC CLOSING===================
hamburgerItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerInput.checked = false;
  });
});
