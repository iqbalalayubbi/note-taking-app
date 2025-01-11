import { NoteDataType } from "@/types";

type NotesContextType = {
  notes: NoteDataType[] | null | undefined;
  addNote: (note: NoteDataType) => void;
  removeNote: (id: string) => void;
  searchNotes: (title: string) => void;
  getPagination: () => {
    totalPages: number;
    currentPage: number;
    total: number;
  };
};

export { type NotesContextType };
