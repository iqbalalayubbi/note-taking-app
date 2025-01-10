import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages";
import { AppRoute } from "./enums";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
