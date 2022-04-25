import { Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import "./Navbar.css";

export function NavBar() {
  const { connected, disconnect } = useAuth();

  return (
    <nav className="navbar">
      <NavElementConnected> </NavElementConnected>
      <Link to="/">Accueil</Link>
      {connected === true && <Link to="/fruits">Fruits</Link>}
      {connected === true && <Link to="/fruits/create">Créer un fruit</Link>}
      {connected === true && <a onClick={disconnect}>Se déconnecter</a>}
      {connected === false && <Link to="/login">Se connecter</Link>}
      {connected === false && <Link to="/signup">S'inscrire</Link>}
    </nav>
  );
}

function SubNavElementConnected() {
  const { connected } = useAuth();
  return <h2>{connected ? ":)" : ":("}</h2>;
}

function NavElementConnected() {
  const { connected } = useAuth();

  return (
    <div>
      ({connected ? "connecté" : "pas connecté"})
      <SubNavElementConnected />
    </div>
  );
}
