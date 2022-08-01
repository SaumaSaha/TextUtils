import React, { useState } from "react";

export default function TextForm(props) {
    let punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let punc = new RegExp("[" + punctuation + "]", "g");
    let div = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
    let divide = new RegExp("[" + div + "]", "g");
    const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success");
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","success");
  };
  const handlePuncClick = () => {
    let text1 = "";
    text1 = text.replace(punc, "");
    setText(text1);
    props.showAlert("Punctuations Removed","success");
  };
  const handleCopy = () => {
    let text1 = document.getElementById("mybox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied","success");
  };
  const handleRemoveExSpace = () => {
    let text1 =text.split(/[ ]+/);
    setText(text1.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };
  let c=wordCount();
  function wordCount(){
    let a=0;
    let arr=text.split(divide);
    arr.forEach(element => {
        if(element!=="")
            a=a+1;
    });
    return a;
  }
  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            text='black'
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} disabled={text.length===0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlePuncClick} disabled={text.length===0}>
          Remove Punctuation
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExSpace} disabled={text.length===0}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length===0}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length===0}>
          Clear
        </button>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        } my-3`}
      >
        <h1>Text Summary</h1>
        <p>
          {c} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
