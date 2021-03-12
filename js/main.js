let runningTotal;


const input1El = document.querySelector("#input");

function init() {
    runningTotal = 0;
    render();
  };

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
    let input2Value = parseInt(runningTotal.value);
   
    runningTotal += (input1Value + input2Value);
    render();
    input1El.value = input2El.value =input3El.value = "";
  };