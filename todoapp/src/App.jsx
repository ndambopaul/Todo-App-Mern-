import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos"
import Navbar from "./components/Navbar";
import Authenticate from "./auth/Authenticate"
import Home from "./Home";

import ProtectedRouter from "./ProtectedRouter";

import { UserContext } from "./context/AuthContext";


function App() {
  const { token, setToken } = useContext(UserContext);
  console.log(token)

  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authenticate" element={<Authenticate />} />

        <Route element={<ProtectedRouter />}>
          <Route path="/todos" element={<Todos />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
