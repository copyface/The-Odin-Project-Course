// variables
let history = null;
let current = "";

// elements
const button = document.querySelector(".buttons");
const currentValue = document.querySelector("#current");
const historyValue = document.querySelector("#history");

// events
button.addEventListener("click", (e) => {
  const value = e.target;
  current = value.value;

  if (value.matches(".buttons__item--operand")) {
    if (currentValue.textContent === "0") {
      currentValue.textContent = current;
    } else {
      currentValue.textContent += current;
    }
  } else if (value.matches(".buttons__item--operator")) {
    if (value.matches("#dot")) {
      const isDot = checkForDot(currentValue.textContent);
      if (isDot === true) {
        current = "";
      } else {
        currentValue.textContent += current;
      }
    } else {
      currentValue.textContent += current;
    }
  } else if (value.matches("#delete")) {
    if (currentValue.textContent === "0") {
      return;
    } else if (currentValue.textContent.length === 1) {
      currentValue.textContent = "0";
      return;
    }
    let lenght = currentValue.textContent.length - 1;
    currentValue.textContent = currentValue.textContent.slice(0, lenght);
  } else if (value.matches("#clear")) {
    currentValue.textContent = "0";
  } else if (value.matches("#equals")) {
    console.log(value.value);
  }
});

// dot
function checkForDot(value) {
  return value.includes('.');
}

// operator functions
function add() {}

function subtruct() {}

function multiply() {}

function divide() {}

function operate() {}
