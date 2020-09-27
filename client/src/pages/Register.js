import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'

export default function Login(){
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}