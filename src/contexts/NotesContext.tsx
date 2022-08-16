import { createContext, ReactElement, ReactNode } from "react";
import {
  NotebookFormInputs,
  NoteContextProps,
  NoteModel,
  Nullable,
} from "@interfaces";
import { useState } from "react";

export const NoteContext = createContext<NoteContextProps>({
  notes: [],
  addNote: (_note: NotebookFormInputs) => null,
  deleteNote: (_title: string) => null,
});

export const NoteProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [notes, setNotes] = useState<Nullable<NoteModel[]>>([]);

  const addNote = (note: NoteModel) => {
    if (note) setNotes([...(notes || []), note]);
  };

  const deleteNote = (id: string) => {
    if (id) setNotes(notes?.filter((note) => note?.id !== id) || []);
  };

  return (
    <NoteContext.Provider value={{ addNote, deleteNote, notes }}>
      {children}
    </NoteContext.Provider>
  );
};
