import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  const isFelipe = name.toLowerCase() === 'felipe'

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100">
        <div className="mt-10 flex flex-col items-center">
        <p className="text-lg font-semibold mb-4">Qual seu nome e sua cor favorita?</p>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome mais lindo"
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-64"
        />
        <input 
          type="text"
          value={color} 
          onChange={(e) => setColor(e.target.value)}
          placeholder='Digite uma cor'
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-64"
          />
      </div>

        {name && (  
          isFelipe ? (
            <div 
              className="heart-container mt-8" 
              style={{ '--heart-color': color || 'red' }}
            >
              <div className="heart">
              <span className="heart-text">Oii meu amor</span>
              </div>
            </div>
          ) : (
          <p 
            className="mt-8 text-xl font-medium" style={{ color: color || 'black' }}>
            Oii {name}
          </p>
          )
        )}
      </div>
    </>
  )
}

export default App
