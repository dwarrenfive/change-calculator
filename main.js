function calculateChange(custCash, storePrice) {
  var storePrice = document.getElementById("amount-due").value;
  var custCash = document.getElementById("amount-received").value;

  var changeValue = 100 * (custCash - storePrice);

  const cashValue = [10000, 5000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  // var amount;

  for (var i = 0; i < cashValue.length; i++) {
    // amount = newAmount % cashValue[i];
    if (changeValue >= 10000) {
      document.getElementById("hundreds-output").innerHTML =
        "Hundred: " + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 5000) {
      document.getElementById("fifties-output").innerHTML =
        "Fifty: " + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 2000) {
      document.getElementById("twenties-output").innerHTML =
        "Twenty: " + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 1000) {
      document.getElementById("tens-output").innerHTML =
        "Ten: " + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 500) {
      document.getElementById("fives-output").innerHTML =
        "Five: " + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 100) {
      document.getElementById("dollars-output").innerHTML =
        "Dollar: " + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 25) {
      document.getElementById("quarters-output").innerHTML =
        "Quarter: " + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 10) {
      document.getElementById("dimes-output").innerHTML =
        "Dime: " + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 5) {
      document.getElementById("nickels-output").innerHTML =
        `Nickel: ` + Math.floor(changeValue / cashValue[i]);
      changeValue = changeValue % cashValue[i];
    }
    if (changeValue >= 1) {
      document.getElementById("pennies-output").innerHTML =
        "Penny: " + Math.round(Math.floor(changeValue / cashValue[i]));
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
