import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios, * as others from "axios";

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

const RegisterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const Reg = styled.button`
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
const Signin = () => {

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token")
      ? navigate("/dashboard")
      : console.log("Not logged in");
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState("");

  const handelLogin = async (e) => {

    e.preventDefault();
    const data = { username: username, password: password };
    await axios
      .post(`${process.env.REACT_APP_API }/api/login`, data)
      .then((res) => {
        let token = res.data.token;
         localStorage.setItem("token", token);
        navigate("/dashboard");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Mcontainer>
      <Header>Sign in</Header>
      <Paper>
        <Form>
          <Username
            placeholder="Username"
            name="username"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Password
            placeholder="Your super secret password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <div>{incorrect}</div>
          <Submit onClick={handelLogin}>Login</Submit>
        </Form>
        <RegisterDiv>
          <Link to="/signup">
            <Reg>Not Signed up? Register here</Reg>
          </Link>
        </RegisterDiv>
      </Paper>
    </Mcontainer>
  );
};

export default Signin;
