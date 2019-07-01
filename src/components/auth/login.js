import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const axios = require('axios');


class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            loginSucess: false,
            loginFail: false,
            fullname:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleError() {
        console.log('THIS', this);
    }

     handleSubmit (event)  {
        event.preventDefault()
        axios.post('http://localhost:8888/login', this.state)
            .then(function (response) {
                const data = response.data
                if (data.status) {
                    this.setState({
                        loginSucess:true,
                        fullname:response.data.userDetail.fullname
                    })
                }

                else {
                    this.setState({
                        loginFail:true
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    handleChange(event) {
        const value = event.target.value
        const id = event.target.id
        this.state[id] = value
    }


    render() {
        return (
            <div className="formContainer">
                <h4><strong>SIGN IN TO YOUR ACCOUNT</strong></h4>
                <br />
                <Form onSubmit={this.handleSubmit
                }
                >
                    <Form.Group controlId="email">
                        <Form.Control type="email" onChange={this.handleChange} placeholder="email@example.com" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Control type="password" onChange={this.handleChange} placeholder="Enter Password" />
                    </Form.Group>

                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check className="leftCheck" inline label="Keep me signed in" type={type} id={`inline-${type}-1`} />
                        </div>
                    ))}
                    <br />
                    <Button type='submit' variant="primary" size="lg" block>
                        SIGN IN
                 </Button>
                    <span>Forgot your password?</span>
                </Form>

               { this.state.loginFail & (
                    <Alert variant='danger'>
                    <h4>
                        login failed check details
                    </h4>
                </Alert>
               ) }

                { this.state.loginSucess && (
                    <Alert variant='success'>
                    <h4> login in successfull  {this.state.fullname}</h4>
                     </Alert>
                ) }
            </div>
        )
    }


}
export default Login;