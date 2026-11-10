//Este hook proporciona la lógica para obtener y gestionar las pizzas
import { useState, useEffect } from "react";
import { getPizzas } from "../services/pizzaService2";

export const usePizzas2 = () => {
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
        //Cuando se aborta se genera un error de tipo AbortError, pero no queremos mostrar ese error en nuestra interfaz de usuario
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      //Si la petición es abortada, evitamos cambiar el estado porque ese estado ya está desmontado
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadPizzas();

    //Función de cleanup. Cancelamos la petición http cuando el componente se desmonta
    return () => {
      controller.abort();
    };
  }, []);

  return { pizzas, loading, error };
};
