const divForm = document.querySelector(".div-form");
const divisionExpenses = document.querySelector(".division-expenses");
const addExpenseBtn = document.querySelector("#addExpense");
const calculateBtn = document.querySelector("#calculateBtn");
const sectionIncome = document.querySelector(".section-income");
const resetBtn = document.querySelector("#resetBtn");
const income = document.querySelector(".income");
const amountValue = document.querySelector(".amount-value");
const incomeText = document.querySelector("#income-text");
const titleSpace = document.querySelector("#titleSpace");
const amountTwo = document.querySelector("#amountTwo");
const aboutExpenses = document.querySelector(".aboutExpenses");
const expense = document.querySelector("#expense");
const balanceText = document.querySelector("#balance");
const refeshBtn = document.querySelector("#refeshBtn");
console.log(refeshBtn);
// const tr = document.querySelector("tbody");
// console.log(tr);
// console.log(expense);
// console.log(titleSpace,amountTwo,aboutExpenses);
const expenses = [];
const incomeArray = [];

// console.log(incomeArray);

const expenseArray = [];
// console.log(expenses);
sectionIncome.addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = amountValue.value;
  const newAmount = parseInt(amount);
  // console.log(typeof newAmount);
  incomeArray.push(newAmount);
  // console.log(incomeArray);
  const sumOfIncome = incomeArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // console.log(sumOfIncome);
  incomeText.innerText = sumOfIncome;
  incomeText.style.color = "green";
  amountValue.value = "";
  updateBalance();
});
resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  incomeText.innerText = "0";
  updateBalance();
});

divisionExpenses.addEventListener("submit", function (e) {
  e.preventDefault();
  const expenseData = amountTwo.value;
  const newExpenseData = parseInt(expenseData);
  expenseArray.push(newExpenseData);
  console.log(expenseArray);
  const sumOfExpenses = expenseArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sumOfExpenses);
  expense.style.color = "red";
  expense.innerText = sumOfExpenses;
  // sumOfExpenses.style.color="red"
  const expenseDescription = {
    name: titleSpace.value,
    value: amountTwo.value,
  };
  expenses.push(expenseDescription);

  let allExpenseHtml = "";

  expenses.forEach((exp) => {
    const expenseHtml = `
    <div class="title-1">
      <h4>${exp.name}</h4>
      <h4>${exp.value}</h4>
    </div>
  `;

    allExpenseHtml += expenseHtml;
  });

  aboutExpenses.innerHTML = allExpenseHtml;
  amountTwo.value = "";
  titleSpace.value = "";
  updateBalance();
});
function updateBalance() {
  const sumOfIncome = incomeArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const sumOfExpenses = expenseArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const balance = sumOfIncome - sumOfExpenses;
  balanceText.innerText = balance;

  function changeColor() {
    if (balance === 0) {
      balanceText.style.color = "black";
    } else if (balance > 0) {
      balanceText.style.color = "green";
    } else {
      balanceText.style.color = "red";
    }
  }
  changeColor();
}
updateBalance();
refeshBtn.addEventListener("click", function () {
  window.location.reload();
});
