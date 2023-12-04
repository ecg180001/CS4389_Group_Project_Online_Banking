document.addEventListener("DOMContentLoaded", function () {
  const depositAmountInput = document.getElementById("depositAmount");
  const addAmountInput = document.getElementById("addAmount");
  const sendAmountInput = document.getElementById("sendAmount");
  const recipientInput = document.getElementById("recipient");

  // Function to switch between balance and transactions
  window.switchToTransactions = function () {
    const balanceDiv = document.getElementById("balance");
    const transactionsPage = document.getElementById("transactions-page");

    // Toggle display based on the current state
    if (balanceDiv.style.display !== "none") {
      balanceDiv.style.display = "none";
      transactionsPage.style.display = "block";
    } else {
      balanceDiv.style.display = "block";
      transactionsPage.style.display = "none";
    }
  };

  function depositMoney() {
    const amount = parseFloat(depositAmountInput.value);
    if (!isNaN(amount)) {
      // Implement deposit logic (e.g., update balance)
      console.log(`Deposited: $${amount}`);
      depositAmountInput.value = ""; // Clear the input field
    } else {
      alert("Please enter a valid amount for deposit.");
    }
  }

  function addMoney() {
    const amount = parseFloat(addAmountInput.value);
    if (!isNaN(amount)) {
      // Implement add money logic (e.g., update balance)
      console.log(`Added: $${amount}`);
      addAmountInput.value = ""; // Clear the input field
    } else {
      alert("Please enter a valid amount to add.");
    }
  }

  function sendMoney() {
    const amount = parseFloat(sendAmountInput.value);
    const recipient = recipientInput.value.trim();
    if (!isNaN(amount) && recipient !== "") {
      // Implement send money logic (e.g., update balances)
      console.log(`Sent: $${amount} to ${recipient}`);
      sendAmountInput.value = ""; // Clear the input fields
      recipientInput.value = "";
    } else {
      alert("Please enter a valid amount and recipient.");
    }
  }
});
