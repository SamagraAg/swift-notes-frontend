import { React, useContext } from "react";
import NoteContext from "../context/NoteContext";

export default function NoteItem(props) {
  const { note, editNote, showAlert } = props;

  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="d-flex justify-content-between">
              <i
                className="fa-solid fa-trash mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  showAlert("Note deleted successfully", "success");
                }}
              ></i>
              <i
                className="fa-solid fa-pencil mx-2"
                onClick={() => {
                  editNote(note);
                }}
              ></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
