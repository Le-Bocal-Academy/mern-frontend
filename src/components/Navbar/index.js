import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export function NavBar({ connected, setConnected }) {
  const navigate = useNavigate();

  function disconnect() {
    navigate("/");
    setConnected(false);
    localStorage.removeItem("jwt");
  }

  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      {connected === true && <Link to="/fruits">Fruits</Link>}
      {connected === true && <Link to="/fruits/create">Créer un fruit</Link>}
      {connected === true && <a onClick={disconnect}>Se déconnecter</a>}
      {connected === false && <Link to="/login">Se connecter</Link>}
      {connected === false && <Link to="/signup">S'inscrire</Link>}
    </nav>
  );
}
