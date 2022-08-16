import { ReactElement } from "react";
import { NoteViewProps } from "./Note.props";

export const NoteView = ({
  note: { title, category, content },
}: NoteViewProps): ReactElement => (
  <div className="space-y-8">
    <h1 className="text-3xl font-semibold">{title}</h1>
    <p className="text-lg">Category &#8226; {category} </p>
    <p className="whitespace-pre-line">{content}</p>
  </div>
);
