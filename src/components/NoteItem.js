import React from "react";

export default function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium inventore quidem eos, autem saepe vero ea accusamus facilis sapiente deserunt eius totam laboriosam. Expedita similique dolor, quasi mollitia accusamus voluptatibus voluptates eius. Odio, dignissimos.</p>
        </div>
      </div>
    </div>
  );
}
