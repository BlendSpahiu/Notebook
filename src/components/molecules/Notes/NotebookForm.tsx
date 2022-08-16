import { ReactElement } from "react";
import { useNoteContext } from "@hooks";
import { NotebookFormInputs } from "@interfaces";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { NoteValidator } from "@validators";
import { useNavigate } from "react-router-dom";

export const NotebookForm = (): ReactElement => {
  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NotebookFormInputs>({
    resolver: joiResolver(NoteValidator()),
  });

  // hooks
  const { addNote } = useNoteContext();
  const navigate = useNavigate();

  // handlers
  const handleAddNote = ({ category, title, content }: NotebookFormInputs) => {
    addNote({
      id: Math.random().toString(36).substring(2, 7),
      title,
      category,
      content,
    });
    navigate("/");
  };

  return (
    <div className="mt-16">
      <form className="space-y-4" onSubmit={handleSubmit(handleAddNote)}>
        <div className="flex flex-col">
          <TextField
            className="w-1/4"
            label="Title"
            id="title"
            {...register("title")}
          />
          {errors.category && (
            <p className="text-red-500 text-sm my-3">{errors.title?.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <TextField
            className="w-1/4"
            label="Category"
            id="category"
            {...register("category")}
          />
          {errors.category && (
            <p className="text-red-500 text-sm my-3">
              {errors.category?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col mt-5">
          <TextField
            label="Content"
            multiline
            rows={6}
            className="px-4 py-2 min-h-[100px] w-1/2 border rounded-md"
            id="content"
            {...register("content")}
          />
          {errors.content && (
            <p className="text-red-500 text-sm my-3">
              {errors.content?.message}
            </p>
          )}
        </div>
        <Button type="submit" variant="contained" className="!mt-5">
          Add Note
        </Button>
      </form>
    </div>
  );
};
