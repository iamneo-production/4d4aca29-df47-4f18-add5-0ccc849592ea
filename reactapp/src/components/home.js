import React from 'react';
import './home.css';
import Products from './Products';
import useStyles from './styles';
import {Navbar,Nav,Container} from "react-bootstrap";
import {BiLogOut}  from "react-icons/bi";
import {MdProductionQuantityLimits} from 'react-icons/md'
import { Link} from 'react-router-dom';


export default function Home() {
  const classes = useStyles();
  return (
    <div>
    <Navbar bg="warning"   expand="lg" variant="dark" >
        <Container fluid>
    <Navbar.Brand href="#home">Instrument Delight</Navbar.Brand>
    &nbsp;&nbsp;
    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <MdProductionQuantityLimits size={35}/>
        <Nav.Link as={Link} to="/">products</Nav.Link>&nbsp;&nbsp;
       <> <img src="https://img.icons8.com/ios-filled/50/000000/edit-online-order.png" alt="" width={30} height={30}/></>
        <Nav.Link as={Link} to={"/"}>Orders</Nav.Link>&nbsp;&nbsp;
        <div style={{marginLeft:'700px'}}></div>
    <BiLogOut size={35}/>
      <Nav.Link as={Link} to="/">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
   
    </Container >
    </Navbar>
    
       <div className="Home"> 
         <h1>WELCOME HOME</h1> 
       </div>
        <div className={ classes.style }><Products/></div>
    </div>
  )
}
