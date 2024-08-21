import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold underline">
        Error 404
      </h1>
      <h1 className="text-4xl font-italic">
        Page not found
      </h1>
      <h1 className="text-4xl font-italic">
        Contact with me <a href='https://t.me/neverisendthe' className="text-4xl font-bold">Telegram</a>
      </h1>
    </>
  )
}

export default App
