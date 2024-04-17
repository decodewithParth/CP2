import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchRecipeByName from './components/SearchRecipeByName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <SearchRecipeByName/>
      <h1>Parth Chauhan</h1>
    </>
  )
}

export default App
