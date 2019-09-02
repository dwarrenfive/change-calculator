function calculateChange(custCash, storePrice) {
  var storePrice = document.getElementById("amount-due").value; // 800
  var custCash = document.getElementById("amount-received").value; // 1000
  var newAmount = custCash - storePrice; // 200

  const cashValue = [100, 25, 10, 5, 1];

  let amount = 0;

  for (var i = 0; i < cashValue.length; i++) {
    amount = Math.floor(newAmount / cashValue[i]); // 200
    newAmount = newAmount % cashValue[i];
    if (amount > 100) {
      var dollars = amount;
      document.getElementById(
        "dollars-output"
      ).innerHTML = `Dollars: ${dollars}`;
    }
    if (amount > 25) {
      var quarters = amount;
      document.getElementById(
        "quarters-output"
      ).innerHTML = `Quarters: ${quarters}`;
    }
    if (amount > 10) {
      var dimes = amount;
      document.getElementById("dimes-output").innerHTML = `Dimes: ${dimes}`;
    }
    if (amount > 5) {
      var nickels = amount;
      document.getElementById(
        "nickels-output"
      ).innerHTML = `Nickles: ${nickels}`;
    }
    if (amount > 1) {
      var pennies = amount;
      document.getElementById(
        "pennies-output"
      ).innerHTML = `Pennies: ${pennies}`;
    }
  }
}

function handleClickEvent(e) {
  return calculateChange();

  /* let userCash = document.getElementById("amount-received").value;
  let storePrice = document.getElementById("amount-due").value;
  let result = calculateChange(userCash, storePrice); 
  document.getElementById("calculate-change").value = result; */
}
