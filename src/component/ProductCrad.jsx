//
import { useCounter } from "../hooks/useCounter";
function ProductCrad({ product, agregarCart }) {
  const { count, aument, deagre, reset } = useCounter(0);
  const agregar = () => {
    if (count === 0) {
      return;
    }
    agregarCart(product, count);

    reset();
  };
  //
  return (
    <div>
      <h3>{product.nombre}</h3>
      <p>Precio: ${product.precio}</p>
      <p>SKU: {product.sku}</p>
      <p>Stock: {product.stock}</p>
      <p>{product.disponibilidad}</p>
      <button onClick={deagre} disabled={count === 0}>
        -
      </button>
      <span>={count}=</span>
      <button onClick={aument} disabled={product.disponibilidad === "Agotado"}>
        +
      </button>
      <br />
      <button onClick={agregar}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCrad;
