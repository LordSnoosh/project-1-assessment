var totalDisp = {
    totalvalue: [],
    initvalue: 1,
    inputnumber: ""
};
function initadd() {
totalDisp.totalvalue = addition.result;
totalDisp.initvalue = addition.inptval;
};
function initsub() {
    totalDisp.totalvalue = subtraction.result;
    totalDisp.initvalue = subtraction.inptva);
    };


totalDisp.totalvalue = document.getElementById("display");
totalDisp.inputnumber = document.getElementById("input");
document.getElementById("plusId").addEventListener("click", addition);
document.getElementById("minusId").addEventListener("click", subtraction);

function addition() {
var inptval = parseInt(document.getElementById("input").value);
var initval = parseInt(totalDisp.initvalue);
var result = inptval + initval;
document.getElementById("display").value = result;
initadd();
};

function subtraction() {
    var inptval = parseInt(document.getElementById("input").value);
    var initval = parseInt(totalDisp.initvalue);
    var result = inptval - initval;
    document.getElementById("display").value = result;
    initsub();
    };