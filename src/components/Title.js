import { useEffect, useState } from "react";

export function Title() {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/ping")
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        setConnected(json.alive);
      })
      .catch(() => {
        setConnected(false);
      });
  }, []);

  return (
    <div>
      <h1>Toto</h1>
      <h2>{connected ? "IT'S ALIVE" : ":("}</h2>
    </div>
  );
}
