import React, {useState} from 'react';

function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue ?? 0);

  const onChange = (event) => {
    setValue(+event.target.value);
  }

  return { value, onChange };
}

export default useInputState;
