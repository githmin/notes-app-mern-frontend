import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Nav } from "./Nav";

const Mcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Paper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
  min-width: 40vw;
  max-width: 70vw;
  margin: 5px;
`;

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const token = await localStorage.getItem("token");
    await axios
      .get("/api/note", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setNotes(res.data);
        console.log(notes);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchNotes();
  }, notes.length);

  return (
    <div>
      <Nav />

      <Mcontainer>
        <NoteContainer>
          {notes.map((notes) => (
            <Paper>{notes.note}</Paper>
          ))}
        </NoteContainer>
      </Mcontainer>
    </div>
  );
};

export default Dashboard;
