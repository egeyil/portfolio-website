"use strict";

//================MODAL POPUP============================
const openButton = document.querySelector(".about-me");
const openButtonHamburger = document.querySelector(".about-me-hamburger");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("bio");

function openModal() {
  modal.classList.remove("invisible");
  modal.classList.add("open-modal");
  setTimeout(() => {
    modal.classList.remove("open-modal");
  }, 1000);
}

function closeModal() {
  modal.classList.add("close-modal");
  setTimeout(() => {
    modal.classList.add("invisible");
    modal.classList.remove("close-modal");
  }, 1000);
}

openButton.addEventListener("click", openModal);
openButtonHamburger.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);
