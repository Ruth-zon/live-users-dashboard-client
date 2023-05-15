import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
import useCookie from "../../utils/useCookie";
import style from "./style";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [token, setToken] = useCookie("access_token");
  const username = window.localStorage.getItem("username");

  const getUsers = async (token) => {
    console.log("token", token);
    let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getItem("access_token"),
      },
    });
    response = await response.json();
    setUsers(response);
  };

  useEffect(() => {
    setInterval(() => {
      getUsers();
    }, config.REACT_APP_REFRESH_SEC * 1000);
    getUsers();
  }, []);

  const logout = async (e) => {
    e.preventDefault();
    let response = await fetch(`${config.REACT_APP_BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    response = await response.json();
    if (response.statusCode === 200) {
      setToken(undefined);
      navigate("/login");
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
      <style.Table>
        {users.length ? (
          <tr>
            {Object.keys(users[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        ) : null}
        {users.length
          ? users.map((user) => (
              <tr key={user.username}>
                {Object.keys(users[0]).map((key) => (
                  <td key={key}>{user[key]}</td>
                ))}
              </tr>
            ))
          : null}
      </style.Table>
    </div>
  );
};
const getItem = (key) =>
  document.cookie.split("; ").reduce((total, currentCookie) => {
    const item = currentCookie.split("=");
    const storedKey = item[0];
    const storedValue = item[1];
    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, "");

export default Users;
