import React from 'react';

function Title({text, clasName}) {
  return (
    <h1 className={clasName}>{text}</h1>
  );
}

export default Title;
