import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import style from './style';

const Login = (props) => {
    const { type } = props;
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = type === 'register' ? 'user/register' : 'auth/login';
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        fetch(`${"http://localhost:3000"}/${url}`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(response => {
                if (type === 'register')
                    navigate('/login');
                else {
                    document.cookie = "access_token="+response.access_token;
                    navigate('/users');
                };
            }).catch(err => console.error(err))
    }
    return (<style.Form onSubmit={handleSubmit}>
        <style.Title>{"Welcome :)"}</style.Title>
        <style.Label>
            {"User name:"}
        </style.Label>
        <style.Input name="username" />
        <style.Label>
            {"Password:"}
        </style.Label>
        <style.Input name="password" type="password" />
        <style.Submit>{type === "Register" || "login"}</style.Submit>
        <style.LoginLink to={type === 'register' ? '/login' : '/register'} replace>{`switch to ${type === 'register' ? 'login' : 'register'}`}</style.LoginLink>
    </style.Form>);
}

export default Login;