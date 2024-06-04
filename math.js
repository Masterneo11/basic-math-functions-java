let number1 = document.getElementById("number-1")
let number2 = document.getElementById("number-2")


function add(number1, number2){

    // let convert1 = Number(number1.value);
    // let convert2 = Number(number2.value);
    let adding = number1 + number2;
    return adding
    
};

function getAdd(){
    let convert1 = Number(number1.value);
    let convert2 = Number(number2.value);
    alert(add(convert1 , convert2));
};

function multiply(number1, number2) {
    
    let multiplying = number1 * number2; 
    return multiplying
};

function getMultiply(){
    let convert1 = Number(number1.value);
    let convert2 = Number(number2.value);
    alert(multiply(convert1, convert2));
}

function square(number1) {
   const a = multiply(number1, number1);
    return a
};
function getSquare(){
    let convert1 = Number(number1.value);
    alert(square(convert1))
}

function addSquare(convert1, convert2) {
    let a = square(convert1);
    let b = square(convert2);
    return add(a, b);
    
}
function getAddSquare() {
    let convert1 = Number(number1.value);
    let convert2 = Number(number2.value);
    alert(addSquare(convert1, convert2));
    
}