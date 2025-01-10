import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const NoteCard = () => {
  return (
    <section className="border-2 border-slate-300 rounded-md bg-pink-50 px-4 py-4 shadow-md hover:shadow-none cursor-pointer transition-all duration-200 hover:bg-pink-100">
      <div className="flex gap-4 flex-col">
        <h2 className="text-xl font-bold text-black/80">Sample Note Title</h2>
        <p className="opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          aliquam fugit ratione eius eaque dolorum laboriosam esse vero eos
          officiis.
        </p>
      </div>
      <div className="flex justify-end gap-4 mt-5">
        <button className="rounded-full bg-blue-300 w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-500 transition-all duration-300">
          <Icon icon="line-md:edit" className="text-white" />
        </button>
        <button className="rounded-full bg-red-300 w-10 h-10 flex items-center justify-center shadow-md hover:bg-red-500 transition-all duration-300">
          <Icon icon="material-symbols:delete-outline" className="text-white" />
        </button>
      </div>
    </section>
  );
};

export { NoteCard };
