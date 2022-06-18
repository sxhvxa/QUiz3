import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([
    {
      name: "",
      password: "",
    },
  ]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    setIsLoggedIn(true);
    user.name = userName;
    user.password = password;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        userName,
        setUserName,
        password,
        setPassword,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
