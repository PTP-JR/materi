import logo from "./logo.svg";
import "./App.css";

import Navigasi from "./components/Navigasi";
import KontenUtama from "./components/KontenUtama";
import Skill from "./components/Skill";
import { useState } from "react";
import Counter from "./components/Counter";
import DataDigimon from "./components/DataDigimon";

function App() {
  // State = Data yg hidup di dlm sebuah komponen
  const [keahlian, setKeahlian] = useState(["Ngoding", "Tidur", "Makan"]);

  return (
    <div className="App">
      {/* membagi tampilan menjadi sebuah komponen */}
      <Navigasi />

      <KontenUtama />

      {/* Props = data yg di oper */}
      {keahlian.map((item, index) => (
        <Skill keahlian={item} key={index} />
      ))}

      {/* <Skill keahlian="Ngoding" />
      <Skill keahlian="Tidur" /> 
      <Skill keahlian="Makan" />   */}
     
      <Counter />

      <DataDigimon />

      <footer>
        <span>by Auzan</span>
      </footer>
    </div>
  );
}

export default App;
