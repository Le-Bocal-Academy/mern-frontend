import { Link } from "react-router-dom";
import "./Navbar.css";

export function NavBar({ connected, setConnected }) {
  function disconnect() {
    setConnected(false);
    localStorage.removeItem("connected");
  }

  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/fruits">Fruits</Link>
      {connected === true && <Link to="/fruits/create">Créer un fruit</Link>}
      {connected === true && <a onClick={disconnect}>Se déconnecter</a>}
      {connected === false && <Link to="/login">Se connecter</Link>}
      {connected === false && <Link to="/signup">S'inscrire</Link>}
    </nav>
  );
}
