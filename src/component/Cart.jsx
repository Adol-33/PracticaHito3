// Component
function Cart({ coutnAument, countDeagre, cart }) {
  let total = 0;

  cart.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        <div>
          {cart.map((producto) => (
            <div key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <button onClick={() => countDeagre(producto.id)}>-</button>
              <span> {producto.cantidad} </span>
              <button onClick={() => coutnAument(producto.id)}>+</button>
              <p>Subtotal: ${producto.precio * producto.cantidad}</p>
            </div>
          ))}
          <h2>Total: ${total}</h2>
          <button>Pagar</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
