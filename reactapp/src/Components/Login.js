import React from 'react';
import {Form,Col,Row,Container,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './index.css';

const Login = ()=>{
    return(
    <div>
        <h1 className="mt-5" style={{textAlign:"center",color:"orange"}}>LOGIN </h1>
        <Container className="mt-5">
            <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3" >
                   
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button style={{width:"210px"}} variant="primary btn-block" type="submit">Login </Button>
                <div className="text-left mt-4">
                                <a href="#"><small className="reset"> Forget Password</small></a> 
                            < div className="text-center mt-3">
                            <Link to="signup">
                                 <h6 className='font'> New user ? click here </h6>
                             </Link>
                             </div>
                            </div>
                        
                 </Form>
             </Col>
            <Col lg={6} md={6} sm={8}>
            </Col>
                 </Row>
            
        </Container>
       
        </div>
    );
};

export default Login;