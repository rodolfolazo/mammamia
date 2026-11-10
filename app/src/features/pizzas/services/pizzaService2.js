const API_URL = `${import.meta.env.VITE_API_URL}/api/pizzas`;

export const getPizzas = async (signal) => {
  const response = await fetch(API_URL, { signal });

  if (!response.ok) {
    throw new Error("Error al obtener las pizzas");
  }

  return response.json();
};

export const getPizzaById = async (id, signal) => {
  const response = await fetch(`${API_URL}/${id}`, { signal });

  if (!response.ok) {
    throw new Error("Error al obtener la pizza");
  }

  return response.json();
};
