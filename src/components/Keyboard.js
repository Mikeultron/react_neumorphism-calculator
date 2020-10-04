import React from 'react';
import '../scss/style.css';

// Component

const Keyboard = ({addInput, addHistory, clear, backspace, calculate}) =>{
  return(
    <div className="keyboard">
      <button onClick={() =>clear()} >C</button>
      <button onClick={() =>backspace()} >CE</button>
      <button onClick={() =>addHistory('%')}>%</button>
      <button onClick={() =>addHistory('/')}>&#247;</button>
      <button onClick={() =>addInput('7')}>7</button>
      <button onClick={() =>addInput('8')}>8</button>
      <button onClick={() =>addInput('9')}>9</button>
      <button onClick={() =>addHistory('*')}>x</button>
      <button onClick={() =>addInput('4')}>4</button>
      <button onClick={() =>addInput('5')}>5</button>
      <button onClick={() =>addInput('6')}>6</button>
      <button onClick={() =>addHistory('-')}>-</button>
      <button onClick={() =>addInput('1')}>1</button>
      <button onClick={() =>addInput('2')}>2</button>
      <button onClick={() =>addInput('3')}>3</button>
      <button onClick={() =>addHistory('+')}>+</button>
      <button className="empty"></button>
      <button onClick={() =>addInput('0')}>0</button>
      <button className="empty"></button>
      <button onClick={() =>calculate()}>=</button>
    </div>
  )
}

export default Keyboard;