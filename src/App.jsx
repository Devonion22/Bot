import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gradient-main w-full min-h-screen px-4 flex flex-col items-center text-black font-medium">
      <div className='w-full z-10 min-h-screen flex flex-col items-center text-'>
        <div className='fixed top-0 left-0 w-full px-4 pt-8 z-10 flex flex-col items-center text-black'>
          <h1 className="text-4xl font-bold underline">
            Error 404
          </h1>
          <h1 className="text-4xl font-italic">
            Page not found
          </h1>
          <h1 className="text-4xl font-italic">
            Contact with me in <a href='https://t.me/neverisendthe' className="text-4xl font-bold">Telegram</a>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default App
