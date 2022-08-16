import { NoteModel } from "./models/Notes.model";
import { Nullable } from "./Nullable.types";

export interface NoteContextProps {
    notes: Nullable<NoteModel[]>;
    addNote: (note: NoteModel) => void;
    deleteNote: (title: string) => void;
}