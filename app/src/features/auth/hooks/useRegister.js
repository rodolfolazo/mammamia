import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import { useAuthContext } from "./useAuthContext";
import useInput from "./useInput";

export const useRegister = () => {
  const email = useInput("");
  const password = useInput("");

  const { registerUser } = useAuthContext();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const controllerRef = useRef(null);

  //Cancelamos la petición si el componente se desmonta
  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (controllerRef.current) return

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      await registerUser(email.value, password.value, controller.signal);
      if (!controller.signal.aborted) {
        navigate("/", { replace: true });
      }

    } catch (error) {
      if (error.name === "AbortError" && controller.signal.aborted) return;
      setError(error.message);
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
    handleRegister,
    clearError,
    error,
    loading,
  };

};
