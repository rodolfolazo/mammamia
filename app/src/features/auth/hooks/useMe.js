import { useState, useEffect } from "react";
import { getMe } from "../services/authService";
import { useAuthContext } from "../hooks/useAuthContext";


export const useMe = () => {
  const [me, setMe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) {
      setMe(null);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMe = async (token, signal) => {
      setLoading(true);
      setError(null);
      setMe(null);

      try {
        const response = await getMe(token, signal);
        setMe(response);
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
    fetchMe(token, signal);

    return () => {
      controller.abort();
    };
  }, [token])

  return { me, loading, error };
};
