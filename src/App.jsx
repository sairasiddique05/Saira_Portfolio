import { useState } from 'react'
import PortFolio from './portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PortFolio/>
    </>
  )
}

export default App
