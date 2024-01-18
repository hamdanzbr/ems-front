import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import View from './Pages/View';
import Header from './components/Header';

function App() {
  return (
    <>
         <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/view/:id' element={<View/>}/>
     </Routes>
    </>
  );
}

export default App;
