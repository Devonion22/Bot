import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gradient-main min-h-screen px-4 flex flex-col items-center text-black font-medium">
      <div className='w-full z-10 min-h-screen flex flex-col items-center text-'>
        <h1 className="text-4xl font-bold underline">
          Error 404
        </h1>
        <h1 className="text-4xl font-italic">
          Page not found
        </h1>
        <h1 className="text-4xl font-italic">
          Contact with me <a href='https://t.me/neverisendthe' className="text-4xl font-bold">Telegram</a>
        </h1>
      </div>
    </div>
  )
}

export default App
