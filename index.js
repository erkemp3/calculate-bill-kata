function calculateBill(price, vat, tip) {
  let a = parseInt(price);
  let b = parseInt(vat);
  let c = parseInt(tip);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "error";
  } else {
    return "£" + (a + b + c);
  }
}

module.exports = calculateBill;
