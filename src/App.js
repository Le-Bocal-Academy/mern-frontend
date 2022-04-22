import { useEffect, useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import FruitsList from "./views/FruitsList";
import { CreateFruit } from "./views/CreateFruit";
import { Landing } from "./views/Landing";
import { NavBar } from "./components/Navbar";
import LoginPage from "./views/Auth/Login";
import SignupPage from "./views/Auth/Signup";

function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const hasJwt = localStorage.getItem("jwt"); // EzbBlablablalba
    setConnected(Boolean(hasJwt)); // on convertit en booléen
  }, []);

  return (
    <div className="App">
      {connected && <h1>Connected</h1>}
      <header className="App-header">
        <NavBar connected={connected} setConnected={setConnected} />
        <Routes>
          <Route path="/" element={<Landing connected={connected} />} />
          <Route
            path="/fruits"
            element={<FruitsList connected={connected} />}
          />
          <Route
            path="/fruits/create"
            element={<CreateFruit connected={connected} />}
          />
          <Route
            path="/login"
            element={
              <LoginPage connected={connected} setConnected={setConnected} />
            }
          />
          <Route
            path="/signup"
            element={<SignupPage connected={connected} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
