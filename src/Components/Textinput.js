import React from "react";
import { useState } from "react";
//import "./Components.css"
export default function Textinput() {
  const [text, setText] = useState("");
  const [getPace, setGetPace] = useState(140);
  const handleUpclick = () => {
    console.log("Upclick was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handledownclick = () => {
    console.log("Upclick was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <>
      <div className="container border border-dark">
        <div className="mb-3">
          <h1>Editor</h1>
          <textarea
            className="form-control"
            value={text}
            rows="8"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Your Text Here"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary my-4"
          onClick={() => handleUpclick()}
        >
          Upper case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={() => handledownclick()}
        >
          Lower case
        </button>
      </div>
      <div className="container my-4 border border-dark ">
        <h1>Your Text Summary</h1>
        <h3>{(text.trim()).length} Letters</h3>
        <h3>{text.split(" ").length} Words</h3>
        <div className="col">
          <h3>{text.length / getPace} Minutes Read</h3>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>``
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setGetPace(170)}
                >
                  Fast 170 WPM
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setGetPace(140)}
                >
                  Medium 140 WPM
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setGetPace(110)}
                >
                  Slow 110 WPM
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container my-4 border border-dark">
          <h1>Preview</h1>
          <p className="prevText">{text}</p>
        </div>
      </div>
    </>
  );
}
