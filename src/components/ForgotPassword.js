import React, {useRef, useState } from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'


function ForgotPassword() {
    const emailRef = useRef()
    const { forgotPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handlSubmit(e){
        e.preventDefault()

        try {
            setMessage("")
            setError('')
            setLoading(true)
            await forgotPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch (error) {
            console.log(error);
            setError('Failed to Reset Password')
        }

        setLoading(false)
    }
    return (
        <>
           <Card>
               <Card.Body>
                   <h2 className="text-center mb-4">Password Reset</h2>
                   {error && <Alert variant="danger">{error}</Alert>}
                   {message && <Alert variant="success">{message}</Alert>}
                   <Form onSubmit={handlSubmit}>
                       <Form.Group id="email">
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="email" ref={emailRef} required/>
                       </Form.Group>
                       <Button disabled={loading} className="w-100 mt-2" type="submit">Reset Passwaord</Button>
                       <div className="w-100 text-center mt-3">
                            <Link to="/login">Login</Link>
                        </div>
                   </Form>
               </Card.Body>
           </Card> 
           <div className="w-100 text-center mt-2">
                Create an account? <Link to="/signup">Sign up</Link>
           </div>
        </>
    )
}

export default ForgotPassword
