import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layoute = () => {
  return (
    <>
      <Navbar bg="success"  expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand ><Link to={"/"} className="text-decoration-none text-white px-3">Al-Quran</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} className="text-decoration-none text-white px-3">Home</Link>
              <Link to={"/Tafsir"} className="text-decoration-none text-white px-3">Tafsir</Link>
              <Link to={"/Ayat"} className="text-decoration-none text-white px-3">Ayat</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Outlet />

    </>

  );
}

export default Layoute;
