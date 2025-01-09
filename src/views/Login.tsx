import { Icon } from "@iconify-icon/react";

const Login = () => {
  return (
    <main>
      <h1 className="text-5xl font-extrabold text-center mt-20 text-purple-800">
        Simplify Note
      </h1>
      <h1 className="text-3xl font-semibold text-center mt-10">Login</h1>
      <form className="flex flex-col items-center justify-center mt-10 gap-4">
        <div className="flex items-center justify-between w-3/4 border rounded-xl py-3 px-5">
          <input
            type="text"
            placeholder="Enter your username..."
            className="focus:outline-none"
            name="username"
          />
          <Icon icon="iconamoon:profile" className="text-gray-500" />
        </div>
        <div className="flex items-center justify-between w-3/4 border rounded-xl py-3 px-5">
          <input
            type="password"
            placeholder="Enter your password..."
            className="focus:outline-none"
            name="password"
          />
          <Icon icon="carbon:password" className="text-gray-500" />
        </div>
        <button
          className="rounded-full w-3/4 bg-purple-500 py-3 mt-10 font-bold text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export { Login };
