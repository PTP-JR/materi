import React, { useState, useEffect } from "react";
import ListProduct from "./ListProduct";

function ReactAsync() {
  const [count, setCount] = useState(0);
  // const [pikachu, setPikachu] = useState({});
  const [post, setPost] = useState([]);

  useEffect(() => {
    // semua yang ada didalam use effect sini, hanya perjalan 1 kali
    // document.title = `Anda sudah mengklik ${count}`;

    const fetchData = async () => {
      // const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      setPost(data);
      // console.log(response);
      // console.log(data);
    };

    fetchData();
  }, []);
  console.log("post", post);
  return (
    <div>
      <h1>React async</h1>
      {/* {count}
      <button onClick={() => setCount(count + 1)}>+</button> */}
      {/* {pikachu.name}
      {pikachu.height} */}

      {/* Menampilkan data menggunakan array of object */}

      {/* {post.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <h1>{item.body}</h1>
        </div>
      ))} */}
      <ListProduct post={post} />
    </div>
  );
}

export default ReactAsync;
