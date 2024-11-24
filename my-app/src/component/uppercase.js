import React, { useState } from "react";
import "./uppercase.css";

function UpperCaseTextbox() {
  const [text, setText] = useState("");
  const [alert,setAlert] =useState("")

  const handleInput = (event) => {
    setText(event.target.value);

  };

  const ConvertToUppercase = () => {
    setText(text.toUpperCase());
    setAlert("Success! Converted to Uppercase.");
    setTimeout(() => setAlert(""), 3000);
    
  };

  const ConvertToLowercase = () => {
    setText(text.toLowerCase());
    setAlert("Success! Converted to LowerCase.");
    setTimeout(() => setAlert(""), 3000);
  };

  const ClearText = () => {
    setText("");
    setAlert("Success!Text is Cleared.");
    setTimeout(() => setAlert(""), 3000);
  };

  const CopyText = () => {
    navigator.clipboard.writeText(text); // Fixed clipboard copying
    setAlert("Success!Text is copied to your Clipboard.");
    setTimeout(() => setAlert(""), 3000);
  };

  return (
    <>
    {alert && (
      <div className="alert alert-success" role="alert">
        {alert}
      </div>
    )}
    
    <div className="container">
      <label htmlFor="UpperCaseTextbox">
        Enter your Text to convert it to uppercase
      </label>
      <textarea
        id="UpperCaseTextbox"
        value={text}
        onChange={handleInput}
        placeholder="Enter your text"
        className="form-control my-3"
        rows="4"
      />

      <div className="btn">
        <button onClick={ConvertToUppercase} className="btn1">
          Convert to Uppercase
        </button>
        <button onClick={ConvertToLowercase} className="btn2">
          Convert to Lowercase
        </button>
        <button onClick={ClearText} className="btn3">
          Clear Text
        </button>
        <button onClick={CopyText} className="btn4">
          Copy Text
        </button>
      </div>
    
    
    </div> </>
  );
}

export default UpperCaseTextbox;
