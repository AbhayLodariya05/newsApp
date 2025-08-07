import React from 'react'
import Navbar from './component/Navbar'
import NewsBord from './component/NewsBord'
import { useState } from 'react'
import Footer from './component/Footer'
 
const App = () => {
  const [category, setcategory] = useState("general")
  return (
    <div className="app">
      <Navbar setcategory={setcategory} />
      <NewsBord category={category} />
      <Footer />
    </div>
  )
}

export default App
