var totalDisp = {
    totalvalue: null,
    initvalue: 1,
    inputnumber: ""
};

totalDisp.totalvalue = document.getElementById("number-input");
document.getElementById("plus").addEventListener("click", addition);
document.getElementById("minus").addEventListener("click", subtraction);

function addition() {
var inptval = parseInt(document.getElementById("number-input").value);
var initval = totalDisp.initvalue;
var totl = document.getElementById("count-display")
totl.value = initval = inptval;
};

function subtraction() {

};