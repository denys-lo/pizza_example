import React from 'react';

const newProduct = {
  imgSrc: 'https://ocdn.eu/pulscms-transforms/1/oP-k9kpTURBXy83ZmI0ZjU3MmYxNDhlMDI5NTUxODQ4MDg0OTM4ZTVmMC5qcGeTlQMAzKHNFEDNC2STCaYxMDE4ZmUGkwXNBLDNAnbeAAGhMAE/domowa-pizza.jpg',
  title: 'Піца Техас',
  ingredients: ['Кукурудза', 'Ковбаски баварські', 'Соус Барбекю', 'Моцарела', 'Гриби', 'Цибуля'],
  sizes: ['стандарт', 'велика', 'екстравелика'],
  doe: ['пухке', 'тонке'],
  bort: ['филадельфия', 'хот-дог'],
  price: 231,
};

function NewProduct({addProduct}) {
  return (
    <button onClick={() => addProduct(newProduct)}>Add new one</button>
  );
}

export default NewProduct;
