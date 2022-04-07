import React from 'react';
import {Form,Col,Row,Container,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";


class AdminSignup extends React.Component
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
                err=<strong style={{color:"yellow"}}>Invalid value,Enter the number</strong>
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
                <h2 className="mt-2" style={{textAlign:"center",color:"orange"}}> ADMIN SIGNUP </h2>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={4} md={6} sm={8}>

                            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText-">
                <Form.Control type="text" placeholder="User Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText1">
                <Form.Control type="text" onChange={this.uservalue}   placeholder="Enter Your Mobile Number" name="pno"/>{this.state.errmsg}
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword@">
                <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword#">
                <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I Agree All The Terms And Condition" />
                 </Form.Group>

                <Button className="text-center" variant="primary btn-block" type="submit">SIGNUP</Button>
                <p className="text-center" style={{color:"orange"}} >
                    <br/> Already have an Account ?
                    <Link to="adminlogin"> 
                    <small style={{color:"red"}}>  click here</small>
               </Link>
               </p>
                </Form>
                </Col>
                <img style={{width:"350px",height:"400px"}} src="https://media.istockphoto.com/vectors/teenage-girl-in-comfy-clothes-listening-to-music-semi-flat-color-vector-id1385317969?b=1&k=20&m=1385317969&s=612x612&w=0&h=-AmG8Lod4PC1YbcQ0xed6s2VxXC5hh-rEpted28sYzU=" className="rounded mx-auto d-block" alt="..."/>
                </Row>
                    </Container>
                </>
        </div>
    )
    }
}

export default AdminSignup;