import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
