var money = [1, 0.25, 0.1, 0.05, 0.01];

let storePrice = document.getElementById("amount-due").value;
let custCash = document.getElementById("amount-received").value;

function calculateChange(custCash, storePrice) {
  let newAmount = custCash % storePrice;
  for (var i = 0; i < money.length; i++) {
    if (newAmount <= money[0]) {
      return;
    }
  }
}

function handleClickEvent(e) {}
