import Home from "./components/Home";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import LeaderBoard from "./components/LeaderBoard";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/leaderBoard" element={<LeaderBoard />} />
          </Routes>
        </BrowserRouter>{" "}
      </UserProvider>
    </>
  );
}

export default App;
