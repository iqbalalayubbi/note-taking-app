import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button className="hover:opacity-50" onClick={() => toggleDropdown()}>
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
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
