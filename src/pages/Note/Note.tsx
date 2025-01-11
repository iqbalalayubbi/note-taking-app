import { notesStorage } from "@/api";
import { AppRoute } from "@/enums";
import { NoteDataType } from "@/types";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { DEFAULT_NOTE_DATA } from "./constants";

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [noteData, setNoteData] = useState<NoteDataType>(DEFAULT_NOTE_DATA);
  const [isEditMode, setIsEditMode] = useState(true);

  const handleUpdate = () => {
    notesStorage.editNote(noteData);
    navigate(AppRoute.NOTES);
  };

  useEffect(() => {
    setNoteData(notesStorage.findNoteById(id as string) as NoteDataType);
  }, [id]);

  return (
    <main>
      <section className="mt-40 px-4 flex flex-col items-center border-2 border-slate-300 rounded-md py-4 mx-4 relative">
        <button
          className="rounded-full bg-sky-300 w-10 h-10 flex items-center justify-center shadow-md hover:bg-sky-500 transition-all duration-300 absolute right-5"
          onClick={() => setIsEditMode((prev) => !prev)}
        >
          <Icon
            icon="material-symbols:edit-off-outline-rounded"
            className="text-white"
          />
        </button>
        <input
          type="text"
          className="text-center font-bold text-xl w-full border-b-2 focus:outline-none disabled:text-black/30 rounded-md"
          value={noteData?.title}
          onChange={(e) =>
            setNoteData((prev) => ({ ...prev, title: e.target.value }))
          }
          disabled={isEditMode}
        />
        <textarea
          name=""
          id=""
          className="w-full mt-5 indent-5 focus:outline-none border-2 rounded-md py-5 font-medium text-lg disabled:text-black/50"
          placeholder="Write antyhing..."
          rows={10}
          value={noteData.content}
          onChange={(e) =>
            setNoteData((prev) => ({ ...prev, content: e.target.value }))
          }
          disabled={isEditMode}
        ></textarea>

        <button
          className="w-full mt-5 bg-blue-300 hover:bg-blue-400 transition-all duration-300 rounded-md text-white py-2"
          onClick={handleUpdate}
        >
          Save
        </button>
        <Link to={AppRoute.NOTES} className="w-full">
          <button className="w-full mt-5 bg-slate-300 hover:bg-slate-400 transition-all duration-300 rounded-md text-white py-2">
            Back
          </button>
        </Link>
      </section>
    </main>
  );
};

export { Note };
