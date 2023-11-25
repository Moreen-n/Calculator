let result = "";
const mainContainer = document.querySelector("#main-container");
const input = document.querySelector("#input");
input.textContent = result;
const one = document.querySelector("#one");
one.addEventListener("click", function () {
  result += 1;
  input.value = result;
});
const two = document.querySelector("#two");
two.addEventListener("click", function () {
  result += 2;
  input.value = result;
});
const three = document.querySelector("#three");
three.addEventListener("click", function () {
  result += 3;
  input.value = result;
});
const four = document.querySelector("#four");
four.addEventListener("click", function () {
  result += 4;
  input.value = result;
});
const five = document.querySelector("#five");
five.addEventListener("click", function () {
  result += 5;
  input.value = result;
});
const six = document.querySelector("#six");
six.addEventListener("click", function () {
  result += 6;
  input.value = result;
});
const seven = document.querySelector("#seven");
seven.addEventListener("click", function () {
  result += 7;
  input.value = result;
});
const eight = document.querySelector("#eight");
eight.addEventListener("click", function () {
  result += 8;
  input.value = result;
});
const nine = document.querySelector("#nine");
nine.addEventListener("click", function () {
  result += 9;
  input.value = result;
});
const zero = document.querySelector("#zero");
zero.addEventListener("click", function () {
  result += 0;
  input.value = result;
});
const divide = document.querySelector("#divide");
divide.addEventListener("click", function () {
  result += "/";
  input.value = result;
});
const multiply = document.querySelector("#multiply");
multiply.addEventListener("click", function () {
  result += "*";
  input.value = result;
});
const minus = document.querySelector("#minus");
minus.addEventListener("click", function () {
  result += "-";
  input.value = result;
});
const plus = document.querySelector("#plus");
plus.addEventListener("click", function () {
  result += "+";
  input.value = result;
});
const equals = document.querySelector("#equals");
equals.addEventListener("click", function () {
  result = eval(result);
  input.value = result;
});
const clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  result = "";
  input.value = result;
});
