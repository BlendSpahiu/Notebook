import { useMemo } from "react";
import { useNoteContext } from "@hooks";
import qs from "query-string";
import { NotesHeader } from "@molecules";
import { ReactElement } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Note } from "./Note";
import { NoteView } from "./NoteView";

export const Notes = (): ReactElement => {
  // hooks
  const navigate = useNavigate();
  const { search } = useLocation();
  const { notes } = useNoteContext();

  // query string
  const queryParams = qs.parse(search);

  // constants
  const searchParam = queryParams.search?.toString();
  const filteredNotes = useMemo(
    () =>
      notes?.filter(
        ({ title, category }) =>
          title.toLowerCase().includes(searchParam?.toLowerCase() || "") ||
          category.toLowerCase().includes(searchParam?.toLowerCase() || "")
      ),
    [notes, searchParam]
  );

  // handlers
  const handleView = (id: string) => () =>
    navigate({
      search: `${qs.stringify({
        ...queryParams,
        note: id,
      })}`,
    });

  return (
    <div className="flex space-x-40">
      <div className="mt-16">
        <NotesHeader />
        <div className="mt-6">
          <h2>All Notes</h2>
          {notes && notes.length ? (
            <ul className="border mt-2 p-2 rounded-lg divide-y">
              {!searchParam
                ? notes?.map((note) => (
                    <Note
                      key={note.id}
                      handleViewNote={handleView(note.id)}
                      note={note}
                    />
                  ))
                : filteredNotes?.map((note) => (
                    <Note
                      key={note.id}
                      handleViewNote={handleView(note.id)}
                      note={note}
                    />
                  ))}
            </ul>
          ) : (
            <div className="flex flex-col mt-6">
              <p className="font-medium">No notes found!</p>
              <Link
                className="text-sky-600 hover:cursor-pointer"
                to="/add-note"
              >
                Add some!
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="mt-16">
        {notes
          ?.filter((note) => note.id === queryParams.note?.toString() || "")
          .map((note) => (
            <NoteView key={note.id} note={note} />
          ))}
      </div>
    </div>
  );
};
