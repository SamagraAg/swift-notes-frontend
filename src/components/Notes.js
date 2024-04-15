import { React, useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

export default function Notes(props) {
  const navigate = useNavigate();
  //using note context
  const context = useContext(NoteContext);
  const { notes, fetchNotes, updateNote } = context;

  const openref = useRef(null);
  const closeref = useRef(null);

  //state varialbe eNote for updating/editing the note
  let [enote, setNote] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });
  const onChange = (e) => {
    setNote({ ...enote, [e.target.name]: e.target.value });
  };

  //Function to facilate note editing for user
  const editNote = (note) => {
    //Open the modal by clicking on hidden button
    openref.current.click();

    //initlaise the value of eNote with oldTitle, oldDescription and oldTag of 'note'(note to be edited)
    setNote(note);
  };

  //Function to hit API call for updating note
  const handleClick = (e) => {
    e.preventDefault();
    closeref.current.click();
    updateNote(enote._id, enote.title, enote.description, enote.tag);
    props.showAlert("Note updated successfully", "success");
  };

  //Fetching User notes on load
  useEffect(() => {
    if (localStorage.getItem("token")) fetchNotes();
    else navigate("/login");
    //eslint-disable-nextline
  },[]);

  return (
    //Button to open modal. It will be hidden and clicked via 'ref'
    <div className="container">
      <button
        ref={openref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal. HIDDEN BUTTON
      </button>

      {/* Modal for editing not */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit your note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                    value={enote.title}
                    required
                    minLength={5}
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
                    value={enote.description}
                    required
                    minLength={5}
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
                    value={enote.tag}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    ref={closeref}
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*Component to show our notes, iterating through notes array fetched by useEffect */}
      <h2 className="text-warning">Your Notes</h2>
      <div className="row">
        {notes.length > 0 &&
          notes.map((note) => {
            return (
              <NoteItem
                showAlert={props.showAlert}
                key={note._id}
                note={note}
                editNote={editNote}
              ></NoteItem>
            );
          })}
      </div>
    </div>
  );
}
