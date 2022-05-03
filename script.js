"use strict";

const openBtn = document.getElementById("about-me");
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

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
// modal.addEventListener("click", function (e) {
//   if (e.target.classList.contains("bio")) {
//     console.log("zart");
//     closeModal();
//   }
// });

//=======================================================
