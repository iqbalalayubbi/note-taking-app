import { useNotes } from "@/hooks";
import { createContext } from "react";
import { NotesContextType } from "./types";

const NotesContext = createContext<NotesContextType | null>(null);

type Properties = {
  children: React.ReactNode;
};

const NotesProvider = ({ children }: Properties) => {
  const allStates = useNotes();

  return (
    <NotesContext.Provider value={{ ...allStates }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext };
