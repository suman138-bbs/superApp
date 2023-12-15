import { useState } from "react";
import style from "./note.module.css";

const Note = () => {
  const val = JSON.parse(localStorage.getItem("notes"));
  const [note, setNote] = useState(val);
  const handleChange = (e) => {
    localStorage.setItem("notes", JSON.stringify(e.target.value));
    setNote(e.target.value);
  };
  return (
    <div className={style.noteContainer}>
      <h2>All notes</h2>
      <div className={style.inputContainer}>
        <textarea
          value={note}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default Note;
