import { useState } from "react"
export default function Petal({ petal }) {

  return (
    <li style={{"listStyle": "none"}}>
      <div className="left">
        <p>{petal.petal1}</p>
        <p>{petal.petal2}</p>
        <p>{petal.petal3}</p>
        <p>{petal.petal4}</p>
        <p>{petal.petal5}</p>
        <p>{petal.petal6}</p>
        <p>{petal.petal7}</p>
        <p>{petal.petal8}</p>
        <p>{petal.petal9}</p>
        <p>{petal.petal10}</p>
        <p>{petal.petal11}</p>
        <p>{petal.petal12}</p>
      </div>
</li>

  )
}