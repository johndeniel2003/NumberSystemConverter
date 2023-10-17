import {
  input,
  firstOption,
  secondOption,
  convertBtn,
  firstResult,
  secondResult,
} from "./app.js";

// This function is for calculating all decimal convertion
// such as decimal to binary , octal , hexadecimal

export default function calculateDec(num) {
  let decimal = parseInt(num);
  firstResult.value = `${num}`;

  if (firstOption.value === "decimal" && secondOption.value === "decimal") {
    secondResult.value = `${num}`;
  } else if (
    firstOption.value === "decimal" &&
    secondOption.value === "binary"
  ) {
    let binVal = decimal.toString(2);
    secondResult.value = `${binVal}`;
  } else if (
    firstOption.value === "decimal" &&
    secondOption.value === "octal"
  ) {
    let octVal = decimal.toString(8);
    secondResult.value = `${octVal}`;
  } else if (
    firstOption.value === "decimal" &&
    secondOption.value === "hexadecimal"
  ) {
    let hexVal = decimal.toString(16).toUpperCase();
    secondResult.value = `${hexVal}`;
  }
}
