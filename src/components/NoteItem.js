import { React, useContext } from "react";
import NoteContext from "../context/NoteContext";

export default function NoteItem(props) {
  const { note, editNote, showAlert } = props;

  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const getVoice = async (note) => {
    try {
      const apiKey = process.env.REACT_APP_TTS_APIKEY;

      const url = `https://api.voicerss.org/?key=${apiKey}&hl=en-us&c=MP3&src=${encodeURIComponent(note.description)}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Failed to fetch the voice from the API");
      }
  
      const audio = new Audio(url);
      audio.play();
      
    } catch (error) {
      console.error("Error while fetching the voice:", error);
    }
  };
  

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
              <i
                  className="fa-solid fa-volume-up mx-2"
                  onClick={() => {
                    getVoice(note);
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
