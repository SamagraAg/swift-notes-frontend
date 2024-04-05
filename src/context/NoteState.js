import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  //host url
  const host = "http://localhost:5000";

  //state variable "notes"
  const [notes, setNotes] = useState([]);

  //Function to fetch all notes via api
  const fetchNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYzU3MmQ4YmIyNmJjMDQyOTZmYWVhIn0sImlhdCI6MTcxMjA4NDc4MX0.inqBo8OcTizxOos-CkKDOqU1pK4M3V_OBKDN3Wd2Fso",
      },
    });

    //Setting Notes variable with fetched response
    const fetchedNotes = await response.json();
    setNotes(fetchedNotes);
  };

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
  const deleteNote = (id) => {
    console.log(`Deleting node with id ${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Update a note
  const updateNote = (id) => {};

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
