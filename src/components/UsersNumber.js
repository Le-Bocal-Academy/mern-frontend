import { useEffect, useState } from "react";
import services from "../services";

function UsersNumber() {
  const [usersNb, setUsersNb] = useState(0);

  // getUsersList()
  // (1) pending
  // (2) a) Resolved
  // (2) b) Rejected

  useEffect(() => {
    services.getUsersList().then((res) => setUsersNb(res.data));
  }, []);

  return <div>Il y a {usersNb} utilisateurs.</div>;
}

export default UsersNumber;
