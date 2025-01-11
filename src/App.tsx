import { BrowserRouter, Route, Routes } from "react-router";
import { Login, Note, Notes } from "./pages";
import { AppRoute } from "./enums";
import { NotesProvider } from "./contexts";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={AppRoute.LOGIN} element={<Login />} />
          <Route
            element={
              <NotesProvider>
                <MainLayout />
              </NotesProvider>
            }
          >
            <Route path={AppRoute.NOTES} element={<Notes />} />
            <Route path={AppRoute.NOTE_ID} element={<Note />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { App };
