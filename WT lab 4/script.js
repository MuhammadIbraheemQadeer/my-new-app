
let name = "Muhammad Ibraheem";
document.getElementById('welcomeMessage').innerText = `Welcome, ${name}!`;

let num1 = 29;
let num2 = 17;
let sum = num1 + num2;
document.getElementById('additionResult').innerText = `Sum: ${num1} + ${num2} = ${sum}`;

let celsius = 27;
let fahrenheit = (celsius * 9/5) + 32;
document.getElementById('tempConversionResult').innerText = `${celsius}°C is equal to  ${fahrenheit}°F`;

let birthYear = 2004;
let currentYear = 2024;
let age = currentYear - birthYear;
document.getElementById('ageResult').innerText = `Age: ${age} years old.`;

let number1 = 8;
let number2 = 16;
let product = number1 * number2;
document.getElementById('multiplicationResult').innerText = `Product: ${number1} x ${number2} = ${product}`;

let width = 7;
let height = 13.5;
let area = width * height;
document.getElementById('areaResult').innerText = `Area of the rectangle: ${area} sq units.`;
