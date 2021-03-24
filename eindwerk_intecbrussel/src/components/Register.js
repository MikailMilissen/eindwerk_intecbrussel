import React, {useRef} from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap'
import './style/Register.css'
import "bootstrap/dist/css/bootstrap.min.css"
import  { useAuth }  from './contexts/AuthContext'

function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { register } = useAuth()

    function handeSubmit(e) {
        e.preventDefault()

        if(passwordRef !==
            passwordConfirmRef.current.value){
                return console.log('error')
            }

        register(emailRef.current.value, passwordRef.current.value)
    }

    return (
        
        <div>
            {/* First Container to min height the Card */}
            <Container 
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh"}}>
            {/* Second container to max width and make it center */}
            <div 
            className="w-100"
            style={{ maxWidth:"400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password_confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="email" ref={passwordConfirmRef} required />
                        </Form.Group>
                    </Form>
                    <Button className="w-100" type="submit">Sign Up</Button>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? login
            </div>
            </div>
            </Container>
        </div>
    )
}

export default Register
