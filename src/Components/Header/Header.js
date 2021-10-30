import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <>
      <Navbar expand="lg" variant="light" className="background">
        <Container>
          <Navbar.Brand className="text-white fw-bold" href="#home">

            Trip <span className="text-white fw-bold">Agencies</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto py-2" >
              <Nav.Link className="text-white fw-bold me-2 px-3" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white fw-bold me-2" as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="text-white fw-bold me-2" as={Link} to="/aboutUs">
                About Us
              </Nav.Link>
              <Nav.Link className="text-white  fw-bold me-2" as={Link} to="/contactUs">
                Contact Us
              </Nav.Link>

              {
                user?.email ? (
                  <>
                  
                  {/*
                    <Nav.Link className="text-white fw-bold me-2" as={Link} to="/manageOrder">
                      Manage Order
                    </Nav.Link>
                    <Nav.Link className="text-white fw-bold me-2" as={Link} to="/myOrders">
                      My Orders
                    </Nav.Link>
                    <Nav.Link className="text-white fw-bold me-2" as={Link} to="/addService">
                      Add New Service
                    </Nav.Link>
                  */}
                   <Nav.Link className="text-white fw-bold me-2" as={Link} to="/admin">
                      Admin
                    </Nav.Link>
                    <p className="mb-0 mt-2 ms-3 fw-bold text-white">
                          {user.displayName}
                    </p>
                    <Nav.Link as={Link} to="/login">
                      <button onClick={handleLogOut} className="btn btn-danger fw-bold " >
                        Log Out
                      </button>
                    </Nav.Link>
                  </>)
                  :
                  (<Nav.Link className="btn  text-white fw-bold" as={Link} to="/login">
                    log In
                  </Nav.Link>)
              }






            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;