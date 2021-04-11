
import './style/Login.css'
import React, { useRef, useState } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            return setError('Welcome Back')
            history.push("/")
        } catch {
            setError("Failed to log in")
          }
          setLoading(false)
        }
        
return (
<div>
{/* First Container to min height the Card */}
    <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>

{/* Second container to max width and make it center */}

    <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
            <Card.Body className="card_body">
                <h2 className="signup">LOG IN</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="formcontrol" type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="formcontrol" type="password" ref={passwordRef} required />
                    </Form.Group>
                    
                    <Button disabled={loading} className="button" type="submit">Log in</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">Need an account? <Link to="/register">Register</Link></div>
    </div>
    </Container>
</div>
  );
}

