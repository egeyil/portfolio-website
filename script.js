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
    document.addEventListener("click", closeModalByOutsideClick);
    modal.classList.remove("open-modal-animation");
  }, 520);
}

function closeModal() {
  modal.classList.add("close-modal-animation");
  document.removeEventListener("click", closeModalByOutsideClick);
  setTimeout(() => {
    modal.classList.add("invisible");
    modal.classList.remove("close-modal-animation");
  }, 520);
}

function closeModalByOutsideClick(e) {
  if (modal.contains(e.target)) {
    return;
  } else {
    closeModal();
  }
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

//================HAMBURGER MENU AUTOMATIC CLOSING===================
hamburgerItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerInput.checked = false;
  });
});

function closeHamburgerByOutsideClick(e) {
  if (hamburgerMenu.contains(e.target) || hamburgerInput.contains(e.target)) {
    return;
  } else {
    hamburgerInput.checked = false;
  }
}

openButton.addEventListener("click", openModalNavbar);
openButtonHamburger.addEventListener("click", openModal);
document.addEventListener("click", closeHamburgerByOutsideClick);
closeBtn.addEventListener("click", closeModal);
