import React from 'react'
import ReactDOM from 'react-dom'
import Skur, { useSkur } from './Skur'

import './Skur.css'

// This wrapper is only needed because of the rule "hooks can only be called within hooks or functional components"
function SkurWrapper() {
  return <Skur {...useSkur()} />
}

ReactDOM.render(
  <React.StrictMode>
    <SkurWrapper />
  </React.StrictMode>,
  document.getElementById('skur')
)
