import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const [state, setState] = useState({ name: "samagra", age: "21" });
  const update = (newAge) => {
    setState({ name: "samagra", age: newAge });
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
