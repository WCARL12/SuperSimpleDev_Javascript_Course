let gamingButton = document.querySelector(".js-button-1");
let musicButton = document.querySelector(".js-button-2");
let techButton = document.querySelector(".js-button-3");

function changeButton(buttonAppear, buttonDissapear1, buttonDissapear2) {
  buttonAppear.classList.remove("is-toggle");
  buttonAppear.classList.add("is-toggled");
  buttonRemoveClass(buttonDissapear1);
  buttonRemoveClass(buttonDissapear2);
}

function buttonRemoveClass(buttonDissapear) {
  buttonDissapear.classList.remove("is-toggled");
  buttonDissapear.classList.add("is-toggle");
}
