import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path={'/details'} element={<ProtectedRoute Component={Details} />} /> 
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;