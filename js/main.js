/*----- app's state (variables) -----*/
let total;
/*----- cached element references -----*/
const inputEl = document.querySelector("#one");
const totalEl = document.querySelector("h1 span");
/*----- event listeners -----*/
document.getElementById("plus").addEventListener("click", handleAdd);
document.getElementById("minus").addEventListener("click", handleSub);
/*----- functions -----*/
function init() {
    total = 0;
    render();
}
init();
function render() {
    if (total >= 0) {
        totalEl.textContent = total;
        totalEl.style.color = "green";
        inputEl.value = "1";
    } else {
        totalEl.textContent = total;
        totalEl.style.color = "red";
        inputEl.value = "1";
    } 
}
function handleAdd() {
    let plusValue = parseInt(inputEl.value);
    total += (plusValue);
    render();
 }
 function handleSub() {
    let minusValue = parseInt(inputEl.value);
    total -= (minusValue);
    render();
 };