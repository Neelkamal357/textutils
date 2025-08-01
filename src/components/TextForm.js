import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react'

function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");

  }
   const handleClearClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText ="";
    setText(newText)
  }

  const handleOnChange = (event) =>{
    console.log("On changed");
    setText(event.target.value)
  }

  
  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'black'}}> 
      <h1 >{props.heading}</h1>
      <div className="mb-3 " >
        <textarea className={`form-control border border-2 border-${props.mode==='dark'?'white':'black'} `} id="myBox" onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'black':'white',color :props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

export default TextForm
