import { Button, InputIcon, Modal, Navbar } from "@/components";
import { AddCard, NoteCard } from "./libs/components";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useContext, useState } from "@/hooks";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { AppRoute } from "@/enums";
import { NotesContext, NotesContextType } from "@/contexts";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { notes, addNote, removeNote } = useContext(
    NotesContext,
  ) as NotesContextType;

  const onCreate = () => {
    setIsOpen(true);
  };

  const handleCreate = () => {
    const newNote = { id: uuidv4(), title, content: "" };
    addNote(newNote);
    setIsOpen(false);
  };

  const handleEdit = (id: string | null) => {
    navigate(AppRoute.NOTE_ID.replace(":id", id as string));
  };

  const handleDelete = (id: string | null) => {
    removeNote(id as string);
  };

  return (
    <main>
      <Navbar />
      <section className="mt-44 md:mt-32 px-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
        <AddCard onCreate={onCreate} />
        {notes?.map((note) => {
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
