import { React, useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container">
      <h2>Your Notes</h2>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}></NoteItem>;
        })}
      </div>
    </div>
  );
}
