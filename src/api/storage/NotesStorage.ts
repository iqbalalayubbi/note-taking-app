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
}

export { NoteStorage };
