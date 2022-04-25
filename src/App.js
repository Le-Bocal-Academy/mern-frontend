import "./App.css";

import { Route, Routes } from "react-router-dom";
import FruitsList from "./views/FruitsList";
import { CreateFruit } from "./views/CreateFruit";
import { Landing } from "./views/Landing";
import { NavBar } from "./components/Navbar";
import LoginPage from "./views/Auth/Login";
import SignupPage from "./views/Auth/Signup";
import { useAuth } from "./AuthProvider";

function App() {
  const { connected } = useAuth();

  return (
    <div className="App">
      {connected && <h1>Connected</h1>}
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/fruits" element={<FruitsList />} />
          {connected && (
            <Route path="/fruits/create" element={<CreateFruit />} />
          )}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
