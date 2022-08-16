import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Navbar = (): ReactElement => (
  <div className="px-32 bg-indigo-600 py-6 space-x-4 text-white">
    <Link to="/">Notes</Link>
    <Link to="/add-note">Add Note</Link>
  </div>
);
