import React from 'react'

const GifList = props =>{
  return (
    <ul>
    {props.displayGifs.map((g)=>{
      return <li key={g.title}>
        <img src={g.images.original.url} alt={g.title}/>
      </li>
    })
  }
    </ul>
  )
}

export default GifList
