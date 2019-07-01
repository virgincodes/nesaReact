import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register(){
    return (
        <div className="formContainer">
            <h4><strong>CREATE AN ACCOUNT</strong></h4>
            <br/>
            <Form>
                <Form.Group controlId="registerFullname">
                <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group controlId="registerEmail">
                <Form.Control type="email" placeholder="Enter Email Address" />
                </Form.Group>

                <Form.Group controlId="registerPassword">
                <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>

                <Form.Group controlId="registerPassword2">
                <Form.Control type="password" placeholder="Re-Enter Password" />
                </Form.Group>

                {['checkbox'].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check className="leftCheck" inline label="Agree to terms and conditions" type={type} id={`inline-${type}-1`} />
                </div>
                 ))}
                 <br/>
                 <Button variant="primary" size="lg" block>
                     REGISTER
                 </Button>
                {/* <span>Forgot your password?</span> */}
            </Form>    
        </div>
    )
}
export default Register;