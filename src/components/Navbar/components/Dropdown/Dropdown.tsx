import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="hover:opacity-50 flex items-center gap-3 "
        onClick={() => toggleDropdown()}
      >
        <span className="font-bold">Steve Smith</span>
        <Icon icon="gg:profile" className="text-3xl" />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute top-10 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 border"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-200 font-semibold"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 flex items-center gap-3 hover:bg-red-400 hover:text-white font-semibold"
              >
                Logout
                <Icon icon="humbleicons:logout" className="" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
