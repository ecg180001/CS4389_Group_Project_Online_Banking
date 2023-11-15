function showPage(pageId) {
  // Hide all pages
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    page.style.display = "none";
  });

  // Show the selected page
  var selectedPage = document.getElementById(pageId);
  selectedPage.style.display = "block";
}

function showAccountDetails(accountType) {
  var accountDetailsPage = document.getElementById("accountDetails");
  var accountName = document.getElementById("accountName");
  var accountBalance = document.getElementById("accountBalance");
  var accountRouting = document.getElementById("accountRouting");
  var accountNumber = document.getElementById("accountNumber");

  // Update account details based on the selected account
  if (accountType === "checking") {
    accountName.innerText = "Checking Account";
    accountBalance.innerText = "Balance: $5000";
    accountRouting.innerText = "Routing Number: 123456789";
    accountNumber.innerText = "Account Number: 987654321";
  } else if (accountType === "savings") {
    accountName.innerText = "Savings Account";
    accountBalance.innerText = "Balance: $10000";
    accountRouting.innerText = "Routing Number: 987654321";
    accountNumber.innerText = "Account Number: 123456789";
  }

  showPage("accountDetails");
}

function makeDeposit() {
  // Implement deposit logic here
  alert("Deposit successful!");
}

function makeWithdrawal() {
  // Implement withdrawal logic here
  alert("Withdrawal successful!");
}

function sendMoney() {
  // Implement send money logic here
  alert("Money sent successfully!");
}

function showForm(transactionType) {
  var transactionForm = document.getElementById("transactionForm");
  var transactionTypeLabel = document.getElementById("transactionTypeLabel");
  var moneyForm = document.getElementById("moneyForm");

  if (transactionType === "deposit") {
    transactionTypeLabel.innerText = "Make Deposit";
  } else if (transactionType === "withdraw") {
    transactionTypeLabel.innerText = "Make Withdrawal";
  }

  // Reset form values
  moneyForm.reset();

  transactionForm.style.display = "block";
}

function submitTransaction() {
  var transactionTypeLabel = document.getElementById("transactionTypeLabel");
  var accountSelect = document.getElementById("accountSelect");
  var amountInput = document.getElementById("amountInput");

  var accountType = accountSelect.value;
  var amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive amount.");
    return;
  }

  if (transactionTypeLabel.innerText === "Make Withdrawal") {
    var accountBalance = accountType === "checking" ? 5000 : 10000; // Placeholder balances
    if (amount > accountBalance) {
      alert("Withdrawal amount cannot exceed the account balance.");
      return;
    }
  }

  // Implement logic to update the account balance based on the transaction type and amount
  // For a real application, you would typically send this data to the server for processing.

  alert("Transaction successful!");
  showPage("addSend");
}

function cancelTransaction() {
  var transactionForm = document.getElementById("transactionForm");
  transactionForm.style.display = "none";
}

// Sample transactions for initial transaction history
var sampleTransactions = [
  { type: "Deposit", account: "Checking Account", amount: 1000 },
  { type: "Withdrawal", account: "Savings Account", amount: 500 },
  { type: "Deposit", account: "Checking Account", amount: 2000 },
];

// Function to display transaction history
function displayTransactionHistory() {
  var transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = ""; // Clear existing list

  for (var i = 0; i < sampleTransactions.length; i++) {
    var transaction = sampleTransactions[i];
    var listItem = document.createElement("li");
    listItem.innerHTML = `${transaction.type} - ${
      transaction.account
    }: $${transaction.amount.toFixed(2)}`;
    transactionList.appendChild(listItem);
  }
}

// Initial display of transaction history
displayTransactionHistory();

// ... (unchanged parts of JavaScript) ...

function submitTransaction() {
  var transactionTypeLabel = document.getElementById("transactionTypeLabel");
  var accountSelect = document.getElementById("accountSelect");
  var amountInput = document.getElementById("amountInput");

  var accountType = accountSelect.value;
  var amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive amount.");
    return;
  }

  if (transactionTypeLabel.innerText === "Make Withdrawal") {
    var accountBalance = accountType === "checking" ? 5000 : 10000; // Placeholder balances
    if (amount > accountBalance) {
      alert("Withdrawal amount cannot exceed the account balance.");
      return;
    }
  }

  // Update the account balance based on the transaction type and amount
  // For a real application, you would typically send this data to the server for processing.

  // Add the new transaction to the sample transactions
  var transaction = {
    type: transactionTypeLabel.innerText,
    account:
      accountType === "checking" ? "Checking Account" : "Savings Account",
    amount: amount,
  };
  sampleTransactions.push(transaction);

  alert("Transaction successful!");
  showPage("addSend");
  displayTransactionHistory(); // Update the transaction history
}

// ... (unchanged parts of JavaScript) ...
