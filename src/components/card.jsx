import React from 'react';
import Image from './image'
import Title from './title'
import './image.css'
import Ingredients from "./ingredients";
import './card.css'
import useOnlineStatus from './hooks/useOnlineStatus'
import useCounter from "./hooks/useCounter";
import OrderForm from "./order-form/order-form";

function Card(props) {
  const online = useOnlineStatus();
  const {count, setCount} = useCounter(online);
  return (
    <div className="card">
      <Image src={props.data.imgSrc} alt={props.data.title} className='pizza-img'/>
      <Title text={props.data.title}/>
      <Ingredients data={props.data.ingredients}/>
      {/*<Size />*/}
      {/*<Doe />*/}
      {/*<Bort />*/}
      {/*<Price />*/}
      {/*<Button text="В кошик"/>*/}
      <button onClick={() => {setCount(count + 1)}} disabled={!online}>Увеличить</button>
      <div>{count}</div>
      <OrderForm />
    </div>
  );
}

export default Card;
