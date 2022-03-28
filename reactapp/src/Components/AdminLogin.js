import React from 'react';
import {Form,Col,Row,Container,Button} from 'react-bootstrap';

import {Link} from "react-router-dom";

import './index.css';

const AdminLogin = ()=>{
    return(
    <div>
        <h1 className="mt-5" style={{textAlign:"center",color:"orange"}}>LOGIN </h1>
        <Container className="mt-5">
            <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-3 p-3" >
                    <img className='icon-img' src="data:image/png;base64,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" alt="icon"/>
                <Form>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button style={{width:"210px"}} variant="primary btn-block" type="submit">Login </Button>
                <div className="text-left mt-4">
                           <a href="#"><small className="reset"> Forget Password    | |  <Link to="signin" style={{color:"red"}}> New user ? click here </Link></small > </a> 
                            </div>
                        
                 </Form>
             </Col>
            <Col lg={4} md={6} sm={6}>
            <img className=" w-100"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsLLMNSFHs4yaSXy4N2qsbXdZTbqZ7co0qA&usqp=CAU" alt=""/>
            </Col> 
                 </Row>
            
        </Container>
       
        </div>
    );
};

export default AdminLogin;