import React from "react";

export default function NoteItem(props) {
  const {note} = props;
  return (
    <div>
       Title: {note.title} Description: {note.description}
    </div>
  );
}
