import "./App.css";

import Navigasi from "./components/Navigasi";
import KontenUtama from "./components/KontenUtama";
import Skill from "./components/Skill";
import { useState } from "react";
import Counter from "./components/Counter";
import DataDigimon from "./components/DataDigimon";
import Hello from "./components/Hello";

function App() {
  // menyiapkan data dalam bentuk state
  const [keahlian, setKeahlian] = useState(["Ngoding", "Tidur", "Makan"]);

  return (
    <div className="App">
      {/* membagi tampilan menjadi sebuah komponen */}
      <Navigasi />
      <KontenUtama />

      {/* Oper data menggunakan props */}
      <Hello name="alpha" />
      <Hello name="beta" /> 
      <Hello name="delta" />

      {/* mapping state dan di oper datanya menggunakan props */}
      {keahlian.map((item, index) => (
        <Skill keahlian={item} key={index} />
      ))}

      <Counter />
      <DataDigimon />

      <footer>
        <span>by Auzan</span>
      </footer>
    </div>
  );
}

export default App;
