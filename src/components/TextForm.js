import React, { useState } from 'react'


export default function TextForm() {
  const handleConvertup = () =>{
    let newText = text.toUpperCase(text)
    setText(newText)
  }
  const handleConvertlow = () =>{
    let newText = text.toLowerCase(text)
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleClear = (event) => {
    setText('')
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    alert("copied successfully")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const [text , setText] = useState(() => {
    return "enter text here"
  })
  return (
   <>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="10"></textarea>
  <br />
  <div>  
    <button className="btn btn-primary mx-3" onClick={handleConvertup}>Convert to upper</button>
    <button className="btn btn-primary mx-3 " onClick={handleConvertlow}>Convert to lower</button>
    <button className="btn btn-success mx-3 " onClick={handleCopy}>Copy</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button className="btn btn-danger mx-3 " onClick={handleClear}>Clear</button>
  </div>
</div>
<div className="container my-3">
<h6>Your Text Summary</h6>
<p>{text.split(" ").length} words and {text.length} characters</p>
</div>
</> 
  )
}
 