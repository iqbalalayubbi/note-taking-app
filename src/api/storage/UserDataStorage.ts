import { BaseStorage } from "./BaseStorage";

type UserDataType = {
  name: string;
  username: string;
  isAuthenticated: boolean;
};

const DEFAULT_USER_DATA: UserDataType | null = {
  name: "",
  username: "",
  isAuthenticated: false,
};

class UserDataStorage extends BaseStorage {
  private UserData: UserDataType | null;

  constructor(key: string) {
    super(key);

    this.UserData = this.getUserData() as UserDataType;

    if (!this.UserData) {
      this.UserData = DEFAULT_USER_DATA;
    }
  }

  public getUserData() {
    return this.getItem();
  }

  public setUserData(userData: UserDataType) {
    this.setItem(userData);
  }
}

export { UserDataStorage };
