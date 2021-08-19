import { useEffect, useState } from "react"

function DataDigimon() {
  const [dataDigimon, setDataDigimon] = useState([])

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
    </>
  )
}

export default DataDigimon