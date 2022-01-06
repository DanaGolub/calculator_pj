import React, { useState } from "react";
import "../styles/index.css"
import { calculatorButtons } from "../globals/calculator-button-data";

function App() {

  const [buttonVal, setButtonVal] = useState("");
  const buttons = [];

  const [display, setDisplay] = useState('');
  const [operationString, setOperationString] = useState('');


  function handleClick(value, type) {

    switch (type) {
      case 'number':
        handleNumber(value);
        break;

      case 'clear':
        handleClear(value)
        break;

      case 'operator':
        handleOperator(value)
        break;

      case 'enter':
        handleEnter(value)
        break;

        

      default:
        break;
    }
  }

  function handleNumber(value) {
    setDisplay(`${display}${value}`);
    console.log(value)

    if (display.length < 15) {
      setOperationString(`${operationString}${value}`)
    }
  }

  function handleClear(value) {
    if (value === "Clear") {
      setOperationString(operationString.substr(0, operationString.length - 1))
      setDisplay(`${display.substr(0, display.length - 1)}`)
    }
    else if (value === "All Clear") {
      setOperationString("")
      setDisplay("")
      console.log("all clear pressed")
    }
  }

  function handleOperator(value) {
    setDisplay(`${display}${value}`)
    if (value === "/" || value === "+" || value === "-" || value === "*") {
      console.log(value)
      setOperationString(`${operationString}${value}`)
    }
  }

  function handleEnter(value) {

    let finalAnswer = eval(operationString)
    //console.log(finalAnswer)
    //setDisplay(`${display}${value}${finalAnswer}`)
    setDisplay(`${finalAnswer}`)
  }

  return (

    <div className="wrapper">
      <h1>React Calculator</h1>
      <div className="show-input">{display}</div>
      <div className="buttons-container-grid">
        {calculatorButtons.map((btn, i) => {
          return (
            <button className={`${btn.className} ${btn.type} btn`}
              onClick={() => { handleClick(btn.value, btn.type) }}>{btn.text}</button>
          );
        })}

      </div>

    </div>
  );

}

export default App;


// , ".", "-", "+", "/", "*", "c", "ac"

    // <div className="buttons-container">
    //   

    //   <button className="digits flex ">{buttons}</button>

    //   <button className="modifiers subgrid c" onClick={() => setButtonVal(buttonVal.substr(0, buttonVal.length - 1))}>
    //     C
    //   </button>

    //   <button className="modifiers subgrid ac" onClick={() => setButtonVal("")}>
    //     AC
    //   </button>

    //   <button className="operation btns plus" onClick={e => setButtonVal(buttonVal + e.target.value)} value="+">
    //     +
    //   </button>

    //   <button className="operation btns subtract" onClick={e => setButtonVal(buttonVal + e.target.value)} value="-">
    //     -
    //   </button>

    //   <button className="operation btns multiply" onClick={e => setButtonVal(buttonVal + e.target.value)} value="*">
    //     *
    //   </button>

    //   <button className="operation btns divide" onClick={e => setButtonVal(buttonVal + e.target.value)} value="/">
    //     /
    //   </button>

    //   <button className="operation btns equals" onClick={e => {
    //     try {
    //       setButtonVal(
    //         String(eval(buttonVal)).length > 3 &&
    //           String(eval(buttonVal)).includes(".")
    //           ? String(eval(buttonVal).toFixed(4))
    //           : String(eval(buttonVal))
    //       )
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }}
    //     value="=">
    //     =
    //   </button>
