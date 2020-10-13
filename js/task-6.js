const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", lengthValidation);
function lengthValidation(){
    if (validationInput.value.length == validationInput.dataset.length){
    validationInput.classList.add("valid")
    validationInput.classList.remove("invalid")
    }
    else{
    validationInput.classList.remove("valid")
    validationInput.classList.add("invalid")    
    }
}
  