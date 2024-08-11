import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-gradient-to-tr from-[#002642] via-[#E5DADA] to-[#02040F] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
      <Header/>
      <Hero/>
      </div>
        
    </>
  )
}

export default App
