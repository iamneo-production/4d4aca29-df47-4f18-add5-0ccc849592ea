import React, {Component} from 'react';
import {Navbar,Nav,Container} from "react-bootstrap";
import {BiLogOut}  from "react-icons/bi";
import {MdProductionQuantityLimits} from 'react-icons/md'
import {
  Link
} from 'react-router-dom';
class App extends Component{
  render(){
    return(
      <Navbar style={{backgroundColor:"orange"}}   expand="lg" variant="dark" >
        <Container fluid>
    <Navbar.Brand href="#home">Instrument Delight</Navbar.Brand>
    &nbsp;&nbsp;
    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <MdProductionQuantityLimits size={35}/>
        <Nav.Link as={Link} to="/orders">products</Nav.Link>&nbsp;&nbsp;
        <img src="https://img.icons8.com/ios-filled/50/000000/edit-online-order.png" width={30} height={30}/>
        <Nav.Link as={Link} to="/">Orders</Nav.Link>&nbsp;&nbsp;
        <div style={{marginLeft:'830px'}}></div>
    <BiLogOut size={35}/>
      <Nav.Link as={Link} to="/">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
   
    </Container >
    </Navbar>
    );
  }
}
export default App;
