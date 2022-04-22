import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LabelBlock } from "../../components/LabelBlock";
import services from "../../services";

function SignupPage() {
  const [body, setBody] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function updateBody(key, value) {
    // Il faut toujours faire une copie du state qu'on veut modifier si c'est un objet
    // objet = {  } ou [ ]
    setBody({ ...body, [key]: value });
  }

  function handleFormChange(event) {
    const name = event.target.name; // email
    const value = event.target.value; // toto@toto.com
    updateBody(name, value);
  }

  function handleSubmitSignup(event) {
    event.preventDefault();
    services
      .signup(body)
      .then(() => navigate("/"))
      .catch(() => alert("ça ne s'est pas passé comme prévu"));
  }

  return (
    <div>
      <h1>S'inscrire</h1>
      <pre>{JSON.stringify(body, null, 2)}</pre>
      <form
        onChange={handleFormChange}
        onSubmit={handleSubmitSignup}
        style={{
          border: "solid 1px white",
          display: "grid",
          width: "400px",
          placeItems: "center",
        }}
      >
        <LabelBlock labelName="Votre email">
          <input placeholder="toto@toto.com" type="email" name="email" />
        </LabelBlock>
        <LabelBlock labelName="Votre mot de passe">
          <input
            placeholder="toto"
            minLength={5}
            type="password"
            name="password"
          />
        </LabelBlock>
        <LabelBlock labelName="Confirmez le mot de passe">
          <input
            placeholder="toto"
            minLength={5}
            type="password"
            name="confirmPassword"
          />
        </LabelBlock>
        <button>Envoyer tout ça</button>
      </form>
    </div>
  );
}

export default SignupPage;
