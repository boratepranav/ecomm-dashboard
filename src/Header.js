import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

function Header(){
    return(
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav-bar-wrapper">
          <Link to="/add">Add Product</Link>
          <Link to='/update'>Update Product</Link>
          <Link to="/login">Login</Link>
          <Link to='/register'>Register</Link>
          
          </Nav>
        </Container>
      </Navbar>
  
      </div>
            )
}

export default Header