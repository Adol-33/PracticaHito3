import { useState } from "react";

// hook para ProductCard
export const useCounter = (initialValue = 1) => {
  // variable
  const [count, setCount] = useState(initialValue);

  // aumentar
  const aument = () => {
    setCount(count + 1);
    console.log("suma");
  };
  // disminuir
  const deagre = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log("resta");
    }
  };

  const reset = () => {
    setCount(0);
  };

  // retorno variable y funciones
  return { count, aument, deagre, reset };
};
