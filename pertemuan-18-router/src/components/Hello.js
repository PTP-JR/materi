import { useState } from "react"

import logoReact from '../logo.svg';

function Hello({planet}) {
  const [kata, setKata] = useState("Hello")

  const [images, setImages] = useState([logoReact])

  const handleClick = () => {
    setKata("Selamat datang di")
  }

  return (
    <>
      <h1 onClick={handleClick}>{kata} {planet}</h1>
      <img src={images[0]} width="200px"  alt="" />
    </>
  )
}

export default Hello
