import React from "react";
import styled from "styled-components";

const Mcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
  min-width: 50vh;
`;

const Dashboard = () => {
  return (
    <Mcontainer>
      <Paper>Hi</Paper>
    </Mcontainer>
  );
};

export default Dashboard;
