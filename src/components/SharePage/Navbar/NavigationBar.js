import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const NavigationBar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user?.displayName);
  return (
    <div className="sticky-top">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {user ? `${user.displayName}` : "User"}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/inventory">
              Inventory
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/manageItem">
                  Manage Items
                </Nav.Link>
                <Nav.Link as={Link} to="/manageItem">
                  Add Items
                </Nav.Link>
                <Nav.Link as={Link} to="/manageItem">
                  My Items
                </Nav.Link>
              </>
            )}
            <Nav.Link>
              {user ? (
                <span onClick={() => signOut(auth)}>logout</span>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
          </Nav>
          <p>{user && "logout"}</p>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
