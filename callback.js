function calculate(value1, value2, callbackFunction)
 {
    return callbackFunction(value1,value2);
}

function calcProduct(value1,value2) {
    return value1*value2;
}

function calcSum(value1,value2) {
    return value1+value2;
}
alert("The values of Product is"+calculate(5, 15, calcProduct));

alert("The Values of Sum is"+calculate(5, 15, calcSum));