import { useState } from "react";
import { LabelBlock } from "../../components/LabelBlock";
import services from "../../services";

function LoginPage({ setConnected }) {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });

  function updateBody(key, value) {
    setBody({ ...body, [key]: value });
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    updateBody(name, value);
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    services
      .login(body)
      .then(() => {
        localStorage.setItem("connected", true);
        setConnected(true);
      })
      .catch((err) => {
        console.log(err);
        alert("oups");
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <pre>{JSON.stringify(body, null, 2)}</pre>
      <form
        onSubmit={handleSubmitLogin}
        onChange={handleChangeInput}
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
          <input placeholder="toto" type="password" name="password" />
        </LabelBlock>

        <button>Envoyer tout ça</button>
      </form>
    </div>
  );
}

export default LoginPage;
