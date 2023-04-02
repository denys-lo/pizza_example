import React, {useRef, useState} from 'react';
import useInputState from "./hooks/useInputState";

function OrderForm(props) {
  // const [quantity, setQuantity] = useState();
  //
  // const quantityHandler = (event) => {
  //   setQuantity(+event.target.value);
  // }

  // const {value: quantity, onChange: quantityHandler} = useInputState(1);
  // const {value: additions, onChange: additionsHandler} = useInputState(1);

  const pizzaRef = useRef(null);
  const additionsRef = useRef(null);
  const counterRef = useRef(0);

  const submitHandler = async (event) => {
    event.preventDefault();

    console.log({
      additionsRef: additionsRef?.current.value,
      pizzaRef: pizzaRef?.current.value,
      counterRef: counterRef.current
    });

    try {
      await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          "Content-type":"application/json"
        },
        body: JSON.stringify({
          id: new Date(),
          pizzaRef: pizzaRef.current.value,
          additionsRef: additionsRef.current.value
        })
      });
    } catch (e) {
      console.log(e);
    }
    alert(`your order contains ${pizzaRef.current.value} pizzas and ${additionsRef.current.value} additions`);
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="quantity of pizzas" ref={pizzaRef} />
      <input type="text" placeholder="additions of pizzas" ref={additionsRef} />
      <div>quantity of pizzas: {pizzaRef?.current?.value}</div>
      <div>additions of pizzas: {additionsRef?.current?.value}</div>
      <button type="submit">submit</button>
      <button type="button" onClick={() => counterRef.current += 1}>+1</button>
    </form>
  );
}

export default OrderForm;
