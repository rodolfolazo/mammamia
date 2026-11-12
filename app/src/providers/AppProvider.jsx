import PropTypes from "prop-types";

import PizzasProvider2 from "../features/pizzas/context/PizzasProvider2";
import PizzasProvider from "../features/pizzas/context/PizzasContext";
import CartProvider from "../features/cart/context/CartProvider";
import  AuthProvider  from "../features/auth/context/AuthProvider";



const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <PizzasProvider2>
        <PizzasProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </PizzasProvider>
      </PizzasProvider2>
    </AuthProvider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider
