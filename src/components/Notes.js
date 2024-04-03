import { React, useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <NoteItem note={note}></NoteItem>;
      })}
    </div>
  );
}
