import './App.css';
import {useCallback, useEffect, useState} from "react";
import Card from "./components/card";
import NewProduct from "./components/new-product/new-product";
import useOnlineStatus from "./components/hooks/useOnlineStatus";

// const ApiProducts = [{
//   imgSrc: 'https://ocdn.eu/pulscms-transforms/1/oP-k9kpTURBXy83ZmI0ZjU3MmYxNDhlMDI5NTUxODQ4MDg0OTM4ZTVmMC5qcGeTlQMAzKHNFEDNC2STCaYxMDE4ZmUGkwXNBLDNAnbeAAGhMAE/domowa-pizza.jpg',
//   title: 'Піца Техас',
//   ingredients: ['Кукурудза', 'Ковбаски баварські', 'Соус Барбекю', 'Моцарела', 'Гриби', 'Цибуля'],
//   sizes: ['стандарт', 'велика', 'екстравелика'],
//   doe: ['пухке', 'тонке'],
//   bort: ['филадельфия', 'хот-дог'],
//   price: 231
// },
//   {
//     imgSrc: 'https://ocdn.eu/pulscms-transforms/1/oP-k9kpTURBXy83ZmI0ZjU3MmYxNDhlMDI5NTUxODQ4MDg0OTM4ZTVmMC5qcGeTlQMAzKHNFEDNC2STCaYxMDE4ZmUGkwXNBLDNAnbeAAGhMAE/domowa-pizza.jpg',
//     title: 'Піца Техас',
//     ingredients: ['Кукурудза', 'Ковбаски баварські', 'Соус Барбекю', 'Моцарела', 'Гриби', 'Цибуля'],
//     sizes: ['стандарт', 'велика', 'екстравелика'],
//     doe: ['пухке', 'тонке'],
//     bort: ['филадельфия', 'хот-дог'],
//     price: 231,
//   },
//   {
//     imgSrc: 'https://ocdn.eu/pulscms-transforms/1/oP-k9kpTURBXy83ZmI0ZjU3MmYxNDhlMDI5NTUxODQ4MDg0OTM4ZTVmMC5qcGeTlQMAzKHNFEDNC2STCaYxMDE4ZmUGkwXNBLDNAnbeAAGhMAE/domowa-pizza.jpg',
//     title: 'Піца Техас',
//     ingredients: ['Кукурудза', 'Ковбаски баварські', 'Соус Барбекю', 'Моцарела', 'Гриби', 'Цибуля'],
//     sizes: ['стандарт', 'велика', 'екстравелика'],
//     doe: ['пухке', 'тонке'],
//     bort: ['филадельфия', 'хот-дог'],
//     price: 231,
//   }];

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = useCallback((data) => {
    setProducts((state) => [
      ...state,
      data
    ]);
  }, [setProducts]);

  console.log(products);
  useEffect(() => {
    setTimeout(async () => {
      const data = await fetch('http://localhost:3000/products');
      const parsed = await data.json();
      console.log(parsed);
      setProducts(parsed);
    }, 2000);
  }, []);

  const online = useOnlineStatus();

  return online ? (
    <>
      <NewProduct addProduct={addProduct}/>
      <div className='cards'>
        {products.map((item) => <Card key={item.title + Math.random()} data={item}/>)}
      </div>
    </>
  ) : (<h1>No internet</h1>)
}

export default App;
