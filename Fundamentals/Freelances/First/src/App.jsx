import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './assets/Logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='nav-bar'>
        <img src={Logo} width="70px" height="70px" alt="" />
        <div className='nav-bar-links'>
          <ul>
            <li><a href="#">Atracciones</a></li>
            <li><a href="#">Eventos Especiales</a></li>
            <li><a href="#">Boletos y Precios</a></li>
          </ul>
        </div>
      </div>
      
      <div className="grid-vento">
        <div className="grid-vento-1"></div>
        <div className="grid-vento-2">
          <h4>Explore your imagination with us</h4>
          <img src="" width="100px" height="100px" alt="Image of person" />
        </div>
        <div className="grid-vento-4">Carrusel</div>
        <div className="grid-vento-3">
          <div className="banner"></div>
          <div className="banner2">
            <h4>Buy Now</h4>
            <p>And get a cuppon by 40% of desc</p>
          </div>
          <div className="banner3">
            <a href="#">F</a>
          </div>
        </div>
      </div>
      {/* <div className="card"> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      {/* </div> */}
    </>
  )
}

export default App
