import { input,firstOption,secondOption,convertBtn,firstResult,secondResult } from "./app.js";


// This function is for calculating all octal convertion
// such as octal to decimal , binary , hexadecimal

export default function calculateOct(num){
    let octal = parseInt(num,8);
    firstResult.value = `${num}`;

    if(firstOption.value === "octal" && secondOption.value === "octal"){

        secondResult.value = `${num}`;

    }else if (firstOption.value === "octal" && secondOption.value === "binary"){

        let binVal = octal.toString(2);
        secondResult.value = `${binVal}`;

    }else if(firstOption.value === "octal" && secondOption.value === "decimal"){

        let decVal = parseInt(num,8);
        secondResult.value = `${decVal}`;

    }else if(firstOption.value === "octal" && secondOption.value === "hexadecimal"){


        let hexVal = octal.toString(16).toUpperCase();
        secondResult.value = `${hexVal}`;
    }

}