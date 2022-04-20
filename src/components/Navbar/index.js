import { Link } from "react-router-dom";
import "./Navbar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/users">Utilisateurs</Link>
      <Link to="/users/create">Créer un utilisateur</Link>
    </nav>
  );
}
