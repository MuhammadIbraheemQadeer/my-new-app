import React, { useState } from 'react';
import './Calculator.css'; 

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [add, setAdd] = useState();
    const [sub, setSub] = useState();
    const [mult, setMult] = useState();
    const [div, setDiv] = useState();

    const Add = () => {
        setAdd(Number(num1) + Number(num2));
    };

    const Sub = () => {
        setSub(Number(num1) - Number(num2));
    };

    const Mult = () => {
        setMult(Number(num1) * Number(num2));
    };

    const Div = () => {
        if (num1 === '0' || num2 === '0') {
            setDiv("Division by zero is not allowed");
        } else {
            setDiv(Number(num1) / Number(num2));
        }
    };

    return (
        <div className="calculator-container">
            <h1 className="calculator-title">Simple Calculator</h1>
            <input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="input-field"
            />
            <input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="input-field"
            />
            <div className="button-container">
                <button onClick={Add} className="button">Add</button>
                <p className="result">Sum: {add}</p>

                <button onClick={Sub} className="button">Subtract</button>
                <p className="result">Subtraction: {sub}</p>

                <button onClick={Mult} className="button">Multiply</button>
                <p className="result">Multiplication: {mult}</p>

                <button onClick={Div} className="button">Divide</button>
                <p className="result">Division: {div}</p>
            </div>
        </div>
    );
}

export default Calculator;
