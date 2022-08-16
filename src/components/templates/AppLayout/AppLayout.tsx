import { ReactElement } from "react";
import { Navbar } from "@organisms";
import { AppLayoutProps } from "./AppLayout.props";

export const AppLayout = ({ content }: AppLayoutProps): ReactElement => (
  <>
    <Navbar />
    <main className="mx-32">{content}</main>
  </>
);
