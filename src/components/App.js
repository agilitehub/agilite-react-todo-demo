import React from 'react'
import { useSelector } from 'react-redux'
import { AgiliteReact } from 'armand-testing-typescript'

function App () {
  const appConfig = useSelector(state => state.appConfig)

  return (
    <AgiliteReact
      config={appConfig}
    />
  )
}

export default App
