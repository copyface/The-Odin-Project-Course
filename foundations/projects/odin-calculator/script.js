// variables
let history = null;
let current = "";

// elements
const button = document.querySelector(".buttons");
const currentNumber = document.querySelector("#current");
const historyNumber = document.querySelector("#history");



// events
button.addEventListener('click', (e) => {
  const value = e.target;

  if (value.matches('.buttons__item--operand')) {
    current = value.value;
    if (currentNumber.textContent === '0') {
      currentNumber.textContent = current;
    } else {
      currentNumber.textContent += current;
    }
  } else if (value.matches(".buttons__item--operator")) {
    console.log(value.value);
  } else if (value.matches("#delete")) {
    currentNumber.textContent
  } else if (value.matches("#clear")) {
    console.log(value.value);
  } else if (value.matches("#equals")) {
    console.log(value.value);
  }

});



// operator functions
function add() {

}

function subtruct() {

}

function multiply() {

}

function divide() {

}
