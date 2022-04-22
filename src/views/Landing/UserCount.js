import { useEffect, useState } from "react";
import services from "../../services";

export function UserCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    services
      .getFruitsCount()
      .then((response) => {
        console.log(response);
        setCount(response.count);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {count !== null ? <span>. Il y a {count} fruits.</span> : <span></span>}
    </>
  );
}
