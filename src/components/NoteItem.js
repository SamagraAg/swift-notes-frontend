import React from "react";

export default function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="d-flex justify-content-between">
            <i className="fa-solid fa-trash mx-2"></i>
              <i className="fa-solid fa-pencil mx-2"></i>
            </div>
          </div>
          <p className="card-text">
            {note.description}
          </p>
        </div>
      </div>
    </div>
  );
}
