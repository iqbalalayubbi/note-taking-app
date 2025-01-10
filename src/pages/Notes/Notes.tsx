import { Navbar } from "@/components";
import { NoteCard } from "./libs/components";

const Notes = () => {
  return (
    <main>
      <Navbar />
      <section className="mt-44 px-4 grid grid-cols-1 gap-y-4">
        <NoteCard />
      </section>
    </main>
  );
};

export { Notes };
