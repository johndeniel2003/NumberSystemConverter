import { isEmpty, sanitize } from "./validation.js";
import calculateBin from "./calculateBinary.js";
import calculateDec from "./calculateDecimal.js";
import calculateOct from "./calculateOctal.js";
import calculateHex from "./calculateHex.js";
import menu from "./menu.js";
import recentConvertion from "./recentConvertion.js";
import swapValues from "./swapValues.js";
import { pattern } from "./validation.js";

export {
  convertBtn,
  input,
  firstOption,
  errMsg,
  secondOption,
  firstResult,
  secondResult,
  resultLabel1,
  resultLabel2,
  switchBtn,
  labelFrom,
  labelTo,
  clearBtn,
  filter,
};

// variables used in this program
const convertBtn = document.querySelector("#convert");
const input = document.querySelector("#input");
const firstOption = document.querySelector("#option1");
const secondOption = document.querySelector("#option2");
const errMsg = document.querySelector("#errMsg");
const labelFrom = document.querySelector("#label1");
const labelTo = document.querySelector("#label2");
const firstResult = document.querySelector(".result1");
const secondResult = document.querySelector(".result2");
const resultLabel1 = document.querySelector(".resultLabel1");
const resultLabel2 = document.querySelector(".resultLabel2");
const spinner = document.querySelector("#spinner");
const textResult = document.querySelector("#textResult");
const firstCopyBtn = document.querySelector("#firstCopyBtn");
const secondCopyBtn = document.querySelector("#secondCopyBtn");
const switchBtn = document.querySelector('#switch');
const clearBtn = document.querySelector('#clear');
const filter = document.querySelector('#filter');

//for input validation and pattern validation
sanitize();
swapValues();

// after we validate the inputs we can now proceed to convertion
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //we check if the input is empty or not
  if (isEmpty(input.value)) {
    alert("Please input some values");
    input.focus();
  } else {
    //we call our all calculations from our function

    try {
      loader();
      

      setTimeout(() => {
        calculateAllRepresentations(input.value);
        recentConvertion();

        spinner.classList.remove("active");
        textResult.textContent = "Result";
      }, 2000);
    } catch (error) {
      alert(`Error: ${error}`);
    }
  }
});
//convertion ends

//this function is responsible for all number system calculations
function calculateAllRepresentations(value) {
  calculateBin(value);
  calculateDec(value);
  calculateOct(value);
  calculateHex(value);
}
//number system calculations ends

//For changing the label name
firstOption.addEventListener("change", (e) => {
  const firstLabel = e.target.value;
  labelNames(firstLabel,labelFrom,resultLabel1,'From');
});

secondOption.addEventListener("change", (e) => {
  const secondLabel = e.target.value;
  labelNames(secondLabel,labelTo,resultLabel2,'To');

});


function labelNames(name,label,resultLabel,loc){

  label.innerHTML = `${loc}: ${name}`;
  resultLabel.innerHTML = `${name}`;

}
//label name ends

//For loading animation
function loader() {
  spinner.classList.toggle("active");
  textResult.textContent = "";
}
//loader ends

//for copying the result value
firstCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(firstResult.value);
});
secondCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(secondResult.value);
});
//copy result ends

//function for side menu bar
menu();
//menu ends


clearBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  input.value = '';
  input.focus();

  const optionValue = 'binary';
  firstOption.value = secondOption.value = optionValue;
  labelFrom.innerHTML = `From: ${optionValue}`;
  labelTo.innerHTML = `To: ${optionValue}`;
  resultLabel1.textContent = resultLabel2.textContent = optionValue;
  firstResult.value = '';
  secondResult.value = '';
  input.setAttribute('pattern',pattern.binary);
  input.setAttribute('name','binary');
  errMsg.style.display = 'none';


})