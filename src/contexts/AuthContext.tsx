import { userDataStorage } from "@/api";
import { AppRoute } from "@/enums";
import { UserDataType } from "@/types";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContextType } from "./types";

type Properties = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);
const AuthProvider = ({ children }: Properties) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataType>();
  const navigate = useNavigate();

  useEffect(() => {
    const user = userDataStorage.getUserData();
    if (!user) navigate(AppRoute.LOGIN);

    setUserData(user);
    if (user.isAuthenticated) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate(AppRoute.LOGIN);
    }
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userData: userData as UserDataType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
