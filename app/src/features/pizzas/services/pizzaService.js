const API_URL = `${import.meta.env.VITE_API_URL}/api/pizzas`;

export const getPizzas = async (signal) => {
  const response = await fetch(API_URL, { signal });

  if (!response.ok) {
    throw new Error("Error al obtener las pizzas");
  }

  return response.json();
};
