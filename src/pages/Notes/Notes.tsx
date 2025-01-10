import { Navbar } from "@/components";
import { AddCard, NoteCard } from "./libs/components";

const Notes = () => {
  return (
    <main>
      <Navbar />
      <section className="mt-44 md:mt-32 px-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
        <AddCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </section>
    </main>
  );
};

export { Notes };
