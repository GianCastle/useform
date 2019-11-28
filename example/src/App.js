import React from 'react'
import { useMyHook } from 'useform'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App