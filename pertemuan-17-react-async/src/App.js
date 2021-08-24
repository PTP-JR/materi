import "./App.css";
import ReactAsync from "./components/ReactAsync";
import EventForm from "./components/EventForm";

// import { useState } from "react";
// import Navigasi from "./components/Navigasi";
// import KontenUtama from "./components/KontenUtama";
// import Skill from "./components/Skill";
// import Counter from "./components/Counter";
// import DataDigimon from "./components/DataDigimon";
// import Hello from "./components/Hello";

function App() {
  // menyiapkan data dalam bentuk state
  // const [keahlian, setKeahlian] = useState(["Ngoding", "Tidur", "Makan"]);

  return (
    <div className="App">
      <EventForm />
      <ReactAsync />
      {/* membagi tampilan menjadi sebuah komponen */}
      {/* <Navigasi />
      <KontenUtama /> */}

      {/* Oper data menggunakan props */}
      {/* <Hello name="alpha" />
      <Hello name="beta" /> 
      <Hello name="delta" /> */}

      {/* mapping state dan di oper datanya menggunakan props */}
      {/* {keahlian.map((item, index) => (
        <Skill keahlian={item} key={index} />
      ))}

      <Counter />
      <DataDigimon />
       */}

      <footer>
        <span>by Auzan</span>
      </footer>
    </div>
  );
}

export default App;
