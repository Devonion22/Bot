import { useEffect, useState } from 'react'
import Arrow from './icons/arrow.tsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gradient-main min-h-screen flex flex-col items-center text-white font-medium">

      <div className="absolute inset-0 h-1/2 bg-gradient-overlay z-0"></div>
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="radial-gradient-overlay"></div>
      </div>

      <div className="w-full z-10 min-h-screen flex flex-col items-center text-white">
        <div className="fixed top-0 left-0 w-full px-4 pt-6 z-10 flex flex-col item-center text-white">
          <div className="w-full cursor-pointer">
            <div className="bg-[#1f1f1f] text-center py-2 rounded-xl">
              <a className="text-lg" href="https://t.me/neverisendthe">Author <Arrow size={18} className="ml-0 mb-0.5 inline-block"></Arrow></a>
            </div>
          </div>
          <div className='mt-12 text-5xl font-bold flex items-center'>
            <h1>Other coming soon...</h1>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
