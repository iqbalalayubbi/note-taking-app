import { NoteDataType } from "@/types";

type NotesContextType = {
  notes: NoteDataType[] | null | undefined;
  addNote: (note: NoteDataType) => void;
  removeNote: (id: string) => void;
};

export { type NotesContextType };
