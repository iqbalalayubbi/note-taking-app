import { userDataStorage } from "@/api";
import { AppRoute } from "@/enums";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

type Properties = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);
const AuthProvider = ({ children }: Properties) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = userDataStorage.getUserData();
    if (!user) navigate(AppRoute.LOGIN);

    if (user.isAuthenticated) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate(AppRoute.LOGIN);
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
