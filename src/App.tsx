import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { AddNotePage, HomePage } from "@pages";

export const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-note" element={<AddNotePage />} />
    </Routes>
  );
};
