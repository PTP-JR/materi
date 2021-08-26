import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory()

  const [user, setUser] = useState({
    username: "auzan",
    password: "123"
  });

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    // setUsername(event.target.value)

    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(dataLogin);

    if (dataLogin.username === user.username){
      if (dataLogin.password === user.password){
        history.push("/about")
      }
    } else {
      alert("username dan password salah")
    }
  }


  return (
    <div>
      <h1>Login</h1>

      <form>
        <input 
          type="text" 
          name="username" 
          placeholder="username" 
          id=""
          value={dataLogin.username}
          onChange={handleChange}
          />

        <input 
          type="text" 
          name="password" 
          placeholder="password" 
          id="" 
          value={dataLogin.password}
          onChange={handleChange}
          />

          <button onClick={handleSubmit}>kirim</button>
      </form>
    </div>
  );
}

export default Login;
