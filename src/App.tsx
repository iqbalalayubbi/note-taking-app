import { BrowserRouter, Route, Routes } from "react-router";
import { Login, Note, Notes } from "./pages";
import { AppRoute } from "./enums";
import { NotesProvider } from "./contexts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route
          path={AppRoute.NOTES}
          element={
            <NotesProvider>
              <Notes />
            </NotesProvider>
          }
        />
        <Route path={AppRoute.NOTE_ID} element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
