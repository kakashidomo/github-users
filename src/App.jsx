import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <img className='rounded-t-2xl border-7 border-neutral-400 w-30 h-30' src="https://randomuser.me/api/portraits/men/51.jpg" alt="perfil" />
        </div>
        <div>
          <span>
            Followers
          </span>
          <span>
            27839
          </span>
        </div>
        <div>
          <span>
            Following
          </span>
          <span>
            0
          </span>
        </div>
        <div>
          <span>
            Location
          </span>
          <span>
            San Francisco, CA
          </span>
        </div>
      </div>
    </>
  )
}

export default App
