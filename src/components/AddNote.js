import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";
export default function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2 className="mt-2">Add new note</h2>
      <form className="my-2" onSubmit={handleClick}>
        <div className="mb-2">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            value={note.title}
            required minLength={5}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
            required minLength={5}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button
          // disabled={note.title.length < 5 || note.description.length < 5}
          // onClick={handleClick}
          type="submit"
          className="btn btn-primary"
        >
          Create Note
        </button>
      </form>
    </div>
  );
}
