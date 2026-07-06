// calculator program

// const display=document.getElementById('display');

function appendToDisplay(input){
    if (!isPowerOn) return;

    const display=document.getElementById('display');
    display.value += input;
}

function clearDisplay(){
    if (!isPowerOn) return;
    display.value="";
}

function calculate(){
     if (!isPowerOn) return;

    try{
         display.value= eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
   
}

function deleteLastDigit(){
     if (!isPowerOn) return;
    display.value= display.value.slice(0,-1);
}

// power button logic
let isPowerOn = true;
function togglePower(){
    isPowerOn= !isPowerOn;
    const display=document.getElementById('display');

    if(isPowerOn){
        display.value='';
        display.placeholder='On'}
        else {
        display.value = '';
        display.placeholder = 'OFF';
    
    }
}