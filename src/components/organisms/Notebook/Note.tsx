import { ReactElement, useState } from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { NoteProps } from "./Note.props";
import { CustomModal } from "@molecules";
import { useNoteContext } from "@hooks";

export const Note = ({
  note: { title, id },
  handleViewNote,
}: NoteProps): ReactElement => {
  // local state
  const [open, setOpen] = useState<boolean>(false);

  // hooks
  const { deleteNote } = useNoteContext();

  // handlers
  const handleViewSingleNote = () => handleViewNote(id);
  const handleModal = () => {
    setOpen(!open);
  };
  const handleDeleteNote = (id: string) => () => {
    deleteNote(id);
  };

  return (
    <>
      <li
        className="py-3 hover:cursor-pointer flex justify-between"
        onClick={handleViewSingleNote}
      >
        <p>{title}</p>
        <TrashIcon onClick={handleModal} className="text-red-500 w-5 h-5" />
      </li>

      <CustomModal
        title="Delete Note"
        description="Are you sure you want to delete this note? This process cannot be undone."
        open={open}
        handleClose={handleModal}
        handleButtonClick={handleDeleteNote(id)}
      />
    </>
  );
};
