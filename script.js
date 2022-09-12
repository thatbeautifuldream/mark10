const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let noOfNotes = [];
noOfNotes = document.querySelectorAll("#no-of-notes");

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  clearTable();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    if (numberOfNotes > 0) {
      noOfNotes[i].innerText = numberOfNotes;
    }
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function clearTable() {
  for (let i = 0; i < noOfNotes.length; i++) {
    noOfNotes[i].innerText = "";
  }
}
