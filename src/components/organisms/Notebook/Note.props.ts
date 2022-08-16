import { NoteModel } from "@interfaces";

export interface NoteProps {
    note: NoteModel;
    handleViewNote: (id: string) => void;
}

export interface NoteViewProps extends Omit<NoteProps, 'handleViewNote'> {}