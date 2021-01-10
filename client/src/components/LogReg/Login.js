import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = () => {

    let history = useHistory();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/news/user/login', {
                email: user.email,
                password: user.password
            })
            localStorage.setItem('userToken', res.data)
            setUser({ email: '', password: '' })
            history.push("/");
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    return (
        <div>
            <Header />
            <div className="mx-auto w-50 my-5 shadow p-3">
                <h6 className="text-center mb-3 text-secondary">Only admin can be access Admin Dashboard</h6>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={e => setUser({ ...user, email: e.target.value })} value={user.email} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={e => setUser({ ...user, password: e.target.value })} value={user.password} placeholder="Password" />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button className="btn-brand" type="submit">
                            Submit
                                 </Button>
                        <Link to="/register">Register</Link>
                    </div>
                </Form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;