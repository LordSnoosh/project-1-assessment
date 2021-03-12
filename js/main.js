var totalDisp = {
    totalvalue: null,
    initvalue: 1,
    inputnumber: ""
};

totalDisp.totalvalue = document.getElementById("number-input");
document.getElementById("plusId").addEventListener("click", addition);
document.getElementById("minusId").addEventListener("click", subtraction);

function addition() {
var inptval = parseInt(document.getElementById("number-input").value);
var initval = totalDisp.initvalue;
var totl = document.getElementById("count-display")
totl.value = initval = inptval;
console.log(totl);
};

function subtraction() {

};