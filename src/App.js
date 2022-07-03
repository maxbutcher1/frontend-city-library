import  Container  from "@mui/material/Container";
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header";

import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
function App() {
  return (
    <>
    <Header/>
    <Container maxWidth="lg">
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
