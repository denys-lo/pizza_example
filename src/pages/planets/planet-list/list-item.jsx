import React from 'react';

function PlanetItem(item, index, arr) {
  return (
    <div className="planets-list" style={{display: 'flex', justifyContent: 'center', gap: 10}}>
      <div>{item.name}</div>
      <div>{item.population}</div>
    </div>
  );
}

export default PlanetItem;
