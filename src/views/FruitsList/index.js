import { useEffect, useState } from "react";
import services from "../../services";
import { Fruit } from "./Fruit";
import "./FruitList.css";

function FruitsList() {
  const [fruits, setFruits] = useState([]);

  function fetchAndSetFruits() {
    services
      .getFruitsList()
      .then((fruitsFromDb) => setFruits(fruitsFromDb))
      .catch(() => alert("oh no"));
  }

  function deleteFruitAndRefresh(id) {
    services.deleteFruitById(id).then(() => {
      fetchAndSetFruits();
    });
  }

  useEffect(fetchAndSetFruits, []);

  return (
    <div>
      <h1>Liste des fruits</h1>
      {fruits.map((fruit) => (
        <Fruit
          key={fruit._id}
          {...fruit}
          onDeleteFruit={() => deleteFruitAndRefresh(fruit._id)}
        />
      ))}
    </div>
  );
}

export default FruitsList;
