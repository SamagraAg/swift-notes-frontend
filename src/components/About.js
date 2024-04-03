import { React, useContext, useEffect } from "react";
import NoteContext from "../context/NoteContext";
export default function About() {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update(parseInt(a.state.age) + 1);
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      Hello I am {a.state.name} and my age is {a.state.age}
    </div>
  );
}
