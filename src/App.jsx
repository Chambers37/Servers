import { useState } from "react"
import { useEffect } from "react"


const App = () => {

  const [list, setList] = useState({})

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const pokeList = await response.json();
      setList(pokeList.results)

    }
    getPokemon();
  },[])

  return (
    <div>
      
      <h1>Hello Server World!</h1>
      <ul>
        {list.length > 1 ? 
        list.map(mon => {
          return <li key={mon.name}>{mon.name}</li>
        }) : null
        }
      </ul>

    </div>
  )
}

export default App
