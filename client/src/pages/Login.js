import React, { useState, useEffect }  from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/actionUser";

export default function Login(){
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn)
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandle = e => {
        setEmail(e.target.value);
    };
    const passwordHandle = e => {
        setPassword(e.target.value);
    };

    const clientLogin = () => {
        let data = {
          email: email,
          password: password
        };
        dispatch(login(data));
        history.push("/");
    };

    useEffect(() => {
        if (isLoggedIn) {
          history.push(`/`);
        }
    }, [isLoggedIn]);
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={emailHandle} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={passwordHandle} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={clientLogin} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}