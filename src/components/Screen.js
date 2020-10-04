import React from 'react';
import '../scss/style.css';

// Component

const Screen = ({input, history}) =>{
  return(
    <div className="result">
      <div className="history">
        <p className="history-value">{history}</p>
      </div>
      <div className="output">
        <p className="output-value">{input}</p>
      </div>
    </div>
  )
}

export default Screen;