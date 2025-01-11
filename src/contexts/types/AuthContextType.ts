import { UserDataType } from "@/types";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  userData: UserDataType;
};

export { type AuthContextType };
