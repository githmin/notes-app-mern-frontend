import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Nav } from "./Nav";
import { useRef } from "react";

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

const InputContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  min-width: 70vw;
  max-width: 70vw;
  align-items: center;
`;
const NewInput = styled.textarea`
  width: 100%;
  min-width: 400px;
  min-height: 60px;
  height: 100%;
  border-radius: 6px;
  box-shadow: 2px 2px 8px rgba(black, 0.3);
`;
const SubmitNewNote = styled.button`
  /* height: 20px; */
  /* width: 40px; */
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
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
  }, []);

  const [noteData, setNoteData] = useState("");

  const handelNewNote = async () => {
    const token = await localStorage.getItem("token");
    await axios
      .post(
        "/api/note",
        { note: noteData },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        fetchNotes();
        setNoteData("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Nav />
      <Mcontainer>
        <InputContainer>
          <NewInput
            value={noteData}
            onChange={(e) => setNoteData(e.target.value)}
          />
          <SubmitNewNote onClick={handelNewNote}>Add</SubmitNewNote>
        </InputContainer>
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
