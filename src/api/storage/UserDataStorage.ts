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

  public getUserData(): UserDataType {
    if (this.getItem()) {
      return this.getItem() as UserDataType;
    } else {
      return DEFAULT_USER_DATA as UserDataType;
    }
  }

  public setUserData(userData: UserDataType) {
    this.setItem(userData);
  }
}

export { UserDataStorage };
