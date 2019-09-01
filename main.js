let storePrice = document.getElementById("amount-due").value;
let custCash = document.getElementById("amount-received").value;

function calculateChange(custCash, storePrice) {
  let newAmount = custCash % storePrice;
  let change = {};

  const cashValue = [100, 25, 10, 5, 1];
  const cashType = [
    document.getElemementById("dollars-output").innerHTML,
    document.getElementById("quarter-output").innerHTML,
    document.getElementById("dimes-output").innerHTML,
    document.getElementById("nickles-output").innerHTML,
    document.getElementById("pennies-output").innerHTML
  ];

  let amount = 0;

  for (var i = 0; i < cashValue.length; i++) {
    amount = Math.floor(newAmount / cashValue[i]);
    if (amount > 0) {
      change[cashType[i]] = amount;
      newAmount = newAmount % cashValue[i];
    }
  }

  return change;
}

function handleClickEvent(e) {
  let userCash = document.getElementById("amount-received").value;

  let storePrice = document.getElementById("amount-due").value;

  let result = calculateChange(userCash, storePrice);

  document.getElementById("calculate-change").value = result;
}
