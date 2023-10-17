import { firstOption, secondOption, firstResult, secondResult } from "./app.js";

// This function is for calculating all binary convertion
// such as binary to decimal , octal , hexadecimal

export default function calculateBin(num) {
  let binary = parseInt(num, 2);
  firstResult.value = `${num}`;

  if (firstOption.value === "binary" && secondOption.value === "binary") {
    secondResult.value = `${num}`;
  } else if (
    firstOption.value === "binary" &&
    secondOption.value === "decimal"
  ) {
    let decVal = binary;
    secondResult.value = `${decVal}`;
  } else if (firstOption.value === "binary" && secondOption.value === "octal") {
    let octVal = binary.toString(8);
    secondResult.value = `${octVal}`;
  } else if (
    firstOption.value === "binary" &&
    secondOption.value === "hexadecimal"
  ) {
    let hexVal = binary.toString(16).toLocaleUpperCase();
    secondResult.value = `${hexVal}`;
  }
}
