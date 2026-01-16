// let runningTotal = 0;
// let buffer = "0";
// let previousOperator = null;

let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innertText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

// function buttonClick(value) {
//   if (isNaN(value)) {
//     handleSymbol(value);
//   } else {
//     handleNumber(value);
//   }
//   display.innerText = buffer;
// }

// function handleSymbol(symbol) {
//   switch (symbol) {
//     case "C":
//       buffer = "0";
//       runningTotal = 0;
//       previousOperator = null;
//       break;

//     case "=":
//       if (previousOperator === null) return;
//       flushOperation(Number(buffer));
//       previousOperator = null;
//       buffer = String(runningTotal);
//       runningTotal = 0;
//       break;

//     case "←":
//       buffer = buffer.length === 1 ? "0" : buffer.slice(0, -1);
//       break;

// case "/":
//   handleMath("/");
//   break;
// case "*":
//   handleMath("*");
//   break;
// case "-":
//   handleMath("-");
//   break;
// case "+":
//   handleMath("+");
//   break;

//   }
// }

// function handleMath(symbol) {
//  if (buffer === "0" && previousOperator !== null) return;

//   const intBuffer = Number(buffer);

//   if (previousOperator !== null) {
//     flushOperation(intBuffer);
//   } else {
//     runningTotal = intBuffer;
//   }

//   previousOperator = symbol;
//   buffer = "0";
// }

// function flushOperation(intBuffer) {
//   if (previousOperator === "/") {
//     runningTotal /= intBuffer;
//   } else if (previousOperator === "*") {
//     runningTotal *= intBuffer;
//   } else if (previousOperator === "-") {
//     runningTotal -= intBuffer;
//   } else if (previousOperator === "+") {
//     runningTotal += intBuffer;
//   }
// }

// function handleNumber(numberString) {
//   buffer = buffer === "0" ? numberString : buffer + numberString;
// }

// function init() {
//   document
//     .querySelector(".buttons")
//     .addEventListener("click", function (event) {
//       if (!event.target.innerText) return;
//       buttonClick(event.target.innerText);
//     });
// }

// init();
