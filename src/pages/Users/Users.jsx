import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useCookie from "../../utils/useCookie";
import style from "./style";

const Users = () => {
  const users = useLoaderData();
  const navigate = useNavigate();
  const [token, setToken] = useCookie("access_token");
  const username = window.localStorage.getItem("username");

  const logout = async e => {
    e.preventDefault();
    let response = await fetch(`${"http://localhost:3000"}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    response = await response.json();
    if (response.statusCode === 200) {
      setToken(undefined);
      navigate('/login');
    }
  };
  return (
    <div>
      <style.Header>
        {`welcome ${username}`}
        <Link to="/login" title="logout" onClick={logout}>
          {"logout"}
        </Link>
      </style.Header>
      {users.length ? users.map((user) => (
        <div key={user.username}>{user.username}</div>
      )) : null}
    </div>
  );
};

export const usersLoader = async (token) => {
  const response = await fetch(`${"http://localhost:3000"}/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return await response.json();
};

export default Users;
