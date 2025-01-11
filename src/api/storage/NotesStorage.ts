import { BaseStorage } from "./BaseStorage";

type NoteDataType = {
  id: string | null;
  title: string;
  content: string;
};

class NoteStorage extends BaseStorage {
  constructor(key: string) {
    super(key);

    const notes = this.getNotes() as NoteDataType[];

    if (!notes || notes.length === 0) {
      this.setNotes([]);
    }
  }

  public getNotes(): NoteDataType[] {
    return this.getItem() as NoteDataType[];
  }

  public setNotes(notes: NoteDataType[]): void {
    this.setItem(notes);
  }

  public addNote(note: NoteDataType): void {
    const notes = this.getNotes();
    const updatedNotes = [...notes, note];
    this.setNotes(updatedNotes);
  }

  public editNote(note: NoteDataType): void {
    const notes = this.getNotes();
    const updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
    this.setNotes(updatedNotes);
  }

  public deleteNote(id: string): void {
    const notes = this.getNotes();
    const updatedNotes = notes.filter((n) => n.id !== id);
    this.setNotes(updatedNotes);
  }

  public findNoteById(id: string): NoteDataType | null {
    const notes = this.getNotes();
    return notes.find((n) => n.id === id) || null;
  }
}

export { NoteStorage };
