let num1 = Number.parseInt(prompt("Enter first number"))
let num2 = Number.parseInt(prompt("Enter second number"))
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Subtract: " + result
}

function divide() {
    if(num2!=0)
    {
    let result = num1 / num2
    sumEl.textContent = "Divide: " + result
    }
    else{
        sumEl.innerHTML=alert("Please Enter Non-zero denominator !!")
    }10
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Multiple: " + result
}

