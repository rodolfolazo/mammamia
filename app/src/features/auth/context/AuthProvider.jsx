import PropTypes from "prop-types";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { login, register } from "../services/authService";
import {data} from "../../../data.js"

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => data.getToken());

  const loginUser = async (email, password, signal) => {
    const response = await login(email, password, signal);

    signal?.throwIfAborted();

    data.setToken(response.token);
    setToken(response.token);
  };

  const logoutUser = () => {
    data.removeToken()
    setToken(null);
  };

  const registerUser = async (email, password, signal) => {
    const response = await register(email, password, signal);
    signal?.throwIfAborted();
    data.setToken(response.token);
    setToken(response.token);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        loginUser,
        logoutUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
