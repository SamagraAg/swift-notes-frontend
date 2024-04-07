import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Alert from "./components/Alert";
import NoteState from "./context/NoteState";

export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    const obj = {
      message: message,
      type: type,
    };
    setAlert(obj);

    //display Alert for only some seconds and then hide it(not close it)
    //for hiding it we set it to NULL
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert></Alert>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}
