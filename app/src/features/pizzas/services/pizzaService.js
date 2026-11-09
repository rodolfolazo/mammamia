
const API_URL = "http://localhost:5000/api/pizzas";

export const getPizzas = async (signal) => {
  const response = await fetch(API_URL, { signal });

  if (!response.ok) {
    throw new Error("Error al obtener las pizzas");
  }

  return response.json();
};
