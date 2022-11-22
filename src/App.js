import { Routes, Route, useNavigate } from "react-router-dom";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
function App() {
  const auth = localStorage.getItem("token");
  const navigate = useNavigate()
  return (
    <div>
      {/* {auth ? <Dashboard /> : <Signin />} */}

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Register />} />
        {/* { auth ? <Route path="/dashboard" element={<Dashboard />} /> : navigate('/') } */} */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
           {/* <Route path="/dashboard" element={<PrivateRoute />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
