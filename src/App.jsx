import React from 'react'
import Header from './components/Header'
import { GlobalProvider } from './context/GlobalState'
import Balance from './components/Balance'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className = 'container'>
        <Balance/>
      </div>
    </GlobalProvider>
    
  )
}

export default App