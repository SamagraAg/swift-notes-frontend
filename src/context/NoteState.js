import { json } from "react-router-dom";
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
        "auth-token": localStorage.getItem("token"),
      },
    });

    //Setting Notes variable with fetched response
    const fetchedNotes = await response.json();
    setNotes(fetchedNotes.notes);
  };

  //Function to add a note
  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
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
        "auth-token": localStorage.getItem("token"),
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
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const jsonResponse = await response.json();
    const updatedNote = jsonResponse.updatedNote;

    //making copy of notes array and then making change to this copy
    const notesCopy = JSON.parse(JSON.stringify(notes));

    //finding note to updated in notes array and updating it
    for (let index = 0; index < notesCopy.length; index++) {
      let iNote = notesCopy[index];
      if (iNote._id === id) {
        notesCopy[index].title = updatedNote.title;
        notesCopy[index].description = updatedNote.description;
        notesCopy[index].tag = updatedNote.tag;
        break;
      }
    }
    //update the notes array with the notesCopy array which contains newNote
    setNotes(notesCopy);
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
