import React, { useEffect, useState } from "react";
import "./QuoteGenerator.css";
const QuoteGenerator = () => {
  const [myData, setMyData] = useState([]);

  function generator() {
    fetch("https://dummyjson.com/quotes/random")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMyData(data);
      });
  }

  useEffect(() => {
    generator();
  }, []);

  return (
    <div className="main-div">
      <div className="heading">
        <h2>Quote Generator</h2>
      </div>
      <div className="main-box">
        <div className="text">
          <div className="qouteNumber">No : {myData.id}</div>
          <div className="quote">Quote : {myData.quote}</div>
          <div className="author">
            <p>Author : {myData.author}</p>
          </div>
        </div>
        <button type="submit" className=" button-2" onClick={generator}>
          Generator Quote
        </button>
      </div>
      <div className="myName">
        <h2>Create By - Yogesh Negi</h2>
      </div>
    </div>
  );
};

export default QuoteGenerator;
