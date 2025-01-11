import { notesStorage } from "@/api";
import { NoteDataType } from "@/types";
import { useEffect, useState } from "react";

const useNotes = () => {
  const [notes, setNotes] = useState<NoteDataType[] | null>([]);
  const DEFAULT_PAGE_SIZE = 1;

  const addNote = (note: NoteDataType): void => {
    notesStorage.addNote(note);
    setNotes((prev) => [...(prev as NoteDataType[]), note]);
  };

  const removeNote = (id: string): void => {
    notesStorage.deleteNote(id as string);
    setNotes((prev) =>
      prev ? prev.filter((n) => n.id !== (id as string)) : [],
    );
  };

  const searchNotes = (title: string): void => {
    const filterNotes = notesStorage.findNotesByTitle(title);
    setNotes(filterNotes);
  };

  const getPagination = () => {
    if (notes) {
      const notesCount = notes.length;
      const pageCount = Math.ceil(notesCount / DEFAULT_PAGE_SIZE);
      return {
        totalPages: pageCount,
        currentPage: 1,
        total: notesCount,
      };
    }
    return {
      totalPages: 0,
      currentPage: 1,
      total: 0,
    };
  };

  useEffect(() => {
    setNotes(notesStorage.getNotes());
  }, []);

  return {
    notes,
    addNote,
    removeNote,
    searchNotes,
    getPagination,
  };
};

export { useNotes };
