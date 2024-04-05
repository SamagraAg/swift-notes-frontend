import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  //state variable "notes"
  const intialNotes = [
    {
      _id: "660c57398bb26bc04296faec",
      user: "660c572d8bb26bc04296faea",
      title: "C++ Assignment",
      description: "Complete c++ assignment 1 and 2 by April 20 ",
      tag: "todo",
      date: "2024-04-02T19:06:33.865Z",
      __v: 0,
    },
    {
      _id: "660d9cdfe4b9a09faad74273",
      user: "660c572d8bb26bc04296faea",
      title: "Cooler",
      description: "It needs to be repaired",
      tag: "todo",
      date: "2024-04-03T18:15:59.281Z",
      __v: 0,
    },
    {
      _id: "660d9d29e4b9a09faad7427a",
      user: "660c572d8bb26bc04296faea",
      title: "IPL Match",
      description: "Mumbai vs Kolkata match on friday",
      tag: "sports",
      date: "2024-04-03T18:17:13.265Z",
      __v: 0,
    },
    {
      _id: "660d9d29e4b9a09faad7427w",
      user: "660c572d8bb26bc04296faea",
      title: "IPL Match",
      description: "Mumbai vs Kolkata match on friday",
      tag: "sports",
      date: "2024-04-03T18:17:13.265Z",
      __v: 0,
    },
    {
      _id: "660d9d29e4b9a09faad7427x",
      user: "660c572d8bb26bc04296faea",
      title: "IPL Match",
      description: "Mumbai vs Kolkata match on friday",
      tag: "sports",
      date: "2024-04-03T18:17:13.265Z",
      __v: 0,
    },
    {
      _id: "660d9d29e4b9a09faad7427y",
      user: "660c572d8bb26bc04296faea",
      title: "IPL Match",
      description: "Mumbai vs Kolkata match on friday",
      tag: "sports",
      date: "2024-04-03T18:17:13.265Z",
      __v: 0,
    },
    {
      _id: "660d9d29e4b9a09faad7427z",
      user: "660c572d8bb26bc04296faea",
      title: "IPL Match",
      description: "Mumbai vs Kolkata match on friday",
      tag: "sports",
      date: "2024-04-03T18:17:13.265Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(intialNotes);

  //Add a note
  const addNote = (title, description, tag) => {
    //todo -- create new node using API endpoint
    let newNote = {
      _id: "660c57398bb26bc04296zaec",
      user: "660c572d8bb26bc04296faea",
      title: title,
      description: description,
      tag: tag,
      date: "2024-04-05T17:38:33.865Z",
      __v: 0,
    };
    setNotes(notes.concat(newNote));
  };
  //Delete a note
  const deleteNote = (id) => {};
  //Update a note
  const updateNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
