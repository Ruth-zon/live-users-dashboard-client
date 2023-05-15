import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/modal";
import config from "../../config";
import useCookie from "../../utils/useCookie";
import style from "./style";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState();
  const navigate = useNavigate();
  const [token, setToken] = useCookie("access_token");
  const username = window.localStorage.getItem("username");

  const getUsers = async (token) => {
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

  const openModal = async (username) => {
    let response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/user/${username}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getItem("access_token"),
        },
      }
    );
    response = await response.json();
    setShowModal(response);
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
              <tr key={user.username} onClick={() => openModal(user.username)}>
                {Object.keys(users[0]).map((key) => (
                  <td key={key}>{user[key]}</td>
                ))}
              </tr>
            ))
          : null}
      </style.Table>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        {showModal ? (
          <div>
            <h1>{showModal.username}</h1>
            <h6>{"user agent " + showModal.userAgent}</h6>
            <h6>{"register time " + showModal.createdAt.toString()}</h6>
            <h6>{"logins count " + showModal.loginsCount}</h6>
          </div>
        ) : null}
      </Modal>
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
