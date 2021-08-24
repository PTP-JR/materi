// import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";

const App = () => {
  const hello = "hello world dari JS";

  const handleClickImage = () => {
    console.log("image click");
    alert("image click ");
  };

  const siswa = ["thoriq", "auzan", "lutfi"];

  // let stopLight = "green";
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>{hello}</h1>
      <h1>{"Hello World".toUpperCase()}</h1>
      <h1 className="hello">Hello World 10 + 10</h1>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <img
        src="https://www.bing.com/th?id=OIP.L4bFJgvmXyaADC-IzDmqawHaE7&w=223&h=137&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
        alt="gambar kucing"
        onClick={handleClickImage}
      />
      {/* conditional harus menggunakan ternary */}
      {/* {stopLight ? "jalan" : "berhenti"} */}

      {siswa.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
};

export default App;
