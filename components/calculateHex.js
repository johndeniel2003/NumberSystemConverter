import {
  input,
  firstOption,
  secondOption,
  convertBtn,
  firstResult,
  secondResult,
} from "./app.js";

// This function is for calculating all hex convertion
// such as hex to decimal , binary , octal

export default function calculateHex(num) {
  let hexadecimal = parseInt(num, 16);
  firstResult.value = `${num}`;

  if (
    firstOption.value === "hexadecimal" &&
    secondOption.value === "hexadecimal"
  ) {
    secondResult.value = `${num}`;
  } else if (
    firstOption.value === "hexadecimal" &&
    secondOption.value === "binary"
  ) {
    let binVal = hexadecimal.toString(2);
    secondResult.value = `${binVal}`;
  } else if (
    firstOption.value === "hexadecimal" &&
    secondOption.value === "decimal"
  ) {
    let decVal = parseInt(num, 16);
    secondResult.value = `${decVal}`;
  } else if (
    firstOption.value === "hexadecimal" &&
    secondOption.value === "octal"
  ) {
    let hexVal = hexadecimal.toString(8);
    secondResult.value = `${hexVal}`;
  }
}
