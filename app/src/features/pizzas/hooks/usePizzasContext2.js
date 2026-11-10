//Este hook proporciona acceso al contexto de pizzas
import { useContext } from "react";
import { PizzasContext2 } from "../context/PizzasContext2";

export const usePizzasContext2 = () => {
  const context = useContext(PizzasContext2);

  if (context === null) {
    throw new Error(
      "usePizzasContext2 debe utilizarse dentro de PizzasProvider"
    );
  }

  return context;
};
