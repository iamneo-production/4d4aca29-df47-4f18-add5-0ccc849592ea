import React from 'react';
import {Form,Col,Row,Container,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './index.css';

const Login = ()=>{
    return(
    <div>
        <h1 className="mt-3" style={{textAlign:"center",color:"orange"}}>LOGIN </h1>
        <Container className="mt-5">
            <Row>
            <Col lg={4} md={6} sm={12} className="text-center mt-3 p-3" >
                    <img className='icon-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcCrbwmvtbL4-QeM1J9O1relmRYy-XyK3xmDLI4UEd-jdcfRQXQHZTnHsu-1w8JykYIw&usqp=CAU" alt="icon"/>
                <Form className="mt-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                
                    <Button style={{width:"210px"}} variant="primary btn-block" type="submit">Login </Button>
                         <div className="text-left mt-3">
                            <a href="http://localhost:1039/Members/UserProfile.aspx?ID=56f74cc7-7680-4f1b-9207-0ab8dad63cad"   className="reset">  <small>Forget Password</small>   </a>   | | New user ?  <Link to="signup" style={{color:"red"}}> <small> click here  </small> </Link>  
                         <div className='text-center mt-3' style={{color:"orange"}}>
                         If you are Admin ?
                    <Link to ="adminsignup" className="text-center ">
                         <small style={{color:"Red"}} >   click here</small>
                    </Link>
                         </div>
                        </div>
                        
                     </Form>
                     </Col>
                     <>
                     <img style={{width:"400px",height:"400px"}} src="https://media.istockphoto.com/vectors/young-stylish-long-haired-african-girl-listening-to-music-in-dancing-vector-id1190811071?k=20&m=1190811071&s=170667a&w=0&h=abTqtNpYjX8iS5DttotayxezSuWUmXUIvXIhP1O7s4o=" className="rounded mx-auto d-block" alt=" Sample"/>
                    </>
                 </Row>
        </Container>
        </div>
    );
};
export default Login;