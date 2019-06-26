import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login(){
    return (
        <div className="formContainer">
            <h4><strong>SIGN IN TO YOUR ACCOUNT</strong></h4>
            <br/>
            <Form>
                <Form.Group controlId="loginEmail">
                <Form.Control type="email" placeholder="email@example.com" />
                </Form.Group>

                <Form.Group controlId="loginPassword">
                <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>

                {['checkbox'].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check className="leftCheck" inline label="Keep me signed in" type={type} id={`inline-${type}-1`} />
                </div>
                 ))}
                 <br/>
                 <Button variant="primary" size="lg" block>
                     SIGN IN
                 </Button>
                <span>Forgot your password?</span>
            </Form>    
        </div>
    )
}
export default Login;