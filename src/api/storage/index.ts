import { StorageKey } from "@/enums";
import { UserDataStorage } from "./UserDataStorage";

const userDataStorage = new UserDataStorage(StorageKey.USER_DATA);

export { userDataStorage };
