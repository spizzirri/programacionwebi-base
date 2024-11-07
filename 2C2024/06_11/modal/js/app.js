const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".open-button");
const closeBtn = document.querySelector(".close-button");

openBtn.addEventListener("click", (_event) => {
  modal.showModal();
});

closeBtn.addEventListener("click", (_event) => {
  modal.close();
});
