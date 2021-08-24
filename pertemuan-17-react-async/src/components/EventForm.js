import React, { useState } from "react";

function EventForm() {
  // function handleClick(event) {
  //   event.preventDefault();
  //   console.log("ke klik");
  // }
  const [username, setUsername] = useState("");

  console.log("username", username);
  return (
    <div>
      <h1>Event & Form</h1>
      <a
        href="https://www.google.com/"
        onClick={(event) => {
          event.preventDefault();
          console.log("tes");
        }}
      >
        Klik Saya
      </a>
      <form>
        <input
          type="text"
          placeholder="Masukan Username anda"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </form>
      <button
        onClick={() => {
          alert("Halo saya alert");
        }}
      >
        Alert
      </button>
    </div>
  );
}

export default EventForm;
