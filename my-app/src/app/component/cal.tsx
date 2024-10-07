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

    setError("");

    if (isNaN(number1) || isNaN(number2)) {
      setError("Please enter valid numbers.");
      setResult("");
      return;
    }

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
    setError("");
  };

  return (
    <main className='flex flex-col glow-box bg-gray-950 justify-center items-center gap-10 max-w-lg mx-auto p-4 mt-14 m-6 rounded-2xl text-white border border-gray-200'>
      <h1 className='md:text-3xl lg:text-4xl text-xl font-extrabold mb-4 '>Simple Calculator</h1>
      <div className='flex flex-col sm:flex-row justify-center gap-4 w-full'>
        <div className='flex flex-col w-full'>
          <label htmlFor="num1" className='text-center'>First Number</label>
          <input
            type="text"
            placeholder='Enter your first number'
            className='py-2 px-3 rounded-xl text-black font-semibold outline-none border border-gray-500 text-sm'
            onChange={(e) => setNum1(e.target.value)}
            value={num1}
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor="num2" className='text-center'>Second Number</label>
          <input
            type="text"
            placeholder='Enter your second number'
            className='py-2 px-3 rounded-xl text-black font-semibold border outline-none border-gray-500 text-sm'
            onChange={(e) => setNum2(e.target.value)}
            value={num2}
          />
        </div>
      </div>
      <div className='flex flex-row text-white gap-4 w-full'>
        <button className='border border-gray-500 flex-1 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={() => handleOperatorClick("+")}>+</button>
        <button className='border border-gray-500 flex-1 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={() => handleOperatorClick("-")}>-</button>
        <button className='border border-gray-500 flex-1 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={() => handleOperatorClick("*")}>*</button>
        <button className='border border-gray-500 flex-1 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={() => handleOperatorClick("/")}>/</button>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 w-full'>
        <button className='border border-gray-500 flex-1 py-5 rounded-xl text-lg font-bold hover:bg-gray-700 w-full'>
          {error ? error : result}
        </button>
        <button className='border border-gray-500 flex-1 py-2 rounded-xl text-lg font-bold hover:bg-gray-700' onClick={handleClear}>Clear</button>
      </div>
    </main>
  );
}

export default Calculator;
