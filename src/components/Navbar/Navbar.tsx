import { InputIcon } from "@/components";
import { Dropdown } from "./components";
import { NotesContext, NotesContextType } from "@/contexts";
import { useContext } from "react";

const Navbar = () => {
  const { searchNotes } = useContext(NotesContext) as NotesContextType;

  const onSearch = (_name: string, value: string) => {
    searchNotes(value);
  };

  return (
    <nav className="py-5 px-5 shadow-md fixed w-full top-0 bg-white z-20">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-800">SIMPLIFY NOTE</h1>
        <InputIcon
          className="rounded-full hidden md:block md:w-2/3 lg:w-1/2"
          type="text"
          name="search"
          placeholder="Find your notes..."
          icon="akar-icons:search"
          onChange={onSearch}
        />
        <Dropdown />
      </section>
      <section className="mt-5 md:hidden">
        <InputIcon
          className="rounded-full"
          type="text"
          name="search"
          placeholder="Find your notes..."
          icon="akar-icons:search"
          onChange={onSearch}
        />
      </section>
    </nav>
  );
};

export { Navbar };
