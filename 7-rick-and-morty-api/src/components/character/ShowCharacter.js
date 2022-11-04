import Character from "./Character";

import React from 'react'

const ShowCharacter = ({name}) => {
    const [characters, loading] = llamadaAPI(name);
  return (
    <div>ShowCharacter</div>
  )
}

export default ShowCharacter