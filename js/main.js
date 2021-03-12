var totalDisp = {
    totalvalue: [],
    initvalue: 1,
    inputnumber: ""
};

totalDisp.totalvalue = document.getElementById("display");
totalDisp.inputnumber = document.getElementById("number-input")
document.getElementById("plusId").addEventListener("click", addition);
document.getElementById("minusId").addEventListener("click", subtraction);

function addition() {
var inptval = parseInt(document.getElementById("number-input").value);
var initval = parseInt(totalDisp.initvalue.value);
var result = inptval + initval;
document.getElementById("display").value = result;
return false;
};

function subtraction() {
    var inptval = parseInt(document.getElementById("number-input").value);
    var initval = totalDisp.initvalue;
    var minused = parseInt(inptval) - parseInt(initval);
    
    };