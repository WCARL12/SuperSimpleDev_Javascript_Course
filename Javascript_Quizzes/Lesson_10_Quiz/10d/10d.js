function buttonChange() {
  let buttonElement = document.querySelector(".is-toggled");
  if (buttonElement.classList.contains("is-toggled")) {
    buttonElement.classList.remove("is-toggled");
    buttonElement.classList.add("toggled");
  } else {
    buttonElement.classList.add("is-toggled");
    buttonElement.classList.remove("toggled");
  }
}
