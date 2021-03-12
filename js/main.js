var totalDisp = {
    totalvalue: 0,
    initvalue: 0,
    inputnumber: 0,
};
function initadd() {
totalDisp.totalvalue = addition.result;
totalDisp.initvalue = addition.inptval;
};
function initsub() {
    totalDisp.totalvalue = subtraction.result;
    totalDisp.initvalue = subtraction.inptval;
    };


totalDisp.totalvalue = document.getElementById("disp");
totalDisp.inputnumber = document.getElementById("input");
document.getElementById("plusId").addEventListener("click", addition);
document.getElementById("minusId").addEventListener("click", subtraction);

function addition() {
var inptval = parseInt(document.getElementById("input").value);
var initval = parseInt(totalDisp.initvalue);
var result = inptval + initval;
document.getElementById("disp").innerHTML = result;
initadd();
};

function subtraction() {
    var initval = totalDisp.totalvalue;
    var inptval = parseInt(document.getElementById("input").value);
    var result = initval - inptval;
    document.getElementById("disp").innerHTML = result;
    console.log(result)
    };