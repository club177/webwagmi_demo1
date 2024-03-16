import { useState } from 'react'
import './App.css'
import './nav.css'
import { Readconstract } from './read'












function App() {
  return (
    <div className="App">
      <div className="nav">

        <div className="navtw">

        </div>
        <div className="walletdev">
          <w3m-button />
        </div>
      </div>
      {/* ------------------------------------------------------ */}
      <div className="pages">
        {/* <div className="h1text">
          <h1 className='names'>name:</h1>
          <h1>1111</h1>
        </div>
        <div className="h2text">
          <h1 className='minted'>minted:</h1>
          <h1>222</h1>
        </div> */}
        {/* -------------------------------------------------- */}
       
        <Readconstract />
      </div>
    </div>
  )
}

export default App
