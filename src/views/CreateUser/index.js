import { useNavigate } from "react-router-dom";
import services from "../../services";
import "./index.css";

function getFormValue(elements, name) {
  return elements[name]?.value;
}

export function CreateUser() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const name = getFormValue(elements, "name");
    const description = getFormValue(elements, "description");

    if (!name) {
      alert("Ajouter un nom.");
      return;
    }
    if (!description) {
      alert("Ajouter une description");
      return;
    }

    services
      .createUser({ name, description })
      .then(() => navigate("/users"))
      .catch(console.log);
  }

  return (
    <div>
      <h1>Création d'Utilisateurs</h1>
      <form onSubmit={handleSubmit} className="create-user">
        <LabelBlock labelName="Nom">
          <input name="name" />
        </LabelBlock>

        <LabelBlock labelName="Description">
          <textarea rows={5} name="description" />
        </LabelBlock>

        <button>Envoyer</button>
      </form>
    </div>
  );
}

const LabelBlock = ({ labelName, children }) => {
  return (
    <div className="block">
      <label>{labelName}</label>
      {children}
    </div>
  );
};
