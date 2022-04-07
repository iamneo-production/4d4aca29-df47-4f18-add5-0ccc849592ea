import React from 'react';
import {Form,Col,Row,Container,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

import './index.css';

class Signup extends React.Component
{
    constructor(){
    super();
    this.state ={username:"",
                    pno:null,
                      errmsg:""};
    }
    uservalue =(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n==="pno")
        {
            if(v!=="" && !Number(v))
            {
                err=<strong style={{color:"orange"}}>Invalid value,Enter the number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    render()
    {
    return (
        <div>
                <>
                <h1 className="mt-3" style={{textAlign:"center",color:"orange"}}>SIGN UP </h1>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={4} md={6} sm={12}>

                            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail@">
                <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText_">
                <Form.Control type="text" placeholder="UserName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText0">
                <Form.Control type="text" onChange={this.uservalue}   placeholder="Enter Mobile Number" name="pno"/>{this.state.errmsg}
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I Agree All The Terms And Condition" />
                 </Form.Group>

                 <Button variant="primary btn-block" type="submit">SIGNUP</Button>
                <p className="text-center"  style={{color:"orange"}}>
                    <br/> Already have an Account ?
                    <Link to="login">
                    <small style={{color:"red"}}>   click here</small>
               </Link>
               </p>
                </Form>
                </Col>
                <><img style={{width:"450px",height:"400px"}} src="https://img.freepik.com/free-vector/young-girl-woman-headphones-sits-floor-listening-music-vector-illustration-flat-cartoon-style-isolated-white-background_351831-51.jpg" className="rounded mx-auto d-block" alt=" Sample"/>
            </>
                </Row>
                    </Container>
                </>
        </div>
    )
    }
}
export default Signup;