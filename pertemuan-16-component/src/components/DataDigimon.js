import { useEffect, useState } from "react"

function DataDigimon() {
  // Menyiapkan state kosong
  const [dataDigimon, setDataDigimon] = useState([])

  // ambil data lalu dimasukkan ke dalam state
  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then(result => result.json())
    .then(result => setDataDigimon(result))
    .catch(err => console.log(err))
  }, [])

  console.log(dataDigimon);

  return (
    <>
      <h1>Digimon</h1>
      {dataDigimon.map(item => (
        <h3>{item.name}</h3>
      ))}
    </>
  )
}

export default DataDigimon