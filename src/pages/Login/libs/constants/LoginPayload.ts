const LoginPayload = {
  name: import.meta.env.VITE_NAME,
  username: "",
  password: "",
} as const;

export { LoginPayload };
