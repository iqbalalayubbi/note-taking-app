import { notesStorage } from "@/api";
import { NoteDataType } from "@/types";
import { useCallback, useEffect, useState } from "react";

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
    if (!title) {
      getNotesByPage(1);
    } else {
      const filterNotes = notesStorage.findNotesByTitle(title);
      setNotes(filterNotes);
    }
  };

  const getPagination = () => {
    if (getAllNotes()) {
      const notesCount = getAllNotes().length;
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

  const getAllNotes = () => {
    return notesStorage.getNotes();
  };

  const getNotesByPage = useCallback((page: number) => {
    const startIndex = (page - 1) * DEFAULT_PAGE_SIZE;
    const endIndex = startIndex + DEFAULT_PAGE_SIZE;
    const newNotes = getAllNotes().slice(startIndex, endIndex);
    setNotes(newNotes as NoteDataType[]);
  }, []);

  useEffect(() => {
    setNotes(notesStorage.getNotes());
  }, []);

  return {
    notes,
    addNote,
    removeNote,
    searchNotes,
    getPagination,
    getNotesByPage,
  };
};

export { useNotes };
