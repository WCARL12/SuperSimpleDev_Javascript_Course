product1 = {
  name: "shirt",
  price: 21,
};
product2 = {
  name: "shirt",
  price: 21,
};

function isSameProduct(product1, product2) {
  if (product1.name === product2.name && product1.price === product2.price) {
    return true;
  } else {
    return false;
  }
}
console.log(isSameProduct(product1, product2));
