import { useState, useEffect } from "react";
import Tile from "../../Components/Tile";
import axios from 'axios';
import Button from "../../Components/Button";

type User = {
  id: number;
  name: string;
  username: string;
};

function InstagramDetails() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [dataCompleteBoolean, SetDataCompleteBoolean] = useState(false);

  const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data: User[] = res.data;
        setUsers([...data, ...data, ...data]);
        console.log("data received", data);
      } catch (err: any) {
        setError(err.message);
      } finally { //always execute whether it's a success or failure.
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchUsers();
  }, []); 
  // And with version 18 of React, when we use React.StrictMode, every useEffect hook executes twice even with no dependency specified. 
  // This only happens in the development environment and not in production when you deploy the application.
  // remove <React.StrictMode> from main.tsx

  return (
    <div
      className="d-flex bg-dark justify-content-center align-items-center"
      style={{ height: "100vh", width: "30%" }}
    >
      {loading ? (
        <div className="bg-dark" style={{ height: "90%", width: "90%" }}>Loading</div>
      ) : (
        <div className="bg-light" style={{ height: "90%", width: "90%" }}>
          <h1>{`Followers: ${users.length}`}</h1>
          <Button text="Refresh" onButtonClick={fetchUsers}/>
          <ul className="list-group overflow-scroll" style={{ height: "90%" }}>
            {users.map((user) => (
              <Tile fullName={user.name} userName={user.username} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default InstagramDetails;
