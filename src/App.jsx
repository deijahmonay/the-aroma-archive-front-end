import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Landing from './components/Landing/Landing.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'



const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        { user ? (
            <Route path="/" element={<Dashboard user={user} />} />
         ) : (
            <Route path="/" element={<Landing />} />
         )}
      </Routes>
    </>  
    )
}

export default App