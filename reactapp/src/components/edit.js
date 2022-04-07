import React from "react";
import _n from './navbar2';
import '../App.css';
import Vo from'../img/view_order.png';
import { Box } from "@material-ui/core";
import {Form,Button, Container} from 'react-bootstrap';
function edit(){ 
return <div>
<_n></_n>
<Container>
<div class="row" style={{marginTop:"50px",marginLeft: "100px"}}>
<div class="col-md-6">
<img src={Vo} class="img responsive"/></div>
<div class="col-md-6">
  <div class="margin">
<Box color="#fffffa" bgcolor="#ffcc00" p={2}><div style={{textAlign:"center"}}>EDIT PRODUCT</div></Box>
<div style={{marginTop:"20px"}}><Form id="addinstrumentBody">
  <Form.Group className="mb-3" controlId="instrumentName">
    <Form.Control type="text" placeholder="Product Name"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="instrumentPrice">
    <Form.Control type="text" placeholder="Product Price"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="instrumentDescription">
    <Form.Control as="textarea" placeholder="Product Description"rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="instrumentImageURL">
    <Form.Control type="text" placeholder="Image URL" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="instrumentQuantity" >
    <Form.Control type="text" placeholder="Product Quantity" />
  </Form.Group>
  <Button variant="warning" type="submit" id="addinstrumentButton" style={{color:"white"}}>
    EDIT
  </Button>
</Form>
</div>
</div>
</div>
</div>
</Container>
</div>
}
export default edit

