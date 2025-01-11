import { userDataStorage } from "@/api";
import { AuthContext, AuthContextType } from "@/contexts";
import { AppRoute } from "@/enums";
import { UserDataType } from "@/types";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDataType>();
  const { userData } = useContext(AuthContext) as AuthContextType;

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    userDataStorage.removeUserData();
    navigate(AppRoute.LOGIN);
  };

  const handleProfile = () => {
    setIsOpen((prev) => !prev);
    navigate(AppRoute.PROFILE);
  };

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="hover:opacity-50 flex items-center gap-3 "
        onClick={() => toggleDropdown()}
      >
        <span className="font-bold">{user?.name}</span>
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
              <button
                onClick={() => handleProfile()}
                className="block px-4 py-2 hover:bg-gray-200 font-semibold w-full text-start"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLogout()}
                className="px-4 py-2 flex items-center gap-3 hover:bg-red-400 hover:text-white font-semibold w-full"
              >
                Logout
                <Icon icon="humbleicons:logout" className="" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
