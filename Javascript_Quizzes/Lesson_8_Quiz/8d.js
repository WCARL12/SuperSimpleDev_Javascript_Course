let product1 = {
  name: "basketball",
  price: 20.95,
};
let product2 = {
  name: "shirt",
  price: 6.95,
};

function comparePrice(product1, product2) {
  if (product1.price > product2.price) {
    return product1;
  } else if (product1.price < product2.price) {
    return product2;
  } else {
    console.log("They are both the same price");
  }
}
