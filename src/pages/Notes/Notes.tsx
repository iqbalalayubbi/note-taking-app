import { Navbar } from "@/components";
import { AddCard, NoteCard } from "./libs/components";

const Notes = () => {
  return (
    <main>
      <Navbar />
      <section className="mt-44 md:mt-32 px-4 grid grid-cols-1 gap-y-4">
        <AddCard />
        <NoteCard />
      </section>
    </main>
  );
};

export { Notes };
