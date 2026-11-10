import PropTypes from "prop-types";

import { PizzasContext2 } from "./PizzasContext2";
import { usePizzas2 } from "../hooks/usePizzas2";

const PizzasProvider2 = ({ children }) => {
  const { pizzas, loading, error } = usePizzas2();

  return (
    <PizzasContext2.Provider
      value={{ pizzas, loading, error }}
    >
      {children}
    </PizzasContext2.Provider>
  );
};

PizzasProvider2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PizzasProvider2;
