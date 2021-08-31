import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function DetailUser() {
  const {id} = useParams()

const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(result => result.json())
    .then(result => setUser(result))
  }, [])

  console.log(user)

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  )
}

export default DetailUser
