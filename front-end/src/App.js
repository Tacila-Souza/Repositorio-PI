import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './Paginas/Home';
import Etes from './Paginas/Etes';
import Sobre from './Paginas/Sobre';
import Projeto from './Paginas/Projeto';
import Cadastro from './Paginas/Cadastro';
import Paglogin from './Paginas/Paglogin';
import Admin from './Paginas/Admin';
import NovoProjeto from './Paginas/NovoProjeto';


function App() {
  return (
    <>
< BrowserRouter>

< Routes >
  <Route path='/' element={<Home />}/>
  <Route path='/Etes' element={<Etes/>}/>
  <Route path='/Sobre' element={<Sobre/>}/>
  <Route path='/Cadastro' element={<Cadastro/>}/>
  <Route path='/Paglogin' element={<Paglogin/>}/>
  <Route path='/Projeto' element={<Projeto/>}/>
  <Route path='/Admin' element={<Admin/>}/>
  <Route path='/NovoProjeto' element={<NovoProjeto/>}/>
</Routes>
</BrowserRouter >





    </>
 
  );
}

export default App;
