import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [connected, setConnected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasJwt = localStorage.getItem("jwt"); // EzbBlablablalba
    setConnected(Boolean(hasJwt)); // on convertit en booléen
  }, []);

  function disconnect() {
    navigate("/");
    setConnected(false);
    localStorage.removeItem("jwt");
  }

  const value = { connected, disconnect, setConnected }; // Tous les enfants de AuthProvider y auront accès

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
