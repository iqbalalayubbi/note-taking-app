import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages";
import { AppRoute } from "./enums";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.NOTES} element={<h1>Notes Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
