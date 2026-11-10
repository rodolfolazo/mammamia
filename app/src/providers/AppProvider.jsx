import PizzasProvider2 from "../features/pizzas/context/PizzasProvider2";
import PizzasProvider from "../features/pizzas/context/PizzasContext";
import CartProvider from "../features/cart/context/CartContext";



const AppProvider = ({ children }) => {
  return (
    <PizzasProvider2>
      <PizzasProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </PizzasProvider>
    </PizzasProvider2>
  )
}

export default AppProvider
