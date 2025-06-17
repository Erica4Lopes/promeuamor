import { useState } from 'react'
import './index.css'

function App() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  const isFelipe = name.toLowerCase() === 'felipe'

  return (
    <>
      <div className='p-6'>
        <p className="mb-4 text-lg font-semibold">Qual seu nome e sua cor favorita?</p>
        <input 
          id='Nm'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome mais lindo"
          className="border border-gray-400 rounded-md p-2 mb-4 w-full"
        />
        <input 
          id='Cl'
          type="text"
          value={color} 
          onChange={(e) => setColor(e.target.value)}
          placeholder='Digite uma cor'
          className="border border-gray-400 rounded-md p-2 mb-4 w-full"
          />
        {name && (  
          isFelipe ? (
            <div 
              className="text-white text-5xl font-bold p-6 rounded-full border-8 inline-block" 
              style={{ color: color || 'black'}}
            >
              Oii meu amor
            </div>
          ) : (
          <p 
            className="italic text-lg font-medium" 
            style={{ color: color || 'black' }}
          >
            Oii {name}
          </p>
          )
        )}
      </div>
    </>
  )
}

export default App
