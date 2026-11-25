import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import { useAuthContext } from "./useAuthContext";
import useInput from "./useInput";

export const useLogin = () => {
  const email = useInput("");
  const password = useInput("");

  const { loginUser } = useAuthContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const controllerRef = useRef(null);

  // Cancelamos la petición si se desmonta el componente.
  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Evitamos peticiones simultáneas.
    if (controllerRef.current) return;

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      await loginUser(
        email.value,
        password.value,
        controller.signal
      );

      if (!controller.signal.aborted) {
        navigate("/", { replace: true });
      }

    } catch (err) {
      if (
        err.name !== "AbortError" &&
        !controller.signal.aborted
      ) {
        setError(err.message);
      }

    } finally {
      if (controllerRef.current === controller) {
        controllerRef.current = null;
      }

      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    email,
    password,
    loading,
    error,
    handleSubmit,
    clearError,
  };
};
