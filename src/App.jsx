import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'



const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <h1>🌸Welcome to Your Aroma Archive🌸</h1>
    </>  
    )
}

export default App