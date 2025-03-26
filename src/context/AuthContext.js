import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize user state by checking localStorage
  const [user, setUser] = useState(() => localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user); // Save user to localStorage when set
    } else {
      localStorage.removeItem("user"); // Remove user from localStorage on logout
    }
  }, [user]);

  // Hardcoded credentials for login
  const presetEmail = "email@gmail.com";
  const presetPassword = "mypassword";

  const login = (email, password) => {
    // If credentials match, set the user
    if (email === presetEmail && password === presetPassword) {
      setUser(email);
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const logout = () => {
    setUser(null); // Clear user from state and localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
