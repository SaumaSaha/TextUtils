import React, { useState } from "react";

export default function TextForm(props) {
    let punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let punc = new RegExp("[" + punctuation + "]", "g");
    let div = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
    let divide = new RegExp("[" + div + "]", "g");
    const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handlePuncClick = () => {
    let text1 = "";
    text1 = text.replace(punc, "");
    setText(text1);
  };
  const handleCopy = () => {
    let text1 = document.getElementById("mybox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
  };
  const handleRemoveExSpace = () => {
    let text1 =text.split(/[ ]+/)
    setText(text1.join(" "))
  };
  const handleClearClick = () => {
    setText("");
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
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary " onClick={handlePuncClick}>
          Remove Punctuation
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary " onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
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
