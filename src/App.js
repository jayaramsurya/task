import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "../src/assets/img/aa.jpg"

function App() {
  const [select, setSelect] = useState(0);
  const onClickExpand = i => setSelect(i)
  return (
    <div className="container">
      {
        Array(3).fill(null).map((v, i) => {
          const className = i == select ? "header selected" : "header"
          return (
            <>
              <div className={className}>
                <span className="title">Level {i + 1}</span>
                <button className="icon"
                  onClick={() => onClickExpand(i)}>
                  {select === i ? '-' : '+'}
                </button>
              </div>
              {select === i && <div className="card" style={{ display: 'flex' }}>
                <ul>
                  <li>Assembly and finishing factories</li>
                  <li>Product Manufacturing units-cut & sew</li>
                  <li>Vertically Integrated</li>
                </ul>
                <img src={Image} />
              </div>}
            </>
          )
        })
      }

    </div>
  );
}

export default App;
