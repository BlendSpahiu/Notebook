import { ReactElement } from "react";
import { AppLayout } from "@templates";
import { Notes } from "@organisms";

export const HomePage = (): ReactElement => <AppLayout content={<Notes />} />;
