import { useEffect, useState } from "react";

function Pokemon(props) {
  return (
    <div>
      <h3 className="capitalize">{props.name}</h3>
    </div>
  );
}

export function SearchEngine() {
  const [data, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  // const state = useState()
  // const data = state[0]
  // const setState = state[1]

  function fetchPokemons() {
    setLoading(true);
    fetch("http://localhost:1337/pokemons")
      .then((res) => res.json())
      .then((pokemonsJson) => {
        setLoading(false);
        setState(pokemonsJson);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  useEffect(() => fetchPokemons(), []);

  return (
    <div>
      <h2>Search Engine {loading ? "..." : ""}</h2>
      <input defaultValue="yolo" />

      {data.map((pokemon) => (
        <Pokemon key={pokemon} name={pokemon} />
      ))}
    </div>
  );
}
