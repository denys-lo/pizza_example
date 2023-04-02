import React from 'react';
import PlanetItem from './list-item';

function PlanetsList({planets}) {
  return planets.map(PlanetItem);
}

export default PlanetsList;
