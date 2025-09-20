import Game from './Componentes/evento/Jogo';
import Form from './Componentes/Form'
import { useState } from 'react'
import './App.css'


import './App.css'

function App() {
  const [isLogado, setIsLogado] = useState(false);
 
  const handleLogin = () => {
    setIsLogado(true);
  };
 
  const handleLogout = () => {
    setIsLogado(false);
  };
 
  return (
    <div className='App'>
      <h1>Faça login para jogar o joguinho da veia</h1>
      {!isLogado && <Form onLogin={handleLogin} />}
 
      {isLogado && <Game onLogout={handleLogout} />}
    </div>
  );
}

export default App
