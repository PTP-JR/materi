import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function ListUser() {
  const history = useHistory()
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(result => setUsers(result))
  }, []);

  const userClick = (user) => {
    history.push(`/users/${user.id}`)
  }

  return (
    <div>
      <p>klik salah satu user</p>
      {users.map((user, index) => (
        <div key={index} onClick={() => userClick(user)}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ListUser
