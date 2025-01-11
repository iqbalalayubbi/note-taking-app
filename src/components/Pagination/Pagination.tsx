import { NotesContext, NotesContextType } from "@/contexts";
import { AppRoute } from "@/enums";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Pagination = () => {
  const [page, setPage] = useState("1");
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const { getPagination, notes } = useContext(NotesContext) as NotesContextType;

  const handlePageChange = (btnName: string, newPage: string = "1") => {
    if (btnName === "prev" && parseInt(page) >= 2) {
      newPage = (parseInt(page) - 1).toString();
      setPage(newPage);
    } else if (btnName === "next" && parseInt(page) <= totalPages - 1) {
      newPage = (parseInt(page) + 1).toString();
      setPage(newPage);
    } else {
      setPage(newPage as string);
    }
    navigate(AppRoute.NOTES_PAGE.replace(":page", newPage as string));
  };

  const renderPagination = () => {
    const notesData = [];
    for (let i = 1; i <= totalPages; i++) {
      notesData.push(
        <button
          onClick={() => handlePageChange("newPage", i.toString())}
          key={i}
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
            i === parseInt(page) ? "font-bold" : ""
          }`}
        >
          {i}
        </button>,
      );
    }
    return notesData;
  };

  useEffect(() => {
    const { totalPages } = getPagination();
    setTotalPages(totalPages);
    setPage("1");
  }, [notes, getPagination]);

  return (
    <nav className="flex justify-center my-10">
      <ul className="flex -space-x-px text-sm">
        <li>
          <button
            onClick={() => handlePageChange("prev")}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </button>
        </li>
        {renderPagination()}
        <li>
          <button
            onClick={() => handlePageChange("next")}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Pagination };
