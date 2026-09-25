import { useState } from "react";
import "./App.css";
import Register from "./component/Register";
import { productos } from "./data/Producto";
import ProductCrad from "./component/ProductCrad";
import Cart from "./component/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const agregarCart = (producto, cantidad) => {
    const productoExiste = cart.find((item) => item.id === producto.id);
    if (productoExiste) {
      const nuevoCarrito = cart.map((item) => {
        if (item.id == producto.id) {
          return {
            ...item,
            cantidad: item.cantidad + cantidad,
          };
        }
        return item;
      });
      setCart(nuevoCarrito);
    } else {
      const nuevoProducto = {
        ...producto,
        cantidad: cantidad,
      };
      setCart([...cart, nuevoProducto]);
    }
  };

  const coutnAument = (id) => {
    const nuevoCarrito = cart.map((producto) => {
      if (producto.id === id && producto.cantidad < producto.stock) {
        return {
          ...producto,
          cantidad: producto.cantidad + 1,
        };
      }

      return producto;
    });

    setCart(nuevoCarrito);
  };

  const countDeagre = (id) => {
    const producto = cart.find((producto) => producto.id === id);

    if (producto.cantidad === 1) {
      const nuevoCarrito = cart.filter((producto) => producto.id !== id);

      setCart(nuevoCarrito);

      return;
    }

    const nuevoCarrito = cart.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          cantidad: producto.cantidad - 1,
        };
      }

      return producto;
    });

    setCart(nuevoCarrito);
  };

  return (
    <>
      <h1>App</h1>
      {/* <Register /> */}
      <h2>Productos</h2>
      {productos.map((product) => (
        <ProductCrad
          agregarCart={agregarCart}
          key={product.id}
          product={product}
        />
      ))}
      <hr />
      <Cart cart={cart} countDeagre={countDeagre} coutnAument={coutnAument} />
    </>
  );
}

export default App;
