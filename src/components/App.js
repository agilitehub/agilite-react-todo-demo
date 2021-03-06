import React from 'react'
import { useSelector } from 'react-redux'
import { AgiliteReact } from 'agilite-react'

function App () {
  const appConfig = useSelector(state => state.appConfig)

  return (
    <AgiliteReact
      config={appConfig}
    />
  )
}

export default App
