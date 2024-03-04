import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button>click <meta http-equiv="X-UA-Compatible" content="ie=edge" /></Button>
    </>
  )
}

export default App
