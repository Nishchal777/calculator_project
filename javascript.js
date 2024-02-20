function display(val) {
  document.getElementById("value").value += val;
}

function calc() {
  var calc = document.getElementById("value").value;
  var res = eval(calc);
  document.getElementById("value").value = res;
}

function clr() {
  document.getElementById("value").value = "";
}
