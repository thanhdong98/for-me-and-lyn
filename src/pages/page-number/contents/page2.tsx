import { type FC } from "react";
import NoteCard from "../../../components/note-card";

const PageTwo: FC<{ played?: boolean }> = ({ played }) => {
  return <NoteCard />;
};
export default PageTwo;
