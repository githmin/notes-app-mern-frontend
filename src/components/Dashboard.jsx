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
  min-width: 40vw;
  max-width: 70vw;
`;

const Dashboard = () => {
  return (
    <Mcontainer>
      <Paper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel
        dolore pariatur minus quidem eaque repellendus sequi, temporibus facere
        asperiores culpa dolor qui modi libero, eius laudantium porro est
        soluta.
      </Paper>
    </Mcontainer>
  );
};

export default Dashboard;
