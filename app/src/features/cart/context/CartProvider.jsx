import PropTypes from "prop-types";
import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider
