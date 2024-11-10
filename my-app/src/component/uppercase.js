import React, {useState} from "react";
 import './uppercase.css';

function UpperCaseTextbox(){
const [text , setText] = useState('');

const handleInput= (event) =>{
    setText(event.target.value);
}
const ConvertToUppercase = (event) => {

    setText(text.toUpperCase());
}
const ConvertToLowercase = (event)=>{
    setText(text.toLowerCase());
}
const ClearText=(event)=>{
    setText(' ');
}


return (
<div className="container">

<label htmlFor="upperCaseInput">Enter your Text to convert it to uppercase</label>
<textarea
  id="UpperCaseTextbox"
  value={text}
  onChange={handleInput}
  placeholder="Enter your text"
/>

<br />
<div className="btn">
<button onClick={ConvertToUppercase} className="btn1">Convert to uppercase</button>
<button onClick={ConvertToLowercase}className="btn2">Convert to lowercase</button>
<button onClick={ClearText} className="btn3">Clear Text</button>
</div>
</div>

)

}
export default UpperCaseTextbox;


