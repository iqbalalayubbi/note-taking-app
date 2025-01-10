import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const AddCard = () => {
  return (
    <section className="border-dashed border-2 border-slate-300 flex items-center justify-center flex-col py-4 text-black/50 gap-3 cursor-pointer hover:bg-slate-400 group transition-all duration-300 rounded-md shadow-md hover:shadow">
      <Icon icon="icons8:plus" className="text-2xl group-hover:text-white" />
      <span className="font-semibold group-hover:text-white">Create New</span>
    </section>
  );
};

export { AddCard };
