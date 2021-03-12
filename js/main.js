// App State
let runningTotal;
// Cached Elements
const input1El = document.querySelector("#num2");
const totalEl = document.querySelector("h1 span");
// Event Listeners
document.querySelector("#plus").addEventListener("click", handleClick);
document.querySelector("#minus").addEventListener("click", handleClick);

// Functions



function init() {
  runningTotal = 0;
  render();
};

init();

function render() {
  if (runningTotal >= 0) {
    totalEl.textContent = "+" + runningTotal;
    totalEl.style.color = "green";
  } else {
    totalEl.textContent = runningTotal;
    totalEl.style.color = "red";
  }
};

function handleClick() {
  let input1Value = parseInt(input1El.value);
  let input3Value = parseInt(runningTotal.value);
  total += (input1Value + input3Value);
  render();
  input1El.value = input2El.value =input3El.value = "";
};