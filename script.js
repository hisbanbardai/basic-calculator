const buttonsEle = document.querySelectorAll("button");
const inputEle = document.getElementById("result");

buttonsEle.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.textContent === "C") {
      clearInput();
    } else if (ele.textContent === "=") {
      calculateResult();
    } else if (ele.textContent === "Del") {
      deleteValue();
    } else {
      appendValue(ele.textContent);
    }
  })
});

// function clearInput(){
//   inputEle.value = "";
// }

// function calculateResult() {
//   inputEle.value = eval(inputEle.value);
// }

// function deleteValue() {
//   inputEle.value = inputEle.value.slice(0, inputEle.value.length - 1);
// }

// function appendValue(buttonValue) {
//   inputEle.value += buttonValue;
// }