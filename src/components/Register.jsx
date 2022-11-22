import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Mcontainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");
  font-family: "Mukta", sans-serif;

  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  padding-bottom: 1rem;
  font-size: 30px;
`;
const Paper = styled.div`
  gap: 1rem;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const Username = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;

  :focus {
    outline: none;
  }
`;
const Password = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;

  :focus {
    outline: none;
  }
`;
const Submit = styled.button`
  width: 180px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  background: transparent;
  border: 1px solid black;
  outline: none;
  transition: 0.5s ease-in-out;

  :hover {
    color: white;
    border: 1px solid black;
    transition: 0.5s ease-in-out;
    background: black;
  }
`;

const SigninDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const Signin = styled.button`
  width: 180px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  background: transparent;
  border: 1px solid black;
  outline: none;
  transition: 0.5s ease-in-out;

  :hover {
    color: white;
    border: 1px solid black;
    transition: 0.5s ease-in-out;
    background: black;
  }
`;
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [status, setStatus] = useState([]);

  const handelRegister = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_API }/api/register`, { username, password })
      .then((res) => {
        setStatus("Sign up successfull ! Redirecting to login in 5 seconds!");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("hi");
  };

  return (
    <Mcontainer>
      <Header>Sign Up</Header>
      <Paper>
        <Form>
          <Username
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Password
            type="password"
            placeholder="Your super secret password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div>{status}</div>
          <Submit onClick={handelRegister}>Register!</Submit>
        </Form>
        <SigninDiv>
          <Link to="/">
            <Signin>Alread a user? Sign in here</Signin>
          </Link>
        </SigninDiv>
      </Paper>
    </Mcontainer>
  );
};

export default Register;
