import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";

const NavigationBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  useEffect(() => {
    // if (loading) {
    //   <Loading></Loading>;
    // }
    if (user) {
      setName(user?.displayName);
    }
  }, [user, loading]);
  return (
    <div className="sticky-top">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {user?.displayName ? `${name}` : "User"}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/inventory">
              ManageInventory
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/addItem">
                  Add Items
                </Nav.Link>
                <Nav.Link as={Link} to="/myItem">
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
