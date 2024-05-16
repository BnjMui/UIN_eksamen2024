import { useState } from "react"

 export default function Moviecard ({imgUrl, titleText}) {
  
    
    return (
        <article>
            <img src={imgUrl} width={250} height={364}/>
            <p>{titleText}</p>
        </article>
    )
}