let submitButton = document.querySelector("button");
let inputValue = document.querySelector("input");
let guess = 70;

submitButton.addEventListener('click', e=>{
    let input = document.querySelector("input");
    let inputValue = input.value;
    input.value= '';
    console.log('input value: ', inputValue);
    if(!(inputValue>=0 && inputValue<=100)){
        wrongInput(inputValue);
    }else if(inputValue<guess){
        inputHint(true);
    }else if(inputValue>guess){
        inputHint(false);
    }else{
        successfulGuess();
    }
    e.preventDefault();
})

function successfulGuess(){
    let successDiv = document.getElementById("success-block")
    successDiv.classList.remove("hide");
    successDiv.innerHTML = "You Guessed Successfully";
}

function inputHint(isSmallInput){
    let hintDiv = document.getElementById("hint-block")
    hintDiv.classList.remove("hide");
    if(isSmallInput==true){
        hintDiv.innerHTML = 'try to guess bigger number';
    }else{
        hintDiv.innerHTML = 'try to guess smaller number';
    }
}


function clearInputHint(){
    document.getElementById("hint-block").classList.add('hide')
}

function wrongInput(value){
    let errDiv = document.getElementById("err-block")
    errDiv.innerHTML = `${value} is not a valid input. Try a integer between 0-100`;
    errDiv.classList.remove('hide');
}

function clearError(){
    document.getElementById("err-block").classList.add('hide');
}

function clearSuccessDiv(){
    let successDiv = document.getElementById("success-block");
    successDiv.classList.add('hide');
}

inputValue.addEventListener('focus', e=>{
    clearError();
    clearSuccessDiv();
    clearInputHint();   
})