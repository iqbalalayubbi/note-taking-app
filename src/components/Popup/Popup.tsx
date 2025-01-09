import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

type Property = {
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
};

const Popup = ({ title, message, isOpen, onClose }: Property) => {
  return (
    isOpen && (
      <main className="h-screen flex items-center px-4 absolute top-0 left-0 w-screen">
        <section className="relative rounded-md flex flex-col items-center py-10 gap-4 w-full  bg-white z-20">
          <div className="flex flex-col justify-center items-center gap-5">
            <Icon
              icon="typcn:warning-outline"
              className="text-4xl text-red-500"
            />
            <h2 className="text-center text-2xl font-bold">{title}</h2>
          </div>
          <button
            className="absolute top-3 right-3 text-2xl"
            onClick={() => onClose()}
          >
            <Icon icon="ic:round-close" />
          </button>
          <p>{message}</p>
          <button
            className="bg-slate-400 px-5 py-2 rounded-full text-white w-1/2 mt-5"
            onClick={() => onClose()}
          >
            Close
          </button>
        </section>
        <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-30 z-0" />
      </main>
    )
  );
};

export { Popup };
