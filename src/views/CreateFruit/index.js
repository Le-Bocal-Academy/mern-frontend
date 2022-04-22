import { useNavigate } from "react-router-dom";
import services from "../../services";
import "./index.css";
import { LabelBlock } from "../../components/LabelBlock";

function getFormValue(elements, name) {
  return elements[name]?.value;
}

export function CreateFruit() {
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
      .createFruit({ name, description })
      .then(() => navigate("/users"))
      .catch(console.log);
  }

  return (
    <div>
      <h1>Création de fruits</h1>
      <form onSubmit={handleSubmit} className="create-user">
        <LabelBlock labelName="Nom du fruit">
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
