import { Button, InputIcon } from "@/components";
import { AuthContext, AuthContextType } from "@/contexts";
import { AppRoute } from "@/enums";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

const Profile = () => {
  const [fullName, setFullname] = useState<string>("");
  const { userData } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    if (userData) {
      setFullname(userData.name);
    }
  }, [userData]);

  const handleChangeName = () => {
    // d
  };

  return (
    <section className="flex flex-col items-center gap-5">
      <Icon icon="gg:profile" className="text-3xl" />
      <span className="text-slate-500 italic text-sm">
        @{userData?.username}
      </span>
      <InputIcon
        icon="icon-park-outline:edit-name"
        placeholder="Enter full name"
        name="fullName"
        type="text"
        onChange={(_, value) => setFullname(value)}
        value={fullName}
      />
      <Button
        label="Save"
        type="button"
        className="w-3/4"
        onClick={() => handleChangeName()}
      />
      <Link to={AppRoute.NOTES} className="w-3/4">
        <Button
          label="Back to Note"
          type="button"
          onClick={() => handleChangeName()}
          className="w-full bg-slate-400"
        />
      </Link>
    </section>
  );
};

export { Profile };
