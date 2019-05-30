import React from 'react'

function GifList(props){
  return(
    <ul>
      {props.gifs.map(g => {
        return <li key={g.id}><img src={g.images.original.url} alt={g.title}/></li>
      })}
    </ul>
  )
}

export default GifList
