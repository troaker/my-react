import React from "react";
import { useState, useEffect} from "react";
import "./App.css";


export default function App() {
  const [index, setIndex] = useState('');
  let quote;

  const handleRandomClick = () => {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      quote = data[randomNum]
      setIndex(quote);
      console.log(quote);
    });
  };

  const handleBackClick = () => {
    setIndex('');
  };


  useEffect(() => {
    handleRandomClick();
  },[])

  return (
    <div className="App-header">
      <h2>
      <div className="Quote-text">
            {index.quote}
          </div>
          <div className="Quote-author">
            by {index.author}
          </div> 
      </h2>
      <div className="btn-container">
        <button className="buttons" onClick={handleRandomClick}>New Quote</button>
        <button className="buttons" onClick=  {handleBackClick}>Back</button>
      </div>
    </div>
  );
}
