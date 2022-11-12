import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Componets/AboutUs/AboutUs';
import  Header from './Componets/Home/Header/Header';
import Home from './Componets/Home/Home/Home';
import Login from './Componets/Login/Login';
import SingUp from './Componets/Login/SingUp/SingUp';
import NavContact from './Componets/NavContact/NavContact';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/navcontact' element={<NavContact></NavContact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
