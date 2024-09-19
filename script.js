const display = document.getElementById("display");

function toDisplay(input) {
    display.value += input;
}
function clearValue() {
    display.value = "";
}
function calculate() {    
    try {
        display.value = eval(display.value); 
    }
    catch(error) {
        display.value = "error"
    }     
}