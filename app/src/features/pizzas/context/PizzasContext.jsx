import { createContext,useState, useEffect } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const getData = async () => {
    const url = `${import.meta.env.VITE_API_URL}/api/pizzas`
    const response = await fetch(url)
    const data = await response.json()
    setPizzas(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PizzasContext.Provider value={{ pizzas }}>
      {children}
    </PizzasContext.Provider>
  )
};

export default PizzasProvider;
