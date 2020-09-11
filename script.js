var calculatorEle = document.body.querySelector(".calculator")
var number1 = Number(prompt("Enter your first number."))
if(isNaN(number1))
  {
    calculatorEle.innerHTML="Value entered for your first number was not a constant number."
  }

var operator=(prompt("Please enter an operation to be performed, such as a plus or a minus sign."))

var number2 = Number(prompt("Enter second number."));
if(isNaN(number2)){
   calculatorEle.innerHTML="Value entered for number 2 is not a number.";
}
if(operator=="*"){
var total= number1*number2;
  document.body.querySelector(".calculator").innerHTML=total;
}else if(operator=="/"){
  var total=number1/number2;
  document.body.querySelector(".calculator").innerHTML=total;
}else if(operator=="+"){
  var total = number1+number2;
  document.body.querySelector(".calculator").innerHTML=total;
}else if(operator=="-"){
  var total=number1-number2;
  document.body.querySelector(".calculator").innerHTML=total;
}else{
  calculatorEle.innerHTML="Value entered for operator was not an operator.";
}