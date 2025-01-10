import { StorageKey } from "@/enums";
import { UserDataStorage } from "./UserDataStorage";
import { NoteStorage } from "./NotesStorage";

const userDataStorage = new UserDataStorage(StorageKey.USER_DATA);
const notesStorage = new NoteStorage(StorageKey.NOTES_DATA);

export { userDataStorage, notesStorage };
