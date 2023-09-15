import React, { useState } from 'react'


export default function TextForm() {
  const handleConvert = () =>{
    let newText = text.toUpperCase(text)
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
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
  <button className="btn btn-primary" onClick={handleConvert}>convert</button>
  
</div>
<div className="container my-3">
<h6>Your Text Summary</h6>
<p>{text.split(" ").length} words and {text.length} characters</p>
</div>
</> 
  )
}
 