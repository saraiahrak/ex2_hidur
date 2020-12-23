// Dekel Yosef 315634071
// Sarai Ahrak 204894000


// DOM manipulation
console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function add () {
  console.log(this);

  var num1 = document.getElementById("num1").value;
  if (num1 === "") {num1 = 0}

  var num2 = document.getElementById("num2").value;
  if (num2 === "") {num2 = 0}

  var message;

  if(isNaN(num1) || isNaN(num2)) {message = "<p> please enter numbers only!</p>";}
  else {
  var sum = Number(num1) + Number(num2)
  message = "<p>" + num1 + " + " + num2 + " = " + sum + "</p>";
  }

  document
    .querySelector("div")
    .innerHTML = message;
}
