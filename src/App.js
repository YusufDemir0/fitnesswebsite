import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";

import Login from "./components/Login";

import Program from "./components/Program";
import { Footer } from "./components/Footer";
import { Liste } from "./components/Liste";
import Register from "./components/Register";
import Video from "./components/Video";

import  Navbar  from "./components/Navbar";
import ChatApp from "./components/ChatApp";
import { createAdmin } from "./firebase/FirebaseProces";
import useGoHomeOnChange from "./components/usegoHome";
import UserScreen from "./components/UserScreen";
import AdminPanel from "./components/AdminPanel";
import AntScreen from "./components/AntScreen";


function App() {
  useGoHomeOnChange();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/ChatApp" exact element={<ChatApp />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/ant" exact element={<Liste />} />
        <Route path="/antsc" exact element={<AntScreen />} />
        <Route path="/video" exact element={<Video />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/program" exact element={<Program />} />
        <Route path="/user" exact element={<UserScreen />} />
        <Route path="/adminsc" exact element={<AdminPanel />} />
      </Routes>
      <Footer />
    </>
  );
}
createAdmin();
export {App};
