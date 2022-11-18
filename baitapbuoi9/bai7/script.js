const buttonBtn = document.querySelector(".button-btn");
const divBtn = document.querySelector(".div-btn");
buttonBtn.addEventListener("click", function () {
  divBtn.classList.toggle("show");
});
