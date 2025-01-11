import { UserDataType } from "@/types";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  userData: UserDataType;
  changeUserDataName: (name: string) => void;
};

export { type AuthContextType };
