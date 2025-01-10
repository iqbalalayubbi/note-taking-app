import { BrowserRouter, Route, Routes } from "react-router";
import { Login, Notes } from "./pages";
import { AppRoute } from "./enums";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route path={AppRoute.NOTES} element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
