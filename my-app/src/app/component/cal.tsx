"use client";
import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState<string>("");
  const [operators, setOperators] = useState<string>("");
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [error, setError] = useState<string>(""); 
  console.log(operators);
  

  const handleOperatorClick = (op: string) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Reset error state before validation
    setError("");

    // Check if both numbers are valid
    if (isNaN(number1) || isNaN(number2)) {
      setError("Please enter valid numbers."); // Set error message
      setResult(""); // Clear the result if there's an error
      return;
    }

    // Perform calculation
    setOperators(op);
    let newResult: string;

    switch (op) {
      case "+":
        newResult = (number1 + number2).toString();
        break;
      case "-":
        newResult = (number1 - number2).toString();
        break;
      case "*":
        newResult = (number1 * number2).toString();
        break;
      case "/":
        newResult = number2 !== 0 ? (number1 / number2).toString() : "Cannot divide by zero";
        break;
      default:
        return;
    }

    setResult(newResult);
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setOperators("");
    setResult("");
    setError(""); // Clear error on reset
  };

  return (
    <main className='flex flex-col glow-box  bg-gray-950 justify-center h-96 items-center gap-6 max-w-xl mx-auto p-4 mt-14 rounded-2xl text-white border border-gray-200'>
      <h1 className='text-3xl font-extrabold mb-4'>Simple calculator</h1>
      <div className='flex flex-row  justify-center gap-3 rounded-xl'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="num1" className='text-center'>First Number</label>
          <input
            type="text"
            placeholder='Enter your first number'
            className='py-3 px-2 rounded-xl text-black font-semibold outline-none border border-gray-500 text-sm'
            onChange={(e) => setNum1(e.target.value)}
            value={num1}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="num2" className='text-center'>Second Number</label>
          <input
            type="text"
            placeholder='Enter your second number'
            className='py-3 px-2 rounded-xl text-black font-semibold border outline-none border-gray-500 text-sm'
            onChange={(e) => setNum2(e.target.value)}
            value={num2}
          />
        </div>
      </div>
      <div className='flex flex-row text-white gap-4'>
        <button className='border border-gray-500 px-8 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={() => handleOperatorClick("+")}>+</button>
        <button className='border border-gray-500 px-8 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={() => handleOperatorClick("-")}>-</button>
        <button className='border border-gray-500 px-8 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={() => handleOperatorClick("*")}>*</button>
        <button className='border border-gray-500 px-8 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={() => handleOperatorClick("/")}>/</button>
      </div>
      <div className='flex flex-row gap-4'>
        <button className='border border-gray-500 px-8 py-2 rounded-xl text-lg font-bold hover:bg-gray-700 w-full' disabled>
          {error ? error : result}
        </button>
        <button className='border border-gray-500 px-8 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={handleClear}>Clear</button>
      </div>
    </main>
  );
}

export default Calculator;
