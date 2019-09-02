function calculateChange(custCash, storePrice) {
  var storePrice = document.getElementById("amount-due").value; // 800
  var custCash = document.getElementById("amount-received").value; // 1000

  var newAmount = custCash - storePrice; // 200

  const cashValue = [100, 25, 10, 5, 1];

  var amount;

  for (var i = 0; i < cashValue.length; i++) {
    amount = newAmount % cashValue[i];
    if (newAmount > 100) {
      var dollars = Math.floor(newAmount / 100);

      document.getElementById(
        "dollars-output"
      ).innerHTML = `Dollars: ${dollars}`;
    }
    if (newAmount > 25) {
      var quarters = Math.floor(newAmount / 25);

      document.getElementById(
        "quarters-output"
      ).innerHTML = `Quarters: ${quarters}`;
    }
    if (newAmount > 10) {
      var dimes = Math.floor(newAmount / 10);
      document.getElementById("dimes-output").innerHTML = `Dimes: ${dimes}`;
    }
    if (newAmount > 5) {
      var nickels = Math.floor(newAmount / 5);
      document.getElementById(
        "nickels-output"
      ).innerHTML = `Nickles: ${nickels}`;
    }
    if (newAmount > 1) {
      var pennies = Math.floor(newAmount / 1);
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
