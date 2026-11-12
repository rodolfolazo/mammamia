import PropTypes from "prop-types";
import { AuthContext } from './AuthContext';
import { useState } from 'react';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const logout = () => {
    setToken(false);
  };
  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
