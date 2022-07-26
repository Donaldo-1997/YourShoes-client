import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getShoesName } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import styles from './SearchBar.module.css'


export default function Searchbar({setCurrentPage}) {
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
      setCurrentPage(1)
    }
    const idSearchBar = document.getElementById("input-searchbar") //Esto es para que el input de la searchbar se limpie 
    idSearchBar.value = ""                                         //despues de buscar algo
    setName('')
  };
  return (
   
    <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}  >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleInput(e)}
              id={"input-searchbar"}
            />
            <Button variant="outline-success" onClick={(e) => handleSubmit(e)}><FaSearch/></Button>
          </Form>
          
  );
}
