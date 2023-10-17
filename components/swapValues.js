import{
    firstOption,
    secondOption,
    resultLabel1,
    resultLabel2,
    switchBtn,
    labelFrom,
    labelTo,
    firstResult,
    secondResult,
    input,
} from "./app.js"

import { sanitize } from "./validation.js";

export default function swapValues(){
    const sanitizeFunction = sanitize();
    const swapValidation = sanitizeFunction.swapValuesValidation;

    
    let tempForLabel;
    let tempForResult;
    let tempForValues;
    let isSwitched = false;

    switchBtn.addEventListener('click',()=>{

        isSwitched = true;

        if(isSwitched){
            input.focus();
            switchOptions();
            swapValidation(firstOption.value);
        }


        function switchOptions(){
            firstResult.value = '';
            secondResult.value = '';


            tempForValues = firstOption.value;
            firstOption.value = secondOption.value;
            secondOption.value = tempForValues;
            
            switchLabels(firstOption.value,secondOption.value);
        }

        function switchLabels(label1,label2){

            tempForLabel = label2;
            labelFrom.innerHTML = `From: ${label1}`;
            labelTo.innerHTML = `To: ${tempForLabel}`;

            tempForResult = label2;
            resultLabel1.textContent = label1;
            resultLabel2.textContent = tempForResult;

        }

    })

    

    
}