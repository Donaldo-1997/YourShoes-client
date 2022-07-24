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
import Button from 'react-bootstrap/Button';



export default function NavBar({setCurrentPage, handleReset}) {


  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container fluid>
        <button onClick={(e) => handleReset(e)} className={styles.resetButton}>
          <Navbar.Brand className={styles.yourShoes}>Your<span>Shoes</span></Navbar.Brand>
        </button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className={styles.icon}>
             <Link to='/cart' className={styles.Link}> <BsFillCartFill /></Link> 
            </Nav.Link>
            <Nav.Link  className={styles.icon}>
               <FaHeart />
            </Nav.Link>
            <Nav.Link  className={styles.icon}>
               <Link to='/login'><FaUserAlt  /></Link>
            </Nav.Link>
          </Nav>
          <Searchbar setCurrentPage={setCurrentPage}></Searchbar>
        </Navbar.Collapse>
        {/* <GoogleLogin
          clientId="321230858550-vrrr1cr5coemim48ourin60pumf2rh3f.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
      </Container>
    </Navbar>
  );
}
