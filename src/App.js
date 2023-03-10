import React from 'react'
import { useState } from 'react'

export default function App() {
  const [color, setColor] = useState('red')
  return (
    <div>
      {color === 'red' && <div onClick={() => setColor('green')} className='block red'></div>}
      {color === 'green' && <div onClick={() => setColor('red')} className='block green'></div>}
    </div>
  )
}
