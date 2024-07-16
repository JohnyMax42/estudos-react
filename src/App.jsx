import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './componentes/Cabecalho'
import Cartao from './components/Cartao'
import Botao from './components/Botao'
import TesteEstado from './components/TesteEstado'

function App() {
  const [count, setCount] = useState(0)

  let pessoa={
    nome: 'gabriela',
    imagem: 'https://th.bing.com/th/id/R.5b88625f42e89321f02009b15b6b3535?rik=W19K1FbaZQEw7A&riu=http%3a%2f%2f2.bp.blogspot.com%2f-AMBR1_IRfiQ%2fUU9XfiIY22I%2fAAAAAAAAERs%2fN4IXoMSHjrc%2fs1600%2fYgritte-From-Game-of-Thrones-6.jpg&ehk=vyCYPMR%2bFqzo1YlIXPAY%2bjdFztRYv96uW2501Jr90nQ%3d&risl=&pid=ImgRaw&r=0',
    descricao: 'Artista'
  }

  let gato={
    nome: 'Shakira',
    profissao: 'hitman'
  }

  return (
    <>

      <Cartao nome={pessoa.nome} imagem={pessoa.imagem} descricao={pessoa.descricao}></Cartao>

      <TesteEstado></TesteEstado>

      <Botao></Botao>

      <Cabecalho titulo={'Titulo'} subtitulo={'Titulo 2'}></Cabecalho>
      <Cabecalho titulo={'Primeiro Parâmetro'} subtitulo={'Segundo Parâmetro'}></Cabecalho>
      <Cabecalho titulo={gato.nome} subtitulo={gato.profissao}></Cabecalho>
    
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
