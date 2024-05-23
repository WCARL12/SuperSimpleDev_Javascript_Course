let gamingButton = document.querySelector(".js-button-1");
let musicButton = document.querySelector(".js-button-2");
let techButton = document.querySelector(".js-button-3");

function changeButton(button) {
  if (button.classList.contains("is-toggle")) {
    button.classList.remove("is-toggle");
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
    button.classList.add("is-toggle");
  }
}
