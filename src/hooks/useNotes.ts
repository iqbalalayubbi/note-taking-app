import { notesStorage } from "@/api";
import { NoteDataType } from "@/types";
import { useEffect, useState } from "react";

const useNotes = () => {
  const [notes, setNotes] = useState<NoteDataType[] | null>([]);

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

  useEffect(() => {
    setNotes(notesStorage.getNotes());
  }, []);

  return {
    notes,
    addNote,
    removeNote,
    searchNotes,
  };
};

export { useNotes };
