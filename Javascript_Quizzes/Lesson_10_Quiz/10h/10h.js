function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);
  // let errorDisplayElement = document.querySelector("js-display-error");

  if (cost < 40 && cost >= 0) {
    cost = cost + 10;
  } else if (cost < 0) {
    document.querySelector(
      ".js-total-cost"
    ).innerHTML = `Error: cost cannot be less than $0`;
    document.querySelector(".js-total-cost").classList.add("error");
    return;
  }
  document.querySelector(".js-total-cost").classList.remove("error");
  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}
