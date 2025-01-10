import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const NoteCard = () => {
  return (
    <section className="border-2 border-slate-300 rounded-md bg-pink-50 px-4 py-4">
      <div className="flex gap-4 flex-col">
        <h2 className="text-xl font-bold">Sample Note Title</h2>
        <p className="opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          aliquam fugit ratione eius eaque dolorum laboriosam esse vero eos
          officiis.
        </p>
      </div>
      <div className="flex justify-end gap-4 mt-5">
        <button className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
          <Icon icon="line-md:edit" />
        </button>
        <button className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
          <Icon icon="material-symbols:delete-outline" />
        </button>
      </div>
    </section>
  );
};

export { NoteCard };
