import './App.css';
import { Route,Routes, Link } from 'react-router-dom'
import Home from './screens/Home/Home';
import AddEmployee from './screens/AddEmployee/AddEmployee';
import EditEmployee from './screens/EditEmployee/EditEmployee';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/add' element={<AddEmployee/> }/>
        <Route path='/edit' element={<EditEmployee/> }/>
      </Routes>
  );
}

export default App;
