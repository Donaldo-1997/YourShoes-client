import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getShoesName } from "../../redux/actions";

export default function Searchbar() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Put a Name");
    } else {
      dispatch(getShoesName(title));
    }

    setTitle('')
    //actualPage(1)  seteralo en la pagina 1
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInput}
        value={title}
      />
      <button type="submit" onChange={handleSubmit}></button>
    </form>
  );
}
