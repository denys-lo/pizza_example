import React from 'react';
import './ingradients.css';

function Ingredients({data}) {
  return (
    <div className="container">
      {data.map((item) => (<div key={item}>{item}</div>))}
    </div>
  );
}

export default Ingredients;
