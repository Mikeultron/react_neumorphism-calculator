import React, {useState} from 'react';
import '../scss/style.css';

// Components
import Screen from './Screen'
import Keyboard from './Keyboard';

const Calculator = () =>{
  const [input, setInput] = useState('');
  const [history, setHistory] = useState('');

  const addInput = (char) =>{
    let newInput = reverseNumberFormat(input);
    newInput += char;
    setInput((!newInput)? "" : getFormattedNumber(newInput));
  }

  const addHistory = (operator) =>{
    let newHistory = history;
    newHistory += input + operator;
    if(!input && history){
      if(isNaN(newHistory[newHistory.length - 1]))
        newHistory = newHistory.substr(0, newHistory.length - 1);
    }
    setHistory(newHistory);
    setInput('');
  }

  const reverseNumberFormat = num =>(Number(num.replace(/,/g,'')))

  const getFormattedNumber = num =>{
    if(num === "-") return "0";
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
  }

  const clear = () =>{
    setInput("")
    setHistory("")
  }

  const backspace = () =>{
    let newInput = reverseNumberFormat(input).toString();
    let newHistory = history;
    if(!input && history){
      newInput = newHistory[newHistory.length - 2]
      newHistory = newHistory.substr(0, newHistory.length - 2);
      setHistory(newHistory);
    }
    else if(newInput) newInput = newInput.substr(0, newInput.length - 1);
    setInput((!newInput)? "" : getFormattedNumber(newInput));
  }

  const calculate = () =>{
    let newHistory = history;
    let newInput = input;
    let result = String(eval(newHistory + newInput))
    setHistory('');
    setInput(result)
  }

  return(
    <div className="calculator">
      <Screen input={input} history={history}/>
      <Keyboard backspace={backspace} clear={clear} addInput={addInput} addHistory={addHistory} calculate={calculate}/>
      <footer>
        <a href="https://github.com/Mikeultron/React_Neumorphism-Calculator">Github</a>
      </footer>
    </div>
  )
}

export default Calculator;