import './App.css';
import Nav from './components/nav/Nav.jsx';
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

import { useState, useEffect} from 'react';//importa el hook useState y useEffect
import { useLocation, useNavigate} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


function App () {


  const location = useLocation();

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();

 
  const username = 'biancastrk@gmail.com';
  const password = '123';

  const [access, setAccess] = useState(false);

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   } else {alert('Usuario o Password incorrecto')}
};
  
  
  const onSearch = (character) =>{  
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            //en esta linea le digo que me traiga el "valor" anterior (oldChars) y me lo agregue (en characters a traves de setCharacters ) -->  
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       }); 
  };

  const onClose =(id) =>{
  // filtro de cada caracter el id que no sea = (o sea diferente)al que tengo seleccionado 
    setCharacters(characters.filter(char => char.id !== id))
  };

  
useEffect(() => {
  !access && navigate('/');
}, [access]);



  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
    {/*en la linea de abajo le digo q si el pathname donde esta localizado es != a '/' entonces me muestre la NavSearch */}   
        {location.pathname !== '/' && <Nav onSearch={onSearch} />}
       
      </div>
        {/*Declaro las rutas de mi app*/}
        <Routes>
         {/*"exact" especifica que solo sea en la direccion del path '/' y nada mas */}
          <Route exact path='/' element={<Form login={login}/>} /> {/*le paso a Form la funcion login*/}
          <Route path='/home' element={ <Cards 
         characters={characters} 
         onClose={onClose} />}/>
          
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/detail/:detailId' element={<Detail />}/>
         
          <Route path='*' element={<Error />} />

        </Routes>
         
    </div>
  )
}

export default App
