import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getShoesName } from "../../redux/actions";
import styles from './SearchBar.module.css'

export default function Searchbar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Put a Name");
    } else {
      dispatch(getShoesName(name));
    }

    setName('')
    //actualPage(1)  seteralo en la pagina 1
  };
  return (
    <form className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInput(e)}
        value={name}
        className={styles.searchTerm} 
      />
      <button type="submit" onClick={(e) => handleSubmit(e)} className={styles.Searchbutton}>Search</button>
    </form>
  );
}
