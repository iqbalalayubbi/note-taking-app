import { Button, InputIcon, Modal, Navbar } from "@/components";
import { AddCard, NoteCard } from "./libs/components";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useState } from "react";
import { notesStorage } from "@/api/storage";
import { v4 as uuidv4 } from "uuid";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const onCreate = () => {
    setIsOpen(true);
  };

  const handleCreate = () => {
    notesStorage.addNote({ id: uuidv4(), title, content: "" });
    setIsOpen(false);
  };

  return (
    <main>
      <Navbar />
      <section className="mt-44 md:mt-32 px-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
        <AddCard onCreate={onCreate} />
        <NoteCard />
        <NoteCard />
        <NoteCard />
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
