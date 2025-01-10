import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { InputIcon } from "@/components";

const Navbar = () => {
  const onSearch = (name: string, value: string) => {
    console.log(name, value);
  };

  return (
    <nav className="py-5 px-5 shadow-md">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-800">SIMPLIFY NOTE</h1>
        <InputIcon
          className="rounded-full hidden"
          type="text"
          name="search"
          placeholder="Find your notes..."
          icon="akar-icons:search"
          onChange={onSearch}
        />
        <button>
          <Icon icon="gg:profile" className="text-3xl" />
        </button>
      </section>
      <section className="mt-5">
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
