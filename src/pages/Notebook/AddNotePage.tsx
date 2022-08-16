import { ReactElement } from "react";
import { NotebookForm } from "@molecules";
import { AppLayout } from "@templates";

export const AddNotePage = (): ReactElement => (
  <AppLayout content={<NotebookForm />} />
);
