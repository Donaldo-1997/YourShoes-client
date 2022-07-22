import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Searchbar from "../SearchBar/SearchBar";
import { BsFillCartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar({setCurrentPage}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Your Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
             <Link to='/cart' className={styles.Link}>Shop <BsFillCartFill /></Link> 
            </Nav.Link>
            <Nav.Link href="#action2">
              {" "}
              Favorite <FaHeart />
            </Nav.Link>
            <Nav.Link href="#action2">
              Login <FaUserAlt />
            </Nav.Link>
          </Nav>
          <Searchbar setCurrentPage={setCurrentPage}></Searchbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
