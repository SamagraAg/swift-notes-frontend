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
      method: "GET",
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

  //Function to add a note
  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYzU3MmQ4YmIyNmJjMDQyOTZmYWVhIn0sImlhdCI6MTcxMjA4NDc4MX0.inqBo8OcTizxOos-CkKDOqU1pK4M3V_OBKDN3Wd2Fso",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //appending new node to the notes array
    const jsonResponse = await response.json();
    setNotes(notes.concat(jsonResponse.savedNote));
  };

  //Function to Delete a note
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYzU3MmQ4YmIyNmJjMDQyOTZmYWVhIn0sImlhdCI6MTcxMjA4NDc4MX0.inqBo8OcTizxOos-CkKDOqU1pK4M3V_OBKDN3Wd2Fso",
      },
    });

    //Remove Deleted node from array
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Function to edit/Update a note
  const updateNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYzU3MmQ4YmIyNmJjMDQyOTZmYWVhIn0sImlhdCI6MTcxMjA4NDc4MX0.inqBo8OcTizxOos-CkKDOqU1pK4M3V_OBKDN3Wd2Fso",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const jsonResponse = await response.json()
    console.log(jsonResponse)
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
