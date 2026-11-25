const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

export const login = async (email, password, signal) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    signal,
  });

  if (!response.ok) {
    throw new Error("Error al iniciar sesión");
  }

  return response.json();
};

export const register = async (email, password, signal) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    signal,
  });

  if (!response.ok) {
    throw new Error("Error al registrarse");
  }

  return response.json();
};

export const getMe = async (token, signal) => {
  const response = await fetch(`${API_URL}/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error("Error al obtener el perfil");
  }

  return response.json();
};
