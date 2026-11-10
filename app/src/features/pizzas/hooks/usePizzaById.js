import { useState, useEffect } from 'react';
import { getPizzaById } from '../services/pizzaService2';

export const usePizzaById = (id) => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchPizza = async () => {
      setPizza(null);
      setError(null);
      setLoading(true);
      try {
        const data = await getPizzaById(id, controller.signal);
        if (!controller.signal.aborted) {
          setPizza(data);
        }
      } catch (err) {
        if (err.name !== "AbortError" && !controller.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };
    fetchPizza();
  }, [id]);

  return { pizza, loading, error };
};
