import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
