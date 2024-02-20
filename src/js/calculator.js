let calculation = document.querySelector('#calculation');
let workArea = document.querySelector('#workarea');

let result = 0;

let calcString = "0";

let workingNumber = 0;
let previousNumber = 0;

let isDecimal = false;
let isFinished = false;

let currentCalculationType = "none";

function logger(){
    console.clear();
    console.log("result                 "+ result);
    console.log("calcString             "+ calcString);
    console.log("workingNumber          "+ workingNumber);
    console.log("previousNumber         "+ previousNumber);
    console.log("isDecimal              "+ isDecimal);    
    console.log("isFinished             "+ isFinished);
    console.log("currentCalculationType "+ currentCalculationType);
}

function allClear() {
    result = 0;
    workingNumber = 0;
    calcString = "0";
    previousNumber = 0;
    isComma = false;
    isFinished = false;
    currentCalculationType = "none";

    calculation.textContent = calcString;
    workArea.textContent = workingNumber;

    logger();
}

function deleteNumeral() {
    workingNumber = "" + workingNumber;
    workingNumber = workingNumber.substring(0, workingNumber.length - 1);
    if (workingNumber.length == 0 || workingNumber == 0){
        workingNumber = 0;
    }

    workArea.textContent = workingNumber;

    logger();
}

function pressOperation(o){
    if (isFinished == true){
        allClear();
    }

    if (calcString == "0"){
        calcstring = previousNumber;
    }

    finishPreviousOperation();

    if (o == "plus"){
        calcString = calcString + "+" ;
    }else if (o == "minus"){
        calcString = calcString + "-" ;
    }else if (o == "times"){
        calcString = calcString + "x" ;
    }else if (o == "divide"){
        calcString = calcString + "/" ;
    }
    calculation.textContent = calcString;

    currentCalculationType = o;

    workingNumber = 0;
    workArea.textContent = 0;

    isDecimal = false;

    logger();
}

function finishPreviousOperation(){
    previousNumber = workingNumber;

    if (currentCalculationType == "plus")
    {
        plusOperation(previousNumber)
    }else if (currentCalculationType == "minus")
    {
        minusOperation(previousNumber)
    }else if (currentCalculationType == "times")
    {
        timesOperation(previousNumber)
    }else if (currentCalculationType == "divide")
    {
        divisionOperation(previousNumber)
    }else {
        result = previousNumber;
    }
    if (calcString == "0"){
        calcString = "";
    }
    calcString = "" + calcString + previousNumber;
    calculation.textContent = calcString

    logger();
}

function addNumber(a){
    if (isFinished == true){
        allClear();
    }

    if (!isDecimal || a != '.'){
        if (workingNumber == "0"){
            workingNumber = a
        }
        else{
            workingNumber = "" + workingNumber + a;
        }
        if (a == '.'){
            isDecimal = true;
        }
        
        workArea.textContent = workingNumber; 
    }
    
    logger();
}

function posneg(){
    workingNumber = -workingNumber;

    workArea.textContent = workingNumber;

    logger();
}

function plusOperation(a){
        if(a >= 0){
            calcstring = calcString + a;
        }
        else{
            calcString = calcString + "(" + a + ")" ;
        }
    result = 1*result + 1*a;
}

function minusOperation(a){
    if(a >= 0){
        calcstring = calcString + a;
    }
    else{
        calcString = calcString + "(" + a + ")" ;
    }
    result = result - a;
}

function timesOperation(a){
    if(a >= 0){
        calcstring = calcString + a;
    }
    else{
        calcString = calcString + "(" + a + ")" ;
    }
    result = result * a;
}

function divisionOperation(a){
    if(a > 0){
        calcstring = calcString + a;
        result = result / a;
    }
    else if (a == 0){
        isFinished = true;
        resultString = "you crazy 💀"
        workArea.textContent = resultString;
    }
    else{
        calcString = calcString + "(" + a + ")" ;
        result = result / a;
    }
}

function execute(){
    finishPreviousOperation();
    let r = Math.floor(Math.random() * 3)

    let resultString = "";
    let shownResult = "";

    if(r == 0){
        shownResult = getRndInt(result + 1, result + 50);
        resultString = "less than " + shownResult;
        console.log(shownResult);
    }
    if(r == 1){
        shownResult = getRndInt(result - 50, result - 1);
        resultString = "more than " + shownResult;
        console.log(shownResult);
    }
    if(r == 2){
        shownResult = getRndInt(result - 7, result + 7);
        resultString = "around " + shownResult;
        console.log(shownResult);
    }
    console.log("actual result " + result)
    workArea.textContent = resultString;

    workingNumber = 0;
    isFinished = true;
}

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }