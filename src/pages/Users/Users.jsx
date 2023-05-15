import React from 'react';
import { useLoaderData } from 'react-router-dom';
import style from './style';

const Users = () => {
    const users = useLoaderData();
    const username = window.localStorage.getItem('username');

    return <div>
        <style.Header>
            {`welcome ${username}`}
        </style.Header>
        {users.map(user => <div key={user.username}>{user.username}</div>)}
    </div>;
}

export const usersLoader = async (token) => {
    const response = await fetch(`${"http://localhost:3000"}/user`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    return await response.json();
}

export default Users;