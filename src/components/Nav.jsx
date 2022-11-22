import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogOutImg from "./assets/logout.png";

const MainDiv = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  box-shadow: 0 4px 4px 2px gray;
  border-radius: 10px;
`;
const Logo = styled.h1``;
const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const Credits = styled.p`
  margin-left: 30px;
  display: block;
  align-items: center;
  @media (max-width: 850px) {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;
const UserDiv = styled.div`
  display: flex;
  align-items: center;
`;
const User = styled.p`
  margin-left: 20px;
`;
const Logout = styled.img`
  max-width: 20px;
  max-height: 20px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
`;

export const Nav = () => {
  const navigate = useNavigate();
  const handelLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <MainDiv>
      <Left>
        <Logo>.MERN NotesFTW</Logo>
        <Credits>
          Made with 🖤 by{" "}
          <Link href="https://github.com/githmin">Githmin Jayawardhana</Link>
        </Credits>
      </Left>
      <UserDiv>
        <User>Hello Alex!</User>
        <Logout src={LogOutImg} onClick={handelLogOut} />
      </UserDiv>
    </MainDiv>
  );
};
