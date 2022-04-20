import "./App.css";

import { Route, Routes } from "react-router-dom";
import UsersList from "./views/UsersList";
import { CreateUser } from "./views/CreateUser";
import { Landing } from "./views/Landing";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/create" element={<CreateUser />} />
        </Routes>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
