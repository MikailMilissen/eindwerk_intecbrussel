import React, { useRef, useState } from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import "./style/Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "./contexts/AuthContext";
import {Link, useHistory} from 'react-router-dom'

export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { register } = useAuth()
    const [error, setError] = useState("")
    const [succes, setSucces] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
      if (passwordRef.current.value.length < 6) {
          return setError("Password is too short")
      }
  
      try {
        setError("")
        setLoading(true)
        await register(emailRef.current.value, passwordRef.current.value)
        return setSucces('Thank you for registering')
        history.push('/login')

      } catch {
        setError("Failed to create an account")
      }
  
      setLoading(false)
    }

  return (
    <div>
      {/* First Container to min height the Card */}
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Second container to max width and make it center */}
        
        <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
        <Card.Body className="card_body">
          <h2 className="signup">SIGN UP</h2>
          {succes && <Alert variant="succes">{succes}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="">Email</Form.Label>
              <Form.Control className="formcontrol" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control className="formcontrol" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control className="formcontrol" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="button" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

