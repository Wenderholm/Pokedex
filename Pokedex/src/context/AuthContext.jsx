import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// towarzyszy temu plikowi AuthProvider w main.jsx
// tworzymy globalny kontekst autoryzacji
// - przechowuje informacje o zalogowanym użytkowniku
// - udostępnia funkcje logowania i wylogowywania
// - korzysta z localStorage do trwałego przechowywania stanu zalogowania
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // podsłuchujemy zmiany w localStorage przy ładowaniu aplikacji
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  // funkcje logowania i wylogowywania
  // - login zapisuje dane użytkownika w stanie i localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  // - logout czyści dane użytkownika ze stanu i localStorage oraz przekierowuje na stronę główną
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    // udostępniamy user, login i logout w całej aplikacji
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
