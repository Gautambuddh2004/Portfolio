import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home.jsx'

import Project from './component/Project.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Project/>}/>
    </Routes>
  )
}

export default App
