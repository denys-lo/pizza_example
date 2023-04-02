import React, {useEffect, useState} from 'react';
import PlanetsList from "./planet-list/planets-list";
import Loader from "../../components/loader";

function PlanetConteiner(props) {
  const [planets, setPlanet] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      setPlanet(data.results);
      setLoading(false);
    })()
    return () => {

    };
  }, []);
  return (<Loader isLoading={isLoading}>
    <PlanetsList planets={planets}/>
  </Loader>);
}



export default PlanetConteiner;
