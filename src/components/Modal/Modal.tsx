import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import React from "react";

type Property = {
  title: string;
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  icon?: React.ReactNode;
};

const Modal = ({ title, isOpen, onClose, children, icon }: Property) => {
  return (
    isOpen && (
      <main className="h-screen flex items-center px-4 absolute top-0 left-0 right-0 ml-auto mr-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12  z-40">
        <section className="relative rounded-md flex flex-col items-center py-10 gap-4 w-full  bg-white z-20">
          <div className="flex flex-col justify-center items-center gap-5">
            {icon}
            <h2 className="text-center text-2xl font-bold">{title}</h2>
          </div>
          <button
            className="absolute top-3 right-3 text-2xl"
            onClick={() => onClose()}
          >
            <Icon icon="ic:round-close" />
          </button>
          {children}
        </section>
        <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-30 z-0" />
      </main>
    )
  );
};

export { Modal };
