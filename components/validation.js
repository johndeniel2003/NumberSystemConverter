
// Variables used for validation
import {convertBtn,input,firstOption,errMsg} from "./app.js"
export {pattern}


 //this is all the pattern that we are using
 const pattern = {
    'binary' : '^[01]+$',
    'decimal' : '^[0-9]+$',
    'hexadecimal' : '^[0-9a-fA-F]+$'
   }


//We export our sanitize function to our app.js
export function sanitize(){

    // for validating patterns to use according to which convertion to make
    firstOption.addEventListener('change',(attr)=>{
        validatingOptions(attr);
    })


    function validatingOptions(values){
        let option = values.target.value;


         // we check if what is the value of our first option

         if(option === 'binary'){
            // if the value in our first option is binary
            // then we return the pattern to use to validate our input for binary
           
            input.setAttribute('name','binary')

            //we pass the pattern to our patternValidation function
            patternValidation(pattern.binary);

         }else if(option === 'decimal' || option === 'octal'){

            // This is the pattern of decimal and octal
            input.setAttribute('name','decimal and octal')

            patternValidation(pattern.decimal);


         }else if (option === 'hexadecimal'){

            
            input.setAttribute('name','hexadecimal')

            patternValidation(pattern.hexadecimal);

         }

    }
//Pattern validation ends


    //This function is for setting the pattern attribute in our input field
    function patternValidation(pattern){

        // we assign the pattern attribute to our input
        input.setAttribute(`pattern`,`${pattern}`);

        //we call our validation function
        isValidated(input.value);

    }



// for validatiion when inputting values
input.addEventListener('input',(e)=>{

    //we call our validation function
    isValidated(e.target.value)
    
})



//function for checking validation

function isValidated(e){
    let name = input.getAttribute('name');

    // we check if the inputted values is valid or not
    if(!input.checkValidity()){
        errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${e} is not a valid input for ${name}`
        errMsg.style.display = 'block'
        convertBtn.setAttribute('disabled','')
    }else{
        errMsg.innerHTML = ''
        errMsg.style.display = 'none'
        convertBtn.removeAttribute('disabled')
    }

}


    //This function is for validating the swapped values 
 function swapValuesValidation(option){
    let name, validationPattern;

    if(option === 'binary'){
        name = 'binary';
        validationPattern = pattern.binary

        patternValidation(pattern.binary);
     }else if(option === 'decimal' || option === 'octal'){
        name = 'decimal and octal';
        validationPattern = pattern.decimal;

        patternValidation(pattern.decimal);
     }else if (option === 'hexadecimal'){
        name = 'hexadecimal';
        validationPattern = pattern.hexadecimal

     }

     input.setAttribute('name',name);
     patternValidation(validationPattern);
}


    return {
        swapValuesValidation

    };


}

//sanitize function ends



//This function checks if the input is empty , null or undefined
export function isEmpty(val){
    return val === '' || val === null || val === undefined;
}
//function checks empty ends






