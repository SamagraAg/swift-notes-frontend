import { React, useContext, useEffect } from "react";
import NoteContext from "../context/NoteContext";
export default function About() {
  const a = useContext(NoteContext);
  return <div>This is About page</div>;
}