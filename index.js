let result = "";
const mainContainer = document.querySelector("#main-container");
const input = document.querySelector("#input");
input.textContent = result;

 function disableOperations(){
  multiply.disabled = true;
  divide.disabled = true;
  plus.disabled = true;
  minus.disabled = true;
 }
function enableOperations(){
  multiply.disabled = false;
  divide.disabled = false;
  plus.disabled = false;
  minus.disabled = false;
}

function disableNumbers(){
  one.disabled = true;
  two.disabled = true;
  three.disabled = true;
  four.disabled = true;
  five.disabled = true;
  six.disabled = true;
  seven.disabled = true;
  eight.disabled = true;
  nine.disabled = true;
  zero.disabled = true;
}

function enableNumbers(){
  one.disabled = false;
  two.disabled = false;
  three.disabled = false;
  four.disabled = false;
  five.disabled = false;
  six.disabled = false;
  seven.disabled = false;
  eight.disabled = false;
  nine.disabled = false;
  zero.disabled = false;
}
const one = document.querySelector("#one");
one.addEventListener("click", function () {
  enableOperations();
  result += 1;
  input.value = result;
});
const two = document.querySelector("#two");
two.addEventListener("click", function () {
  enableOperations();
  result += 2;
  input.value = result;
});
const three = document.querySelector("#three");
three.addEventListener("click", function () {
  enableOperations();
  result += 3;
  input.value = result;
});
const four = document.querySelector("#four");
four.addEventListener("click", function () {
  enableOperations();
  result += 4;
  input.value = result;
});
const five = document.querySelector("#five");
five.addEventListener("click", function () {
  enableOperations();
  result += 5;
  input.value = result;
});
const six = document.querySelector("#six");
six.addEventListener("click", function () {
  enableOperations();
  result += 6;
  input.value = result;
});
const seven = document.querySelector("#seven");
seven.addEventListener("click", function () {
  enableOperations();
  result += 7;
  input.value = result;
});
const eight = document.querySelector("#eight");
eight.addEventListener("click", function () {
  enableOperations();
  result += 8;
  input.value = result;
});
const nine = document.querySelector("#nine");
nine.addEventListener("click", function () {
  enableOperations();
  result += 9;
  input.value = result;
});
const zero = document.querySelector("#zero");
zero.addEventListener("click", function () {
  enableOperations();
  result += 0;
  input.value = result;
});
const divide = document.querySelector("#divide");
divide.addEventListener("click", function () {
  disableOperations();
  enableNumbers();
  result += "/";
  input.value = result;
});
const multiply = document.querySelector("#multiply");
multiply.addEventListener("click", function() {
  disableOperations();
  enableNumbers();
  result += "*";
  input.value = result;
});
const minus = document.querySelector("#minus");
minus.addEventListener("click", function () {
  disableOperations();
  enableNumbers();
  result += "-";
  input.value = result;
});
const plus = document.querySelector("#plus");
plus.addEventListener("click", function () {
  disableOperations();
  enableNumbers();
  result += "+";
  input.value = result;
});
const equals = document.querySelector("#equals");
equals.addEventListener("click", function () {
  disableNumbers();
  result = eval(result);
  input.value = result;
});
const clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  enableNumbers();
  result = "";
  input.value = result;
});
