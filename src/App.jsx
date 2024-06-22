import { useState } from 'react'
import HomeMenu from './pages/HomeMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeMenu></HomeMenu>
    </>
  )
}

export default App
