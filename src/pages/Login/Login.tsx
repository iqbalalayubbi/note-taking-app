import { useState } from "@/hooks";
import { Button, InputIcon, Popup } from "@/components";
import { LoginPayload } from "./libs/constants";
import { userDataStorage } from "@/api";
import { USER_PASSWORD, USER_USERNAME } from "@/constants";

const Login = () => {
  const [formLogin, setFormLogin] = useState(LoginPayload);
  const [isError, setIsError] = useState(false);

  const onChange = (name: string, val: string) => {
    setFormLogin((prev) => ({ ...prev, [name]: val }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, username, password } = formLogin;

    if (username === USER_USERNAME && password === USER_PASSWORD) {
      userDataStorage.setUserData({
        name,
        username,
        isAuthenticated: true,
      });
    } else {
      setIsError(true);
    }
  };

  const onClose = () => {
    setIsError(false);
    console.log("onClose");
  };

  return (
    <main>
      <Popup
        title="Something Error"
        message="Your username or password is incorrect"
        isOpen={isError}
        onClose={onClose}
      />
      <h1 className="text-5xl font-extrabold text-center mt-20 text-purple-800">
        Simplify Note
      </h1>
      <h1 className="text-3xl font-semibold text-center mt-10">Login</h1>
      <form
        className="flex flex-col items-center justify-center mt-10 gap-4"
        onSubmit={onSubmit}
      >
        <InputIcon
          className="w-3/4"
          icon="iconamoon:profile"
          placeholder="Enter your username..."
          type="text"
          name="username"
          onChange={onChange}
        />
        <InputIcon
          className="w-3/4"
          icon="carbon:password"
          placeholder="Enter your password..."
          type="password"
          name="password"
          onChange={onChange}
        />
        <Button label="Login" type="submit" className="w-3/4 mt-10" />
      </form>
    </main>
  );
};

export { Login };
