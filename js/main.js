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
    totalDisp.totalvalue = subtraction.ansD;
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
document.getElementById("disp").value = result;
initadd();
};

function subtraction() {
    var total = parseInt(document.getElementById("disp").value);
    var val2 = parseInt(document.getElementById("input").value);
    var result = total - val2;
    document.getElementById("disp").value = result;
    initsub();
    };

