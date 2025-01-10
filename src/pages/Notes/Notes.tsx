import { Button, InputIcon, Modal, Navbar } from "@/components";
import { AddCard, NoteCard } from "./libs/components";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useEffect, useState } from "react";
import { notesStorage } from "@/api/storage";
import { v4 as uuidv4 } from "uuid";
import { NoteDataType } from "@/types";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState<NoteDataType[]>([]);

  const onCreate = () => {
    setIsOpen(true);
  };

  const handleCreate = () => {
    const newNote = { id: uuidv4(), title, content: "" };
    notesStorage.addNote(newNote);
    setNotes((prev) => [...prev, newNote]);
    setIsOpen(false);
  };

  const handleEdit = (id: string | null) => {
    console.log(id);
  };

  const handleDelete = (id: string | null) => {
    console.log(id);
  };

  useEffect(() => {
    setNotes(notesStorage.getNotes());
  }, []);

  return (
    <main>
      <Navbar />
      <section className="mt-44 md:mt-32 px-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
        <AddCard onCreate={onCreate} />
        {notes.map((note) => {
          return (
            <NoteCard
              id={note.id}
              title={note.title}
              content={note.content}
              key={note.id}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          );
        })}
      </section>
      <Modal
        isOpen={isOpen}
        title="Create New Task"
        onClose={() => setIsOpen(false)}
        icon={
          <Icon icon="hugeicons:note" className="text-4xl text-purple-500" />
        }
      >
        <InputIcon
          name="title"
          icon="hugeicons:note"
          placeholder="Enter task title"
          className="w-4/5"
          type="text"
          onChange={(_, val) => setTitle(val)}
        />
        <Button
          label="Create"
          type="button"
          className="w-4/5"
          onClick={handleCreate}
        />
      </Modal>
    </main>
  );
};

export { Notes };
