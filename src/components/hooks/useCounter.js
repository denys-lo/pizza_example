import {useEffect, useState} from "react";

function useCounter(status) {
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(0);
  }, [status]);

  return {count, setCount}; // Если нужно передать несколько переменных или методов в хуке, то передаем их в объекте
}

export default useCounter;
