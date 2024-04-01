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
const tr = document.querySelector("tbody");
console.log(tr);
console.log(expense);
// console.log(titleSpace,amountTwo,aboutExpenses);
const expenses = [];
sectionIncome.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("Button Clicked");
  const amount = amountValue.value;
  // console.log(amount);
  incomeText.innerText = amount;
  amountValue.value = "";
  // console.log(amount);
});
resetBtn.addEventListener("click", function () {
  console.log("clicked");
  amountValue.value = "0";
  incomeText.innerText = amountValue.value;
});
divisionExpenses.addEventListener("submit", function (e) {
  e.preventDefault();
  const expenseValue = amountTwo.value;
  expense.innerText = expenseValue;
  const expenseDescription = {
    name: titleSpace.value,
    value: amountTwo.value,
  };
  expenses.push(expenseDescription);
  console.log(expenses);
  amountTwo.value = "";
  const titleDetails = titleSpace.value;
  // const amountDetails=amountTwo.value;
  expenses.forEach((expense) => {
    const expenseHtml = ` <tr class="tr">
    <td class="title">${titleDetails}</td>
    <td class="title">${expenseValue}</td>
  </tr>`;
    tr.insertAdjacentHTML("beforeend", expenseHtml);
  });
});

// divisionExpenses.addEventListener("submit", function () {
//   const titleDetails = titleSpace.value;
//   console.log(titleDetails);
// });
