import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

const EXAMPLE_USER_LIST = [
  { username: "Vaikkun", age: 25 },
  { username: "Prabha", age: 27 },
];

function App() {
  const [users, setUsers] = useState(EXAMPLE_USER_LIST);
  const handleAddUser = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };
  return (
    <div>
      <AddUser submit={handleAddUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
