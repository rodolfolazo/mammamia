import { useState, useEffect } from "react";
import { getPizzas } from "../services/pizzaService";

export const usePizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadPizzas = async () => {
      try {
        const data = await getPizzas(controller.signal);
        setPizzas(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadPizzas();

    return () => {
      controller.abort();
    };
  }, []);

  return { pizzas, loading, error };
};
