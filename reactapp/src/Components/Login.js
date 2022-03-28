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
            <Col lg={4} md={6} sm={12} className="text-center mt-3 p-3" >
                    <img className='icon-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcCrbwmvtbL4-QeM1J9O1relmRYy-XyK3xmDLI4UEd-jdcfRQXQHZTnHsu-1w8JykYIw&usqp=CAU" alt="icon"/>
                <Form className="mt-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button style={{width:"210px"}} variant="primary btn-block" type="submit">Login </Button>
                <div className="text-left mt-4">
                           <a href="#"><small className="reset"> Forget Password    | |  <Link to="signin" style={{color:"red"}}> New user ? click here </Link></small > </a> 
                            <h6>                </h6>
                             <div className='text-center mt-3'>
                                 
                            <Link to ="adminlogin">
                                    <h6 style={{color:"orange",textTransform:"capitalized"}} >If you are Admin click here</h6>
                            </Link>
                           
                             </div>
                            </div>
                        
                 </Form>
             </Col>
            <Col lg={6} md={6} sm={8}>
             <img className=" w-100" src="https://graphicriver.img.customer.envatousercontent.com/files/288510516/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=ebd5f53c71f9952b3ce86d769f9da293" alt=""/>
            </Col>
                 </Row>
            
        </Container>
       
        </div>
    );
};

export default Login;